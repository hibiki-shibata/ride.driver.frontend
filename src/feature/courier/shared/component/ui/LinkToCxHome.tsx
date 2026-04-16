import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"
import { Link } from "react-router-dom"

function LinkToCxHome() {
    return (
        <Link to={CONSUMER_ROUTE.HOME} className=" hover:underline sm:pr-10 pr-4 p-3 md:m-3">
            Explore as a Customer
        </Link>
    )
}

export default LinkToCxHome