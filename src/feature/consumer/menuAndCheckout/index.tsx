import MenuListSection from "./component/section/MenuListSection"
import { CartContextProvider } from "./context/cartContext"

function MenuCheckout() {
    return (
        <CartContextProvider>
            <MenuListSection />
        </CartContextProvider>
    )
}
export default MenuCheckout