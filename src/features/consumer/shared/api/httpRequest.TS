import { CONSUMER_API_URI } from "../../../../shared/constant/apiUri"
import { AccessTokenManager } from "../service/accessTokenManager"

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

type HttpRequestOptions = {
  method: HttpMethod
  uri: string
  headers?: Record<string, string>
  body?: unknown
  requiresAuth?: boolean
}

let refreshPromise: Promise<string | null> | null = null

export async function httpRequest<TResponse, TBody = unknown>(
  options: HttpRequestOptions,
  retried = false
): Promise<TResponse> {
  try {
    const { method, uri, headers, body, requiresAuth = false } = options

    const accessToken = AccessTokenManager.getInstance().getAccessToken()

    const finalHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...headers,
    }

    if (requiresAuth && accessToken) {
      finalHeaders.Authorization = `Bearer ${accessToken}`
    }

    const res = await fetch(uri, {
      method,
      headers: finalHeaders,
      credentials: "include",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })

    // Retry once if unauthorized and requires auth, to handle access token expiration
    if (res.status === 401 && requiresAuth && !retried) {
      const newAccessToken = await refreshAccessToken()

      if (!newAccessToken) {
        AccessTokenManager.getInstance().clearAccessToken()
        throw new Error("Session expired")
      }

      return httpRequest<TResponse, TBody>(options, true)
    }

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(
        `HTTP request failed (${res.status}): ${errorText || res.statusText}`,
      )
    }

    return res.json() as Promise<TResponse>
  } catch (err) {
    console.error("HTTP request error:", err)
    throw err
  }
}

async function refreshAccessToken(): Promise<string | null> {
  try {
    // If there's already a refresh in progress, skip the duplicated request
    if (!refreshPromise) {
      refreshPromise = (async () => {
        const res = await fetch(CONSUMER_API_URI.REFRESH_TOKEN, {
          method: "POST",
          credentials: "include", // include http only cookie
        })

        if (!res.ok) {
          AccessTokenManager.getInstance().clearAccessToken()
          return null
        }

        const data = await res.json() as { accessToken: string }
        AccessTokenManager.getInstance().setAccessToken(data.accessToken)
        return data.accessToken
      })().finally(() => {
        refreshPromise = null
      })
    }
    return refreshPromise
  } catch (err) {
    console.error("Failed to refresh access token:", err)
    AccessTokenManager.getInstance().clearAccessToken()
    return null
  }
}