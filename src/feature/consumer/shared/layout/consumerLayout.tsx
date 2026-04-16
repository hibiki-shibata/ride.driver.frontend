import { ConsumerAuthContextProvider } from "../context/ConsumerAuthContext"
import Header from "../component/ConsumerHeader"
import Footer from "../../../../shared/component/footer"

function ConsumerLayout({ children }: { children: React.ReactNode }) {
    return (
        <ConsumerAuthContextProvider>
            <Header />
            {children}
            <Footer />
        </ConsumerAuthContextProvider>
    )
}

export default ConsumerLayout