import CartSection from "./CartSection"
import MenuListSection from "../section/MenuListSection"
import MxProfileHeader from "../ui/MxProfileHeader"
import BackToMxExplore from "../ui/BackToMxExplore"

function MenuAndCheckoutSection() {
  return (
    <div className="min-h-screen bg-slate-900 px-6 py-10 text-white flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <BackToMxExplore />
        <MxProfileHeader />
        <MenuListSection />
      </div>
      <CartSection />
    </div>
  )
}

export default MenuAndCheckoutSection