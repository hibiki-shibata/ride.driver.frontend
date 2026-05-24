// import { useState } from "react"
// import { useMutation } from "@tanstack/react-query"
// import { useNavigate } from "react-router-dom"
// import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
// import { sendOrder } from "../api/sendOrder"
// import { useConsumerAuthContext } from "../../shared/context/ConsumerAuthContext"

// type CartItem = {
//   itemId: string
//   name: string
//   price: number
//   quantity: number
// }

// type UseCartCheckoutProps = {
//   merchantId: string
//   cartItems: CartItem[]
//   clearCart: () => void
// }

// type UseCartCheckout = {
//   isCartOpen: boolean
//   isPending: boolean
//   sendOrderError: string | null
//   totalPrice: number
//   totalQuantity: number
//   isCheckoutDisabled: boolean
//   openCart: () => void
//   closeCart: () => void
//   clearAndCloseCart: () => void
//   handleCheckout: () => void
// }

// function getCartSummary(cartItems: CartItem[]) {
//   return cartItems.reduce(
//     (summary, item) => ({
//       totalPrice: summary.totalPrice + item.price * item.quantity,
//       totalQuantity: summary.totalQuantity + item.quantity,
//     }),
//     {
//       totalPrice: 0,
//       totalQuantity: 0,
//     }
//   )
// }

// export function useCartCheckout({
//   merchantId,
//   cartItems,
//   clearCart,
// }: UseCartCheckoutProps): UseCartCheckout {
//   const navigate = useNavigate()
//   const { authStatus } = useConsumerAuthContext()
//   const [isCartOpen, setIsCartOpen] = useState(false)

//   const { mutate, isPending, error } = useMutation({
//     mutationFn: () => sendOrder({ merchantId, cartItems }),
//     onSuccess: () => {
//       clearCart()
//       setIsCartOpen(false)
//       alert("Order placed successfully!")
//       navigate(CONSUMER_ROUTE.ORDER_HISTORY)
//     },
//   })

//   const isAuthenticated: boolean = authStatus === "authenticated"

//   const { totalPrice, totalQuantity } = getCartSummary(cartItems)

//   const isCheckoutDisabled: boolean =
//     isPending || !isAuthenticated || cartItems.length === 0 || !merchantId.trim()

//   // async function handleCheckout() {
//   //   if (isCheckoutDisabled) return
//   //   try {
//   //     setIsSubmitting(true)
//   //     setSubmitError(null)
//   //     await sendOrder({
//   //       merchantId,
//   //       cartItems,
//   //     })
//   //     clearCart()
//   //     setIsCartOpen(false)
//   //     alert("Order placed successfully!")
//   //     navigate(CONSUMER_ROUTE.ORDER_HISTORY)
//   //   } catch (error: unknown) {
//   //     setSubmitError(
//   //       error instanceof Error ? error.message : "Failed to send order."
//   //     )
//   //   } finally {
//   //     setIsSubmitting(false)
//   //   }
//   // }

//   function clearAndCloseCart() {
//     if (isPending || cartItems.length === 0) return
//     clearCart()
//     setIsCartOpen(false)
//   }

//   return {
//     isCartOpen,
//     isPending,
//     sendOrderError: error instanceof Error ? error.message : null,
//     totalPrice,
//     totalQuantity,
//     isCheckoutDisabled,
//     openCart: () => setIsCartOpen(true),
//     closeCart: () => setIsCartOpen(false),
//     clearAndCloseCart,
//     handleCheckout: () => isCheckoutDisabled ? null : mutate(),
//   }
// }