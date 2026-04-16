import { COURIER_ROUTE } from "../../../../../shared/constant/routePath"
import { Link } from "react-router-dom"

function LinkToCourierHome() {
    return (
        <>
            <Link className="hover:underline m-3 sm:block hidden" to={COURIER_ROUTE.HOME}>
                Join as a Courier
            </Link>
            <Link className="hover:underline m-4 sm:hidden block" to={COURIER_ROUTE.HOME}>
                Couriers
            </Link>
        </>
    )
}

export default LinkToCourierHome