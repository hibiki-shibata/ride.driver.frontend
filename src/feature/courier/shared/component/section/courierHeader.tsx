import AmazonesLogo from "../../../../../shared/component/amazones-logo"
import ExploreAsCustomer from "../ui/LinkToCxHome"

function CourierHeader() {
    return (
        <section className="bg-black text-white flex justify-between md:py-0 py-5 ">
            <AmazonesLogo />
            <ExploreAsCustomer />
        </section>
    )
}

export default CourierHeader