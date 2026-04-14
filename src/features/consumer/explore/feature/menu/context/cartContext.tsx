import { createContext, useContext, useState } from 'react'
import type { OrderItem } from "../type/orderItem"
import type { MenuItem } from '../type/menuItem'

type CartContextType = {
    cartItems: OrderItem[]
    addItem: (item: MenuItem) => void
    removeItem: (item: MenuItem) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setOrderItems] = useState<OrderItem[]>([])
    function addItem(item: MenuItem) {
        setOrderItems(prevItems => {
            const existingItem = prevItems.find(i => i.itemId === item.id)
            if (existingItem) {
                return prevItems.map(i => i.itemId === item.id ? { ...i, quantity: i.quantity + 1 } : i)
            } else {
                return [...prevItems, { itemId: item.id, name: item.name, price: item.price, quantity: 1 }]
            }
        })
    }

    return (
        <CartContext.Provider value={{
            cartItems: items,
            addItem: addItem,
            removeItem: (item: MenuItem) => setOrderItems(prevItems => prevItems.filter(i => i.itemId !== item.id)),
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