import { ConsumerAuthContextProvider } from "../shared/context/AuthProvider"
import Header from "../shared/section/header"
import ConsumerExploreBodySection from "./section/bodySection"

function ConsumerExplore() {
    return (
        <ConsumerAuthContextProvider>
            <Header />
            <ConsumerExploreBodySection />
        </ConsumerAuthContextProvider>
    )
}
export default ConsumerExplore