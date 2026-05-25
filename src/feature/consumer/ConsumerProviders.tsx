import { ConsumerAuthContextProvider } from "./shared/context/ConsumerAuthContext"

function ConsumerProviders({ children }: { children: React.ReactNode }) {
    return (
        <ConsumerAuthContextProvider>
            {children}
        </ConsumerAuthContextProvider>
    )
}

export default ConsumerProviders