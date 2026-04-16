import MerchantCardLayout from "../ui/MerchantCardLayout"
import { useAvailableMerchants } from "../../hook/useAvailableMerchants"

function AvailableMerchantList() {
  const { merchants, isLoading, error } = useAvailableMerchants()

  return (
    <>
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
    </>
  )
}

export default AvailableMerchantList