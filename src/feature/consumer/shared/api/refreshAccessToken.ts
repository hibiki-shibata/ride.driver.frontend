import { CONSUMER_API_URI } from "../../../../shared/constant/apiUri"
import { AccessTokenManager } from "../service/accessTokenManager"

let refreshPromise: Promise<string | null> | null = null // To prevent multiple simultaneous refresh requests

export async function refreshAccessToken(): Promise<string | null> {
    try {
        if (!refreshPromise) {
            refreshPromise = (async () => {
                const res = await fetch(CONSUMER_API_URI.REFRESH_TOKEN, {
                    method: "POST",
                    credentials: "include", // include http only cookie - refresh token
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