import { ConsumerAuthContextProvider } from "../context/authContext"
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