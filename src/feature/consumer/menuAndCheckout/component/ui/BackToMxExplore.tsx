import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"

function BackToMxExplore() {
    return (
        <Link to={CONSUMER_ROUTE.MERCHANTS}
            className="underline font-bold text-sm text-slate-300 hover:text-amber-200">
            Back To Explore
        </Link>
    )
}

export default BackToMxExplore