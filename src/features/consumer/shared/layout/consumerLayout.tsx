import { ConsumerAuthContextProvider } from "../../shared/context/AuthProvider"
import Header from "../section/header"
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