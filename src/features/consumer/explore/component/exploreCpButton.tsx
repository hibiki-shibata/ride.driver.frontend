import { CONSUMER_ROUTE } from "../../../../shared/constant/hrefRoute"

function ExploreCpButton() {
    return (
        <a href={CONSUMER_ROUTE.EXPLORE}>
            <button className="bg-sky-600 hover:bg-sky-700 font-bold rounded-lg p-4 ml-7">
                Explore Couriers nearby
            </button>
        </a>
    )
}

export default ExploreCpButton