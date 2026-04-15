import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"

function BackToMxListBtn() {
    return (
        <a href={CONSUMER_ROUTE.MERCHANTS} className="text-lg font-semibold mb-4 underline hover:text-gray-400">
            Back to List
        </a>
    )
}

export default BackToMxListBtn