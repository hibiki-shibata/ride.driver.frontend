import { CartContextProvider } from "./context/cartContext"
import MenuListSection from "./component/section/MenuListSection"
import BackToMxExplore from "./component/ui/BackToMxExplore"

function MenuCheckout() {
    return (
        <section className="min-h-screen bg-slate-900 p-4 text-white md:flex md:gap-6">
            <CartContextProvider>
                <BackToMxExplore />
                <MenuListSection />
            </CartContextProvider>
        </section>
    )
}
export default MenuCheckout