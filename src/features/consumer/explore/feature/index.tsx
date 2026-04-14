import { CartContextProvider } from "./shared/context/cartContext"

function ConsumerMenuCheckout() {
    return (
        <CartContextProvider>
            <h1>Menu Checkout</h1>
        </CartContextProvider>
    )
}

export default ConsumerMenuCheckout