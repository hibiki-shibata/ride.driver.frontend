import { useEffect, useState } from "react"
import { getMenu } from "../api/getMenu"
import type { MenuItem } from "../type/menuItem"
import { useSearchParams } from "react-router-dom"

const testMenu: MenuItem[] = [ // Remove this when API is ready
    {
        id: "1",
        name: "Burger",
        description: "A delicious beef burger with lettuce, tomato, and cheese.",
        price: 8.99,
        enabled: true,
    },
    {
        id: "2",
        name: "Fries",
        description: "Crispy golden fries with a side of ketchup.",
        price: 3.49,
        enabled: true,
    },
    {
        id: "3",
        name: "Soda",
        description: "Refreshing carbonated drink available in various flavors.",
        price: 1.99,
        enabled: false,
    },
    {
        id: "3",
        name: "Soda",
        description: "Refreshing carbonated drink available in various flavors.",
        price: 1.99,
        enabled: false,
    },
]

function AvailableMenu() {
    const [menu, setMenu] = useState<MenuItem[] | null>(null)
    const [searchParams] = useSearchParams()
    const merchantId = searchParams.get("merchantId") || "Unknown Merchant"

    useEffect(() => {
        async function fetchMenu() {
            const res: MenuItem[] = await getMenu(merchantId)
            setMenu(res)
        }
        setMenu(testMenu) // Remove this line when API is ready
        fetchMenu()
    }, [])

    if (!menu) return <div>Loading...</div>

    return (
        <div className="min-h-screen bg-gray-900 p-4 text-white">
            {/* Merchant name */}
            <h1 className="text-4xl font-bold mb-6">{merchantId}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {menu.map(item => (
                    <div key={item.id}
                        className="bg-gray-800 m-1 px-7 pt-7 rounded-xl overflow-hidden hover:bg-gray-700 cursor-pointer">
                        {/* below item position in between  */}
                        <h3 className="font-bold text-2xl mb-4">{item.name}</h3>
                        <p className="mb-2">
                            <span className="text-green-500">${item.price.toFixed(2)}</span>
                            <span className="rounded-full bg-gray-600 font-bold text-xs px-2 py-1 ml-2 hover:bg-gray-500">
                                -
                            </span>
                            <span className="rounded-full bg-gray-600 font-bold text-xs px-2 py-1 ml-1 hover:bg-gray-500">
                                +
                            </span>
                        </p>
                        <p className="bg-gray-600 p-4 rounded-xl">{item.description}</p>
                        {!item.enabled && <p>(Currently unavailable)</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvailableMenu