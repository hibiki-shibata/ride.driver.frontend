import { useEffect, useState } from "react"
import { getAvailableMerchants } from "../api/getAvailableMerchants"
import type { MerchantProfile } from "../type/merchantProfile"
// import { useNavigate } from "react-router-dom"

const testMerchants: MerchantProfile[] = [ // Remove this when API is ready
    {
        id: "12345678",
        name: "Merchant A",
        phoneNumber: "1234567890",
        merchantAddress: "123 Main St",
        merchantComment: "Best food in town!",
        merchantStatus: "OPEN",
        merchantAddressCoordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
        },
    },
    {
        id: "0987654e",
        name: "Merchant B",
        phoneNumber: "0987654321",
        merchantAddress: "456 Elm St",
        merchantComment: "Delicious meals!",
        merchantStatus: "CLOSED",
        merchantAddressCoordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
        },
    },
]

function AvailableMerchant() {
    const [merchants, setMerchants] = useState<MerchantProfile[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getAvailableMerchants()
                setMerchants(res)
            } catch (err) {
                console.error("Failed to fetch available merchants:", err)
            }
        }
        fetchData()
        setMerchants(testMerchants) // Remove this line when API is ready
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 p-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {merchants.map((merchant) => (
                    <div className="bg-gray-800 m-1 p-8 rounded-xl overflow-hidden hover:bg-gray-700 cursor-pointer"
                        key={merchant.id}
                        onClick={() => console.error(`Clicked on merchant: ${merchant.name}`)}>
                        <div className="font-bold pb-2 text-4xl">{merchant.name}</div>
                        <div className="pb-4 text-2xl">{merchant.merchantComment}</div>
                        <div className="bg-gray-700 p-2 rounded-lg">
                            <p>Status: <span className="text-green-500">{merchant.merchantStatus}</span></p>
                            <p>Address: {merchant.merchantAddress}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default AvailableMerchant