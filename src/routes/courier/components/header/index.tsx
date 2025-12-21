import MélobeeLogo from "../../../../components/Mélobee-logo";
import ExploreAsCustomer from "./exploreAsCustomer";

function header() {
    return (
        <div className="bg-black text-white flex justify-between">
            <MélobeeLogo />
            <ExploreAsCustomer />
        </div>
    )
}

export default header;