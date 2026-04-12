import { useEffect, useState } from "react"
import { getAvailableMerchants } from "../api/getAvailableMerchants"
import type { MerchantProfile } from "../type/merchantProfile"
import { useNavigate } from "react-router-dom"

const testMerchants: MerchantProfile[] = [
    {
        id: "1",
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
        id: "2",
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
    const navigate = useNavigate()

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
        <div className="text-3xl">
            <ul>
                {merchants.map((merchant) => (
                    <li className="bg-gray-800 m-5 p-10 rounded-lg hover:bg-gray-700 cursor-pointer"
                        key={merchant.id}
                        onClick={() => navigate(`/consumer/explore/merchant/${merchant.id}`)}>
                        <div className="font-bold pb-3">{merchant.name}</div>
                        <div>{merchant.merchantComment}</div>
                        <div>Status: <span className="text-green-500">{merchant.merchantStatus}</span></div>
                        <div>Address: {merchant.merchantAddress}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AvailableMerchant