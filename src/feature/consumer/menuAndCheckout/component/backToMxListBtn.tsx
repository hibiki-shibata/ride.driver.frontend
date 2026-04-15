import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"

function BackToMxListBtn() {
    return (
        <Link 
        to={CONSUMER_ROUTE.MERCHANTS} className="text-lg font-semibold mb-4 underline hover:text-gray-400">
            Back to List
        </Link>
    )
}

export default BackToMxListBtn