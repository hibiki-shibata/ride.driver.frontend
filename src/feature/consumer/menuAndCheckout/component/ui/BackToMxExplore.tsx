import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"

function BackToMxExplore() {
    return (
        <Link to={CONSUMER_ROUTE.MERCHANTS}
            className="underline hover:text-amber-300 text-sm font-bold mt-4 mx-4 inline-block">
            Back To Explore
        </Link>
    )
}

export default BackToMxExplore