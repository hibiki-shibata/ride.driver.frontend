import { createContext, useContext, useState } from 'react'
import type { CartItem } from "../type/cartItem"

type AddItemParams = {
    itemId: string
    name: string
    price: number
}

type CartContextType = {
    cartItems: CartItem[]
    addItem: (addItemParams: AddItemParams) => void
    removeItem: (itemId: string) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setOrderItems] = useState<CartItem[]>([])

    function addItem(item: AddItemParams) {
        setOrderItems(prevItems => {
            const existingItem = prevItems.find(i => i.itemId === item.itemId)
            if (existingItem) {
                return prevItems.map(i => i.itemId === item.itemId ? { ...i, quantity: i.quantity + 1 } : i)
            } else {
                return [...prevItems, { ...item, quantity: 1 }]
            }
        })
    }

    function removeItem(itemId: string) {
        setOrderItems(prevItems => {
            const existingItem = prevItems.find(i => i.itemId === itemId)
            if (!existingItem) return prevItems
            if (existingItem.quantity === 1) {
                return prevItems.filter(i => i.itemId !== itemId)
            } else {
                return prevItems.map(i => i.itemId === itemId ? { ...i, quantity: i.quantity - 1 } : i)
            }
        })
    }

    return (
        <CartContext.Provider value={{
            cartItems: items,
            addItem: addItem,
            removeItem: removeItem,
            clearCart: () => setOrderItems([])
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartContextProvider')
    }
    return context
}