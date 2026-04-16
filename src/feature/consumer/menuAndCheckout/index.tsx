import AvailableMenu from "./component/section/MenuListSection"
import { CartContextProvider } from "./context/cartContext"

function MenuCheckout() {
    return (
            <CartContextProvider>
                <AvailableMenu />
            </CartContextProvider>
    )
}
export default MenuCheckout