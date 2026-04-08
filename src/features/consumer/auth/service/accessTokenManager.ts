export class AccessTokenManager {
    private static instance: AccessTokenManager
    private accessToken: string | null = null

    private constructor() {}

    public static getInstance(): AccessTokenManager {
        if (!AccessTokenManager.instance) {
            AccessTokenManager.instance = new AccessTokenManager()
        }
        return AccessTokenManager.instance
    }

    public setAccessToken(token: string) {
        this.accessToken = token
    }

    public getAccessToken(): string | null {
        return this.accessToken
    }

    public clearAccessToken() {
        this.accessToken = null
    }
}