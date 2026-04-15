import { CONSUMER_ROUTE } from '../../../../shared/constant/routePath'

function AlreadyLoggedIn() {
    return (
        <div className="flex flex-col items-center px-20 min-h-screen sm:py-32 bg-gray-900 text-white">
            <h1 className="mb-10 text-4xl font-bold">
                You are already logged in!
            </h1>
            <a href={CONSUMER_ROUTE.HOME}>
                <button className="bg-sky-600 hover:bg-sky-700 font-bold rounded-lg p-4">
                    Explore Amazones
                </button>
            </a>
        </div>
    )
}

export default AlreadyLoggedIn