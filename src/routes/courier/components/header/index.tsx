import AmazonesLogo from "../../../../components/amazones-logo";
import ExploreAsCustomer from "./exploreAsCustomer";

function header() {
    return (
        <div className="bg-black text-white flex justify-between">
            <AmazonesLogo />
            <ExploreAsCustomer />
        </div>
    )
}

export default header;