import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"

function LinkToCpExplore() {
    return (
        <Link to={CONSUMER_ROUTE.MERCHANTS} className="bg-sky-600 hover:bg-sky-700 font-bold rounded-lg p-4 ml-7">
            Explore Couriers nearby
        </Link>
    )
}

export default LinkToCpExplore