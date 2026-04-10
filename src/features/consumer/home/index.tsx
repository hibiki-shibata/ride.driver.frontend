import { ConsumerAuthContextProvider } from "../shared/context/AuthProvider"
import Header from "../shared/section/header"
import Footer from "../../../shared/component/footer"
import ConsumerHomeBodySection from "../home/section/bodySection"

function ConsumerHome() {
    return (
        <ConsumerAuthContextProvider>
            <Header />
            <ConsumerHomeBodySection />
            <Footer />
        </ConsumerAuthContextProvider>
    )
}

export default ConsumerHome