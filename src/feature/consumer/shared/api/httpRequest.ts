import { refreshAccessToken } from "./refreshAccessToken"
import { AccessTokenManager } from "../service/accessTokenManager"

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

type HttpRequestOptions = {
  method: HttpMethod
  uri: string
  headers?: Record<string, string>
  body?: unknown
  requiresAuth?: boolean
}

export async function httpRequest<TResponse, TBody = unknown>(
  options: HttpRequestOptions,
  retried = false
): Promise<TResponse> {
  try {
    const { method, uri, headers, body, requiresAuth = false } = options

    const finalHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...headers,
    }

    const accessToken: string | null = await AccessTokenManager.getInstance().getAccessToken()

    if (requiresAuth && accessToken) {
      finalHeaders.Authorization = `Bearer ${accessToken}`
      console.log("HTTP Request - Added Authorization Header")
    }

    const res = await fetch(uri, {
      method,
      headers: finalHeaders,
      credentials: "include",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })

    // Retry once if unauthorized and requires auth, to handle access token expiration
    if (res.status === 401 && requiresAuth && !retried) {
      await refreshAccessToken()
      return httpRequest<TResponse, TBody>(options, true)
    }

    if (!res.ok) {
      throw new Error(
        `HTTP request failed (${res.status}): ${res.text() || res.statusText}`,
      )
    }

    return res.json() as Promise<TResponse>
  } catch (err) {
    console.error("HTTP request error:", err)
    throw err
  }
}
