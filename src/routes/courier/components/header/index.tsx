import AmazonesLogo from "../../../../components/amazones-logo";
import ExploreAsCustomer from "./exploreAsCustomer";

function header() {
    return (
        <div className="bg-black text-white flex justify-between md:py-0 py-5">
            <AmazonesLogo />
            <ExploreAsCustomer />
        </div>
    )
}

export default header;