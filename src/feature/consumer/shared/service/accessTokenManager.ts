import { refreshAccessToken } from "../api/refreshAccessToken"

export class AccessTokenManager {
    private static instance: AccessTokenManager
    private accessToken: string | null = null

    private constructor() { }

    public static getInstance(): AccessTokenManager {
        if (!AccessTokenManager.instance) {
            AccessTokenManager.instance = new AccessTokenManager()
        }
        return AccessTokenManager.instance
    }

    public setAccessToken(token: string) {
        this.accessToken = token
    }

    public async getAccessToken(): Promise<string | null> {
        if (!this.accessToken) await refreshAccessToken()
        return this.accessToken
    }

    public refreshAccessToken(newToken: string) {
        this.accessToken = newToken
    }

    public clearAccessToken() {
        this.accessToken = null
    }
}