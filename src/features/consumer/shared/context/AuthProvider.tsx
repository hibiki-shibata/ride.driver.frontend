import { createContext, useContext, useState } from 'react'
import type { ConsumerProfile } from '../type/consumerProfile'
import { AccessTokenManager } from '../service/accessTokenManager'
import { getConsumerProfile } from '../api/getConsumerProfile'

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading'

type ConsumerAuthContextType = {
    authStatus: AuthStatus
    consumerProfile: ConsumerProfile | null
    login: (accessToken: string) => void
    logout: () => void
}

const ConsumerAuthContext = createContext<ConsumerAuthContextType | null>(null)

export function ConsumerAuthContextProvider({ children }: { children: React.ReactNode }) {
    const [status, setStatus] = useState<AuthStatus>('authenticated')
    const [consumerProfileState, setConsumerProfileState] = useState<ConsumerProfile | null>(null)

    return (
        <ConsumerAuthContext.Provider value={{
            authStatus: status,
            consumerProfile: consumerProfileState,
            login: async (accessToken: string) => {
                AccessTokenManager.getInstance().setAccessToken(accessToken)
                const consumerProfile = await getConsumerProfile()
                setConsumerProfileState(consumerProfile)
                setStatus('authenticated')
            },
            logout: () => {
                setConsumerProfileState(null)
                setStatus('unauthenticated')
                AccessTokenManager.getInstance().clearAccessToken()
            }
        }}>
            {children}
        </ConsumerAuthContext.Provider>
    )
}

export function useConsumerAuthContext() {
    return useContext(ConsumerAuthContext)
}