import { createContext, useContext, useState } from 'react'
import type { ConsumerProfile } from '../type/consumerProfile'

const ConsumerAuthContext = createContext<{
    consumerProfile: ConsumerProfile | null
    setConsumerProfile: (profile: ConsumerProfile | null) => void
}>({
    consumerProfile: null,
    setConsumerProfile: () => { },
})

export function ConsumerAuthContextProvider({ children }: { children: React.ReactNode }) {
    const [consumerProfileState, setConsumerProfileState] = useState<ConsumerProfile | null>(null)
    return (
        <ConsumerAuthContext.Provider value={{
            consumerProfile: consumerProfileState,
            setConsumerProfile: setConsumerProfileState,
        }}>
            {children}
        </ConsumerAuthContext.Provider>
    )
}

export function useConsumerAuthContext() {
    return useContext(ConsumerAuthContext)
}