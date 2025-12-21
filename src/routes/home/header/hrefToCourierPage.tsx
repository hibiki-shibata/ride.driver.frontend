function hrefToCourierPage() {
    return (
        <>
            <button className="hover:underline m-3 sm:block hidden">
                <a href="/ride.driver.frontend/courier">
                    Join as a Courier
                </a>
            </button>
            <button className="hover:underline m-3 sm:hidden block">
                <a href="/ride.driver.frontend/courier">
                    Couriers
                </a>
            </button>
        </>
    )
}

export default hrefToCourierPage;