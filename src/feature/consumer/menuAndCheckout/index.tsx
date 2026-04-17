import { CartContextProvider } from "./context/cartContext"
import MenuAndCheckoutSection from "./component/section/MenuAndCheckoutSection"
import BackToMxExplore from "./component/ui/BackToMxExplore"

function MenuCheckout() {
    return (
        <div className="min-h-screen bg-slate-900 px-6 py-10 text-white">
            <CartContextProvider>
                <BackToMxExplore />
                <MenuAndCheckoutSection />
            </CartContextProvider>
        </div>
    )
}
export default MenuCheckout