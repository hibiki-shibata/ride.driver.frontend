import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"
import { useConsumerAuthContext } from "../../context/ConsumerAuthContext"


type AccountMenuItem = {
    name: string
    href: string
}

const accountMenuItems: AccountMenuItem[] = [
    { name: "Home", href: CONSUMER_ROUTE.HOME },
    { name: "Explore Merchants", href: CONSUMER_ROUTE.MERCHANTS },
    { name: "Order History", href: CONSUMER_ROUTE.ORDER_HISTORY },
]


function AccountMenuBar() {
    const { logout, consumerProfile } = useConsumerAuthContext() ?? {}
    return (
        <>
            <div className="absolute right-5 top-16 bg-gray-600 rounded-lg p-4">
                <p className="text-sm text-slate-300 mb-2">
                    {consumerProfile ? consumerProfile.emailAddress : "Unknown User"}
                </p>
                {accountMenuItems.map((item) => (
                    <a key={item.name} className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                        href={item.href}>
                        {item.name}
                    </a>
                ))}
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                    onClick={logout}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default AccountMenuBar