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
            enabled: i % 3 !== 0,
        }
        testMenuList.push(item)
    }
    return testMenuList
}

function AvailableMenu() {
    const orderCartRef = useRef<HTMLDivElement | null>(null)
    const { addItem, removeItem } = useCartContext()
    const [merchantItemList, setMerchantItemList] = useState<MenuItem[] | null>(null)
    const [searchParams] = useSearchParams()
    const merchantName: string = searchParams.get("merchantName") || "Unknown Merchant"
    const merchantId: string = searchParams.get("merchantId") || "Unknown Merchant Id"

    useEffect(() => {
        async function fetchMenu() {
            const res: MenuItem[] = await getMenu(merchantName)
            setMerchantItemList(res)
        }
        setMerchantItemList(testMenu) // Remove this line when API is ready
        fetchMenu()
    }, [])

    if (!merchantItemList) {
        return <div className="min-h-screen bg-slate-900 text-white p-0">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-slate-900 p-4 text-white scroll-smooth flex">
            <div>
                <BackToMxListBtn />

                <h1 className="text-4xl font-bold m-10 text-center text-amber-200">
                    {merchantName}
                </h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {merchantItemList.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-800 border border-slate-700 m-1 px-7 pt-7 pb-6 rounded-2xl overflow-hidden hover:bg-slate-700 hover:border-amber-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg">
                            <h3 className="font-bold text-2xl mb-4 text-amber-100 text-center">
                                {item.name}
                            </h3>

                            <div className="mb-4 flex items-center justify-center gap-2">
                                <span className="text-emerald-400 font-bold text-lg">
                                    ${item.price.toFixed(2)}
                                </span>

                                <button
                                    className="rounded-full bg-slate-600 font-bold text-sm px-3 py-1 hover:bg-rose-500 transition-colors active:scale-90"
                                    onClick={() => removeItem(item.id)}>
                                    -
                                </button>

                                <button
                                    className="rounded-full bg-slate-600 font-bold text-sm px-3 py-1 hover:bg-emerald-500 transition-colors active:scale-110"
                                    onClick={() => addItem({
                                        itemId: item.id,
                                        name: item.name,
                                        price: item.price,
                                    })}>
                                    +
                                </button>
                            </div>

                            <p className="bg-slate-900 text-slate-300 p-4 rounded-xl border border-slate-700 text-center">
                                {item.description}
                            </p>

                            {!item.enabled && (
                                <p className="mt-3 text-center text-rose-400 font-semibold">
                                    Currently unavailable
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div ref={orderCartRef}
                onClick={() =>
                    orderCartRef.current?.scrollIntoView({behavior: "smooth" })
                }>
                <OrderCart merchantId={merchantId} />
            </div>
        </div>
    )
}

export default AvailableMenu