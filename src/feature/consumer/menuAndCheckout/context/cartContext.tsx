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