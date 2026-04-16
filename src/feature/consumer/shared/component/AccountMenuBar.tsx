import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
import { useConsumerAuthContext } from "../context/ConsumerAuthContext"

function AccountMenuBar() {
    const { logout } = useConsumerAuthContext() ?? {}
    return (
        <div className="absolute right-5 top-16 bg-gray-600 rounded-lg p-4">
            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                href={CONSUMER_ROUTE.HOME}>
                Home
            </a>
            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                href={CONSUMER_ROUTE.ORDER_STATUS}>
                Active Order
            </a>
            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                href={CONSUMER_ROUTE.MERCHANTS}>
                Explore Merchants
            </a>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                onClick={logout}>
                Logout
            </button>
        </div>
    )
}

export default AccountMenuBar