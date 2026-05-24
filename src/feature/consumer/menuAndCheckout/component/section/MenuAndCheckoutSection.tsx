import { useSearchParams } from "react-router-dom"
import CartSection from "../ui/CartSection"
import MenuListSection from "../ui/MenuListSection"
import MxProfileHeader from "../ui/MxProfileHeader"

function MenuAndCheckoutSection() {
  const [searchParams] = useSearchParams()
  const merchantId = searchParams.get("merchantId") ?? ""
  
  return (
    <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <MxProfileHeader merchantId={merchantId} />
          <MenuListSection merchantId={merchantId} />
        </div>
        <CartSection merchantId={merchantId} />
    </div>
  )
}

export default MenuAndCheckoutSection