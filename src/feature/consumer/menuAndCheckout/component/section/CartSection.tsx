import { useCartContext } from "../../context/cartContext"
import CartFloatingButton from "../ui/CartFloatingButton"
import CartPanel from "../ui/CartPanel"

function CartSection() {
  const { openCart, isCartOpen, totalQuantity } = useCartContext()
  return (
    <>
      {!isCartOpen && (
        <CartFloatingButton totalQuantity={totalQuantity} onOpen={openCart} />
      )}

      {isCartOpen && (
        <CartPanel />
      )}
    </>
  )
}

export default CartSection