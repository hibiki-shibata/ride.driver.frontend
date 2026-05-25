import { Outlet } from "react-router-dom"
import { ConsumerAuthContextProvider } from "./shared/context/ConsumerAuthContext"
import ConsumerLayout from "./ConsumerLayout"

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