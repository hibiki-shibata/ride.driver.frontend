import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ConsumerProfile } from '../type/consumerProfile'
import { CONSUMER_ROUTE } from '../../../../shared/constant/routePath'
import { AccessTokenManager } from '../service/accessTokenManager'
import { getConsumerProfile } from '../api/getConsumerProfile'
import { refreshAccessToken } from '../api/refreshAccessToken'
import { logoutReq } from '../api/logoutReq'

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading'

type ConsumerAuthContextType = {
    authStatus: AuthStatus
    consumerProfile: ConsumerProfile | null
    login: (accessToken: string) => Promise<void>
    logout: () => Promise<void>
    restoreSession: () => Promise<boolean>
}

const ConsumerAuthContext = createContext<ConsumerAuthContextType | undefined>(undefined)


export function ConsumerAuthContextProvider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    const [authStatus, setAuthStatus] = useState<AuthStatus>('loading')
    const [consumerProfile, setConsumerProfile] = useState<ConsumerProfile | null>(null)

    const applyAuthenticatedState = async (accessToken: string) => {
        AccessTokenManager.getInstance().setAccessToken(accessToken)
        const profile = await getConsumerProfile()
        setConsumerProfile(profile)
        setAuthStatus('authenticated')
    }

    const clearAuthState = () => {
        AccessTokenManager.getInstance().clearAccessToken()
        setConsumerProfile(null)
        setAuthStatus('unauthenticated')
    }

    const restoreSession = async (): Promise<boolean> => {
        try {
            const accessToken = await refreshAccessToken()
            if (!accessToken) throw new Error("No valid access token found")
            await applyAuthenticatedState(accessToken)
            return true
        } catch {
            clearAuthState()
            return false
        }
    }

    const login = async (accessToken: string): Promise<void> => {
        setAuthStatus('loading')

        try {
            await applyAuthenticatedState(accessToken)
            setAuthStatus('authenticated')
        } catch (error) {
            clearAuthState()
            throw error
        }
    }

    const logout = async (): Promise<void> => {
        try {
            logoutReq()
            navigate(CONSUMER_ROUTE.HOME)
        } finally {
            clearAuthState()
        }
    }

    useEffect(() => {
        void restoreSession()
    }, [])

    const value = useMemo(
        () => ({
            authStatus,
            consumerProfile,
            login,
            logout,
            restoreSession,
        }),
        [authStatus, consumerProfile]
    )

    return (
        <ConsumerAuthContext.Provider value={value}>
            {children}
        </ConsumerAuthContext.Provider>
    )
}

export function useConsumerAuthContext() {
    const context = useContext(ConsumerAuthContext)

    if (!context) {
        throw new Error('useConsumerAuthContext must be used within ConsumerAuthContextProvider')
    }

    return context
}