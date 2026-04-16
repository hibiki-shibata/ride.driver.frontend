import { CartContextProvider } from "./context/cartContext"
import MenuListSection from "./component/section/MenuListSection"
import BackToMxExplore from "./component/ui/BackToMxExplore"    

function MenuCheckout() {
    return (
        <div className="min-h-screen bg-slate-900 px-6 py-10 text-white">
            <CartContextProvider>
                <BackToMxExplore />
                <MenuListSection />
            </CartContextProvider>
        </div>
    )
}
export default MenuCheckout