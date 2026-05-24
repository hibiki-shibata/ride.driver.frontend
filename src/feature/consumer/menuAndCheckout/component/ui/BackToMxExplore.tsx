import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"

function BackToMxExplore() {
    return (
        <Link className="underline font-bold text-sm text-slate-300 hover:text-amber-200"
            to={CONSUMER_ROUTE.MERCHANTS}>
            Back To Explore
        </Link>
    )
}

export default BackToMxExplore