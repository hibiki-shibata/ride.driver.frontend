import { COURIER_ROUTE } from "../../../../shared/constant/hrefRoute"

function LinkToCourierHome() {
    return (
        <>
            <button className="hover:underline m-3 sm:block hidden">
                <a href={COURIER_ROUTE.SIGNUP}>
                    Join as a Courier
                </a>
            </button>
            <button className="hover:underline m-4 sm:hidden block">
                <a href={COURIER_ROUTE.HOME}>
                    Couriers
                </a>
            </button>
        </>
    )
}

export default LinkToCourierHome