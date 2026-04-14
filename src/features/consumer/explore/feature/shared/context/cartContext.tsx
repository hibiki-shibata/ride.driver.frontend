import { createContext, useContext, useState } from 'react'
import type { OrderItem } from "../../../type/orderItem"

type CartContextType = {
    orderItems: OrderItem[]
    addItem: (item: OrderItem) => void
    removeItem: (itemId: string) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setOrderItems] = useState<OrderItem[]>([])

    function addItem(item: OrderItem) {
        setOrderItems(prevItems => {
            console.log("Adding item to cart:", item)
            const existingItemIndex = prevItems.findIndex(i => i.itemID === item.itemID)
            if (existingItemIndex >= 0) {
                const updatedItems = [...prevItems]
                updatedItems[existingItemIndex].quantity += item.quantity
                return updatedItems
            } else {
                return [...prevItems, item]
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