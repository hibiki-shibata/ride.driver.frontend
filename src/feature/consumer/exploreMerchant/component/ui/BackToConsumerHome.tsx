import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"
import { Link } from "react-router-dom"

function BackToConsumerHome() {
    return (
        <Link
            to={CONSUMER_ROUTE.HOME}
            className="underline font-bold text-sm text-slate-300 hover:text-amber-200"
        >
            Back to Home
        </Link>
    )
}

export default BackToConsumerHome