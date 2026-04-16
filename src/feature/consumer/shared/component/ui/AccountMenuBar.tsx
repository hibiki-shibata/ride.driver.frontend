import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"
import { useConsumerAuthContext } from "../../context/ConsumerAuthContext"


type AccountMenuItem = {
    name: string
    href: string
}

const accountMenuItems: AccountMenuItem[] = [
    { name: "Home", href: CONSUMER_ROUTE.HOME },
    { name: "Active Order", href: CONSUMER_ROUTE.ORDER_STATUS },
    { name: "Explore Merchants", href: CONSUMER_ROUTE.MERCHANTS },
]


function AccountMenuBar() {
    const { logout } = useConsumerAuthContext() ?? {}
    return (
        <div className="absolute right-5 top-16 bg-gray-600 rounded-lg p-4">
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
    )
}

export default AccountMenuBar