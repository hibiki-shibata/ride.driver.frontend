import ConsumerLayout from "../shared/layout/consumerLayout"
import AvailableMenu from "./component/availableMenu"
import { CartContextProvider } from "./context/cartContext"

function MenuCheckout() {
    return (
        <ConsumerLayout>
            <CartContextProvider>
                <AvailableMenu />
            </CartContextProvider>
        </ConsumerLayout>

    )
}
export default MenuCheckout