import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
import { getAvailableMerchants } from "../api/getAvailableMerchants"
import type { MerchantProfile } from "../type/merchantProfile"

function testMerchants(): MerchantProfile[] { // Remove
    const merchants: MerchantProfile[] = []
    for (let i = 0; i < 10; i++) {
        merchants.push({
            id: `${i}`,
            name: `Restaurant ${i}`,
            phoneNumber: `123456789${i}`,
            merchantAddress: `${i} Main St`,
            merchantComment: `This is merchant ${i}'s comment.`,
            merchantStatus: i % 2 === 0 ? "OPEN" : "CLOSED",
            merchantAddressCoordinates: {
                latitude: 37.7749 + i * 0.01,
                longitude: -122.4194 + i * 0.01,
            },
        })
    }
    return merchants
}

function AvailableMerchant() {
    const navigate = useNavigate()
    const [merchants, setMerchants] = useState<MerchantProfile[]>([])

    useEffect(() => {
        async function fetchMerchants() {
            const res: MerchantProfile[] = await getAvailableMerchants()
            setMerchants(res)
        }
        fetchMerchants()
        setMerchants(testMerchants) // Remove this line when API is ready
    }, [])

    return (
        <div className="text-white bg-slate-900 py-10 px-6">
            <div className="text-center text-5xl font-bold mb-10 text-amber-100">
                Explore Available Merchants
            </div>

            <div className="min-h-screen p-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {merchants.map((merchant) => (
                        <div
                            className="bg-slate-800 border border-slate-700 m-1 p-8 rounded-xl shadow-lg hover:bg-slate-700 hover:border-amber-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                            key={merchant.id}
                            onClick={() =>
                                navigate(
                                    CONSUMER_ROUTE.MENU +
                                    `?merchantId=${merchant.id}` +
                                    `&merchantName=${merchant.name}`
                                )
                            }
                        >
                            <div className="font-bold pb-2 text-3xl text-amber-200 text-center">
                                {merchant.name}
                            </div>

                            <div className="pb-4 text-lg text-slate-300 text-center">
                                {merchant.merchantComment}
                            </div>

                            <div className="bg-slate-900 p-4 rounded-lg text-center border border-slate-700">
                                <p className="mb-2">
                                    Status:{" "}
                                    <span
                                        className={
                                            merchant.merchantStatus === "OPEN"
                                                ? "text-emerald-400 font-semibold"
                                                : "text-rose-400 font-semibold"
                                        }
                                    >
                                        {merchant.merchantStatus}
                                    </span>
                                </p>
                                <p className="text-slate-300">
                                    Address: {merchant.merchantAddress}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AvailableMerchant