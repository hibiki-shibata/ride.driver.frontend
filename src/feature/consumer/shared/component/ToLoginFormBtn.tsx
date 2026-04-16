import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
import { Link } from "react-router-dom"

function ToLoginFormBtn() {
    return (
        <Link className="bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700"
            to={CONSUMER_ROUTE.LOGIN}>
            Log in
        </Link>
    )
}

export default ToLoginFormBtn