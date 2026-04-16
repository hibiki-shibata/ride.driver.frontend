// import { ConsumerAuthContextProvider } from "../context/ConsumerAuthContext"
import { Outlet } from "react-router-dom"
import CourierLayout from "../layout/courierLayout"

function CourierRoot() {
    return (
        <>
            <CourierLayout>
                <Outlet />
            </CourierLayout >
        </>
    )
}

export default CourierRoot