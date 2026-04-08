import { CONSUMER_ROUTE } from "../../../constant/hrefRoute"

function exploreAsCustomer() {
    return (
        <a href={CONSUMER_ROUTE.HOME} className=" hover:underline sm:pr-10 pr-4 p-3 md:m-3">
            Explore as a Customer
        </a>
    )
}

export default exploreAsCustomer