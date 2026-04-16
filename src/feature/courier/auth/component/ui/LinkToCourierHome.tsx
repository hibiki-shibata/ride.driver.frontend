import { Link } from "react-router-dom"
import { COURIER_ROUTE } from "../../../../../shared/constant/routePath"

function LinkToCourierHome() {
    return (
        <Link to={COURIER_ROUTE.HOME}
            className="bg-sky-500 hover:bg-sky-600 text-white absolute  text-black font-bold py-2 px-4 mb-4 rounded-lg top-25 left-5">
            Back to Courier page
        </Link>
    )
}

export default LinkToCourierHome