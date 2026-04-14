import { createContext, useContext, useState } from 'react'
import type { OrderItem } from "../type/orderItem"

type CartContextType = {
    items: OrderItem[]
    addItem: (item: OrderItem) => void
    removeItem: (itemId: string) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([])

    function addItem(item: OrderItem) {
        setOrderItems(prevItems => {
            const existingItem = prevItems.find(i => i.itemID === item.itemID)
            if (existingItem) {
                return [...prevItems]

            } else {
                return [...prevItems, item]
            }
        })
    }

    return (
        <CartContext.Provider value={{
            items: orderItems,
            addItem: addItem,
            removeItem: (itemId: string) => setOrderItems(prevItems => prevItems.filter(i => i.itemID !== itemId)),
            clearCart: () => setOrderItems([])
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartContextProvider')
    }
    return context
}