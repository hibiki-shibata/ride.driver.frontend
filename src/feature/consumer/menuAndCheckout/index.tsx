import AvailableMenu from "./component/AvailableMenu"
import { CartContextProvider } from "./context/cartContext"

function MenuCheckout() {
    return (
            <CartContextProvider>
                <AvailableMenu />
            </CartContextProvider>
    )
}
export default MenuCheckout