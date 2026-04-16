import { Outlet } from "react-router-dom"
import ConsumerLayout from "../layout/ConsumerLayout"
import { ConsumerAuthContextProvider } from "../context/ConsumerAuthContext"

function ConsumerRoot() {
    return (
        <ConsumerAuthContextProvider>
            <ConsumerLayout>
                <Outlet />
            </ConsumerLayout>
        </ConsumerAuthContextProvider>
    )
}

export default ConsumerRoot