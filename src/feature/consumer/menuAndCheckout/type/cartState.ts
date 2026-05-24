import type { CartItem } from "./cartItem"

export type CartState = {
    openCart: () => void
    closeCart: () => void
    isCartOpen: boolean
    isCartEmpty: boolean
    addItem: (targetItem: CartItem) => void
    removeItem: (targetItem: CartItem) => void
    merchantId: string
    cartItems: CartItem[]
    totalQuantity: number
    totalPrice: number
    checkout: () => void
    isCheckoutPending: boolean
    isCheckoutDisabled: boolean
    checkoutError: Error | null
    clearCart: () => void
}