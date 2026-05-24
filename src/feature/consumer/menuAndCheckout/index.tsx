import { CartContextProvider } from "./context/cartContext"
import MenuAndCheckoutSection from "./component/section/MenuAndCheckoutSection"

function MenuCheckout() {
    return (
        <CartContextProvider>
            <MenuAndCheckoutSection />
        </CartContextProvider>
    )
}
export default MenuCheckout