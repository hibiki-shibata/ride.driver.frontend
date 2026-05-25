import ConsumerHeader from "./shared/component/section/ConsumerHeader"
import Footer from "../../shared/component/Footer"

function ConsumerLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ConsumerHeader />
            {children}
            <Footer />
        </>
    )
}

export default ConsumerLayout