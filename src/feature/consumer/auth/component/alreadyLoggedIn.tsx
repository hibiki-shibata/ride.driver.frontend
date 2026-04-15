import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"

function AlreadyLoggedIn() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-center text-white sm:px-20">
            <h1 className="mb-4 text-4xl font-bold">
                You are already logged in
            </h1>

            <p className="mb-10 text-sm text-gray-300 sm:text-base">
                You can continue browsing available merchants.
            </p>

            <Link
                to={CONSUMER_ROUTE.MERCHANTS}
                className="rounded-lg bg-sky-600 px-6 py-4 font-bold transition-colors hover:bg-sky-700">
                Explore Amazones
            </Link>
        </section>
    )
}

export default AlreadyLoggedIn