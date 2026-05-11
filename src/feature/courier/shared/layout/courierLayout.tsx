import CourierHeader from "../component/section/courierHeader"
import Footer from "../../../../shared/component/Footer"

function CourierLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CourierHeader />
            {children}
            <Footer />
        </>
    )
}

export default CourierLayout