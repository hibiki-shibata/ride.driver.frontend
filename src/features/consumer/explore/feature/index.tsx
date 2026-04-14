import { CartContextProvider } from "./shared/context/cartContext"
import AvailableMenu from "./menu/component/availableMenu"

function ConsumerMenuCheckout() {
    return (
        <CartContextProvider>
            <AvailableMenu />
        </CartContextProvider>
    )
}

export default ConsumerMenuCheckout