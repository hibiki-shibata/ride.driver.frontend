import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"

function LinkToCpExplore() {
    return (
        <a href={CONSUMER_ROUTE.MERCHANTS}>
            <button className="bg-sky-600 hover:bg-sky-700 font-bold rounded-lg p-4 ml-7">
                Explore Couriers nearby
            </button>
        </a>
    )
}

export default LinkToCpExplore