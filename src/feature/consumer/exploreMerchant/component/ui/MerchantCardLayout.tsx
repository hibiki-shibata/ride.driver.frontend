import { Link } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"
import type { MerchantProfile } from "../../type/merchantProfile"

type MerchantCardProps = {
  merchant: MerchantProfile
}

function MerchantCardLayout({ merchant }: MerchantCardProps) {
  const searchParams = new URLSearchParams({
    merchantId: merchant.id,
    merchantName: merchant.name,
  })

  return (
    <Link
      to={`${CONSUMER_ROUTE.MENU}?${searchParams.toString()}`}
      className="block rounded-xl border border-slate-700 bg-slate-800 p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-amber-400 hover:bg-slate-700"
    >
      <article>
        <h2 className="pb-2 text-center text-3xl font-bold text-amber-200">
          {merchant.name}
        </h2>

        <p className="pb-4 text-center text-lg text-slate-300">
          {merchant.merchantComment}
        </p>

        <div className="rounded-lg border border-slate-700 bg-slate-900 p-4 text-center">
          <p className="mb-2">
            Status:{" "}
            <span
              className={
                merchant.merchantStatus === "OPEN"
                  ? "font-semibold text-emerald-400"
                  : "font-semibold text-rose-400"
              }
            >
              {merchant.merchantStatus}
            </span>
          </p>

          <p className="text-slate-300">
            Address: {merchant.merchantAddress}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default MerchantCardLayout