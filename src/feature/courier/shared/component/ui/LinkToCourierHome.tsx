import { Link } from "react-router-dom"
import { COURIER_ROUTE } from "../../../../../shared/constant/routePath"

function LinkToCourierHome() {
    return (
        <Link to={COURIER_ROUTE.HOME}
            className="bg-sky-800 hover:bg-sky-900 text-white text-center font-bold py-3 px-4 rounded-lg">
            Back To Home
        </Link>
    )
}

export default LinkToCourierHome