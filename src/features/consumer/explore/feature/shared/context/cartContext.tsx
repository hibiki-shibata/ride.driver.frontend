import { createContext, useContext, useState } from 'react'
import type { OrderItem } from "../type/orderItem"

type CartContextType = {
    orderItems: OrderItem[]
    addItem: (itemId: string) => void
    removeItem: (itemId: string) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setOrderItems] = useState<OrderItem[]>([])
    function addItem(itemId: string) { 
        setOrderItems(prevItems => {
            const existingItem = prevItems.find(i => i.itemID === itemId)
            if (existingItem) {
                return prevItems.map(i => i.itemID === itemId ? { ...i, quantity: i.quantity + 1 } : i)
            } else {
                return [...prevItems, { itemID: itemId, quantity: 1 }]
            }
        })
    }

    return (
        <CartContext.Provider value={{
            orderItems: items,
            addItem: addItem,
            removeItem: (itemId: string) => setOrderItems(prevItems => prevItems.filter(i => i.itemID !== itemId)),
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