import AmazonesLogo from "../../components/amazones-logo";

function header() {
    return (
        <div className="bg-black text-white flex justify-between">
            <AmazonesLogo />
            <a href="/ride.driver.frontend/home" className="pr-10 hover:underline p-3 m-3">
                Explore as a Customer
            </a>
        </div>
    )
}

export default header;