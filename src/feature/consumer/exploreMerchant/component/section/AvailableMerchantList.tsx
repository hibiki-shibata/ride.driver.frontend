import MerchantCardLayout from "../ui/MerchantCardLayout"
import { usePublishedMerchants } from "../../hook/usePublishedMerchants"

function AvailableMerchantList() {
  const { publishedMerchants, isLoadingPublishedMerchants, publishedMerchantsLoadError } = usePublishedMerchants()

  return (
    <>
      <h1 className="mb-10 mt-10 text-center text-5xl font-bold text-amber-200">
        Explore Available Merchants
      </h1>

      {isLoadingPublishedMerchants && (
        <p className="text-center text-lg text-slate-300 animate-bounce">
          Loading merchants...
        </p>
      )}

      {!isLoadingPublishedMerchants && publishedMerchantsLoadError && (
        <p className="text-center text-lg font-semibold text-rose-400">
          Failde to load published Merchant
        </p>
      )}

      {!isLoadingPublishedMerchants && !publishedMerchantsLoadError && publishedMerchants.length === 0 && (
        <p className="text-center text-lg text-slate-300">
          No merchants are published in the platform.
        </p>
      )}

      {!isLoadingPublishedMerchants && publishedMerchants.length > 0 && (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {publishedMerchants.map((merchant) => <MerchantCardLayout key={merchant.id} merchant={merchant} />)}
        </div>
      )}
    </>
  )
}

export default AvailableMerchantList