import MerchantCardLayout from "../layout/MerchantCardLayout"
import { useAvailableMerchants } from "../../hook/useAvailableMerchants"

// function testMerchants(): MerchantProfile[] { // Remove later
//     const merchants: MerchantProfile[] = []
//     for (let i = 0; i < 10; i++) {
//         merchants.push({
//             id: `${i}`,
//             name: `Restaurant ${i}`,
//             phoneNumber: `123456789${i}`,
//             merchantAddress: `${i} Main St`,
//             merchantComment: `This is merchant ${i}'s comment.`,
//             merchantStatus: i % 2 === 0 ? "OPEN" : "CLOSED",
//             merchantAddressCoordinates: {
//                 latitude: 37.7749 + i * 0.01,
//                 longitude: -122.4194 + i * 0.01,
//             },
//         })
//     }
//     return merchants
// }

function AvailableMerchantList() {
  const { merchants, isLoading, error } = useAvailableMerchants()

  return (
    <section className="min-h-screen bg-slate-900 px-6 py-10 text-white">
      <h1 className="mb-10 text-center text-5xl font-bold text-amber-100">
        Explore Available Merchants
      </h1>

      {isLoading && (
        <p className="text-center text-lg text-slate-300">
          Loading merchants...
        </p>
      )}

      {!isLoading && error && (
        <p className="text-center text-lg font-semibold text-rose-400">
          {error}
        </p>
      )}

      {!isLoading && !error && merchants.length === 0 && (
        <p className="text-center text-lg text-slate-300">
          No merchants are available right now.
        </p>
      )}

      {!isLoading && !error && merchants.length > 0 && (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {merchants.map((merchant) => (
            <MerchantCardLayout key={merchant.id} merchant={merchant} />
          ))}
        </div>
      )}
    </section>
  )
}

export default AvailableMerchantList