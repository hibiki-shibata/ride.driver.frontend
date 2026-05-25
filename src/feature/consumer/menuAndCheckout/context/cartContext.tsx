import { createContext, useContext, useMemo } from 'react'
import { useCartState } from "../hook/useCartState"
import type { CartState } from '../type/cartState'

const CartContext = createContext<CartState | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const cartState: CartState = useCartState()
    const cartContext = useMemo(() => cartState, [cartState]) // change when cart state changed
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCartContext must be used within a CartContextProvider')
    return context
}

// import { createContext, useContext, useState } from 'react'
// import { useMutation } from "@tanstack/react-query"
// import { useNavigate, useSearchParams } from "react-router-dom"
// import type { CartItem } from '../type/cartItem'
// import { sendOrder } from "../api/sendOrder"
// import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
// import { useConsumerAuthContext } from "../../shared/context/ConsumerAuthContext"

// type CartContextType = {
//     openCart: () => void
//     closeCart: () => void
//     isCartOpen: boolean
//     isCartEmpty: boolean
//     addItem: (targetItem: CartItem) => void
//     removeItem: (targetItem: string) => void
//     merchantId: string
//     cartItems: CartItem[]
//     totalQuantity: number
//     totalPrice: number
//     checkout: () => void
//     isCheckoutPending: boolean
//     isCheckoutDisabled: boolean
//     checkoutError: Error | null
//     clearCart: () => void
// }

// const CartContext = createContext<CartContextType | null>(null)

// function getCartSummary(cartItems: CartItem[]) {
//     return cartItems.reduce(
//         (summary, item) => ({
//             totalPrice: summary.totalPrice + item.price * item.quantity,
//             totalQuantity: summary.totalQuantity + item.quantity,
//         }),
//         {
//             totalPrice: 0,
//             totalQuantity: 0,
//         }
//     )
// }

// export function CartContextProvider({ children }: { children: React.ReactNode }) {
//     const redirect = useNavigate()
//     const [isCartOpen, setIsCartOpen] = useState(false)
//     const [cartItems, setCartItems] = useState<CartItem[]>([])
//     const [searchParams] = useSearchParams()
//     const merchantId = searchParams.get("merchantId") ?? ""
//     const { authStatus } = useConsumerAuthContext()
//     const isAuthenticated: boolean = authStatus === "authenticated"
//     const isCartEmpty: boolean = cartItems.length === 0

//     function addItem(targetItem: CartItem) {
//         setCartItems(prevItems => {
//             const prevItem = prevItems.find(item => item.id === targetItem.id)
//             if (prevItem) {
//                 return prevItems.map(item => item.id === targetItem.id ? { ...item, quantity: item.quantity + 1 } : item)
//             } else {
//                 return [...prevItems, { ...targetItem, quantity: 1 }]
//             }
//         })
//     }

//     function removeItem(targetItemId: string) {
//         setCartItems(prevItems => {
//             const prevItem = prevItems.find(item => item.id === targetItemId)
//             if (!prevItem) {
//                 return prevItems
//             } else if (prevItem.quantity === 1) {
//                 return prevItems.filter(item => item.id !== targetItemId)
//             } else {
//                 return prevItems.map(item => item.id === targetItemId ? { ...item, quantity: item.quantity - 1 } : item)
//             }
//         })
//     }

//     // Send Order
//     const { mutate, isPending, error } = useMutation({
//         mutationFn: () => sendOrder({ merchantId, cartItems }),
//         onSuccess: () => {
//             setCartItems([])
//             setIsCartOpen(false)
//             alert("Order placed successfully!")
//             redirect(CONSUMER_ROUTE.ORDER_HISTORY)
//         }
//     })

//     return (
//         <CartContext.Provider value={{
//             openCart: () => setIsCartOpen(true),
//             closeCart: () => setIsCartOpen(false),
//             isCartOpen: isCartOpen,
//             addItem: addItem,
//             removeItem: removeItem,
//             totalQuantity: getCartSummary(cartItems).totalQuantity,
//             totalPrice: getCartSummary(cartItems).totalPrice,
//             merchantId: merchantId,
//             cartItems: cartItems,
//             isCartEmpty: cartItems.length === 0,
//             checkout: () => mutate(),
//             isCheckoutPending: isPending,
//             isCheckoutDisabled: isPending || !isAuthenticated || isCartEmpty || !merchantId.trim(),
//             checkoutError: error,
//             clearCart: () => setCartItems([])
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export function useCartContext() {
//     const context = useContext(CartContext)
//     if (!context) throw new Error('useCart must be used within a CartContextProvider')
//     return context
// }