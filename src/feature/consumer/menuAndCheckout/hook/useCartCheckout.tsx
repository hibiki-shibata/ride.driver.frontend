import { useState } from "react"
import { sendOrder } from "../api/sendOrder"
import { useConsumerAuthContext } from "../../shared/context/ConsumerAuthContext"

type CartItem = {
  itemId: string
  name: string
  price: number
  quantity: number
}

type UseCartCheckoutProps = {
  merchantId: string
  cartItems: CartItem[]
  clearCart: () => void
}

function getCartSummary(cartItems: CartItem[]) {
  return cartItems.reduce(
    (summary, item) => ({
      totalPrice: summary.totalPrice + item.price * item.quantity,
      totalQuantity: summary.totalQuantity + item.quantity,
    }),
    {
      totalPrice: 0,
      totalQuantity: 0,
    }
  )
}

export function useCartCheckout({
  merchantId,
  cartItems,
  clearCart,
}: UseCartCheckoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const consumerAuthContext = useConsumerAuthContext()
  
  const isAuthenticated: boolean = consumerAuthContext?.authStatus === "authenticated"

  const { totalPrice, totalQuantity } = getCartSummary(cartItems)

  const isCheckoutDisabled =
    isSubmitting || cartItems.length === 0 || !merchantId.trim() || !isAuthenticated

  async function handleCheckout() {
    if (isCheckoutDisabled) return

    try {
      setIsSubmitting(true)
      setSubmitError(null)

      await sendOrder({
        merchantId,
        cartItems,
      })

      clearCart()
      setIsCartOpen(false)
    } catch (error: unknown) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to send order."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  function openCart() {
    setIsCartOpen(true)
  }

  function closeCart() {
    if (isSubmitting) return
    setIsCartOpen(false)
  }

  function clearAndCloseCart() {
    if (isSubmitting || cartItems.length === 0) return
    clearCart()
    setIsCartOpen(false)
  }

  return {
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
  }
}