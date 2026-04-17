import { useCartContext } from "../../context/cartContext"
import { useCartCheckout } from "../../hook/useCartCheckout"
import CartFloatingButton from "./CartFloatingButton"
import CartPanel from "./CartPanel"

type CartProps = {
  merchantId: string
}

function CartSection({ merchantId }: CartProps) {
  const { addItem, removeItem, cartItems, clearCart } = useCartContext()

  const {
    isCartOpen,
    isSubmitting,
    submitError,
    totalPrice,
    totalQuantity,
    isCheckoutDisabled,
    openCart,
    closeCart,
    clearAndCloseCart,
    handleCheckout,
  } = useCartCheckout({
    merchantId,
    cartItems,
    clearCart,
  })

  if (!isCartOpen) {
    return (
      <CartFloatingButton
        totalQuantity={totalQuantity}
        onOpen={openCart}
      />
    )
  }

  return (
    <CartPanel
      cartItems={cartItems}
      totalPrice={totalPrice}
      isSubmitting={isSubmitting}
      submitError={submitError}
      isCheckoutDisabled={isCheckoutDisabled}
      onCheckout={handleCheckout}
      onClose={closeCart}
      onClearCart={clearAndCloseCart}
      onIncrease={addItem}
      onDecrease={removeItem}
    />
  )
}

export default CartSection