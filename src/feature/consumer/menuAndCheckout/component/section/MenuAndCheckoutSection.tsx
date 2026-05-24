import { useSearchParams } from "react-router-dom"
import CartSection from "./CartSection"
import MenuListSection from "../section/MenuListSection"
import MxProfileHeader from "../ui/MxProfileHeader"
import BackToMxExplore from "../ui/BackToMxExplore"

function MenuAndCheckoutSection() {
  const [searchParams] = useSearchParams()
  const merchantId = searchParams.get("merchantId") ?? ""

  return (
    <div className="min-h-screen bg-slate-900 px-6 py-10 text-white flex flex-col lg:flex-row gap-10">
      <BackToMxExplore />
      <div className="flex-1">
        <MxProfileHeader merchantId={merchantId} />
        <MenuListSection merchantId={merchantId} />
      </div>
      <CartSection merchantId={merchantId} />
    </div>
  )
}

export default MenuAndCheckoutSection