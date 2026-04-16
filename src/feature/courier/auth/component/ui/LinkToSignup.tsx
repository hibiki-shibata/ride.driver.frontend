import { COURIER_ROUTE } from "../../../../../shared/constant/routePath"
import { Link } from "react-router-dom"

function LinkToSignup() {
    return (
        <Link to={COURIER_ROUTE.SIGNUP} className="p-1 mt-15 bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700">
            Sign up now
        </Link>
    )
}

export default LinkToSignup