import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import type { MenuItem } from "../type/menuItem"
import { getMenu } from "../api/getMenu"
import { useCartContext } from "../context/cartContext"
import OrderCart from "./orderCart"
import BackToMxListBtn from "./backToMxListBtn"

function testMenu(): MenuItem[] {
    const testMenuList: MenuItem[] = []
    for (let i = 1; i <= 10; i++) {
        const item: MenuItem = {
            id: `item-${i}`,
            name: `Menu Item ${i}`,
            price: 9.99 + i,
            description: `This is the description for Menu Item ${i}. It is a delicious dish that you will love!`,
            enabled: i % 3 !== 0, // Every 3rd item is unavailable
        }
        testMenuList.push(item)
    }
    return testMenuList
}


function AvailableMenu() {
    const orderCartRef = useRef<HTMLDivElement | null>(null)
    const [searchParams] = useSearchParams()
    const merchantId: string = searchParams.get("merchantId") || "Unknown Merchant"
    const { addItem, removeItem } = useCartContext()
    const [merchantItemList, setMerchantItemList] = useState<MenuItem[] | null>(null)



    useEffect(() => {
        async function fetchMenu() {
            const res: MenuItem[] = await getMenu(merchantId)
            setMerchantItemList(res)
        }
        setMerchantItemList(testMenu) // Remove this line when API is ready
        fetchMenu()
    }, [])

    if (!merchantItemList) return <div>Loading...</div>

    return (
        <div className="min-h-screen bg-gray-900 p-4 text-white scroll-smooth">
            <BackToMxListBtn />
            <h1 className="text-4xl font-bold m-10  ">{merchantId}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {merchantItemList.map(item => (
                    <div key={item.id}
                        className="bg-gray-800 m-1 px-7 pt-7 rounded-xl overflow-hidden hover:bg-gray-700 cursor-pointer">
                        <h3 className="font-bold text-2xl mb-4">{item.name}</h3>
                        <p className="mb-2">
                            <span className="text-green-500">${item.price.toFixed(2)}</span>
                            <span className="rounded-full bg-gray-600 font-bold text-xs px-2 py-1 ml-2 hover:bg-gray-500"
                                onClick={() => removeItem(item)}>
                                -
                            </span>
                            <span className="rounded-full bg-gray-600 font-bold text-xs px-2 py-1 ml-1 hover:bg-gray-500"
                                onClick={() => addItem(item)}>
                                +
                            </span>
                        </p>
                        <p className="bg-gray-600 p-4 rounded-xl">{item.description}</p>
                        {!item.enabled && <p>(Currently unavailable)</p>}
                    </div>
                ))}
            </div>
            <div ref={orderCartRef}
                onClick={() => orderCartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>
                <OrderCart />
            </div>
        </div >
    )
}

export default AvailableMenu