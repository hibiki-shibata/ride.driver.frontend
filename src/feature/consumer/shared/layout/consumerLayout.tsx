import { ConsumerAuthContextProvider } from "../context/ConsumerAuthContext"
import ConsumerHeader from "../component/section/ConsumerHeader"
import Footer from "../../../../shared/component/Footer"

function ConsumerLayout({ children }: { children: React.ReactNode }) {
    return (
        <ConsumerAuthContextProvider>
            <ConsumerHeader />
            {children}
            <Footer />
        </ConsumerAuthContextProvider>
    )
}

export default ConsumerLayout