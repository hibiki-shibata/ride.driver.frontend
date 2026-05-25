import { useCallback, useMemo, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import type { CartItem } from '../type/cartItem'
import type { CartState } from '../type/cartState'
import { sendOrder } from '../api/sendOrder'
import { CONSUMER_ROUTE } from '../../../../shared/constant/routePath'
import { useConsumerAuthContext } from '../../shared/context/ConsumerAuthContext'


export function useCartState(): CartState {
    const navigate = useNavigate()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [searchParams] = useSearchParams()

    const merchantId: string = searchParams.get('merchantId') ?? ''
    const { authStatus } = useConsumerAuthContext()
    const isAuthenticated: boolean = authStatus === 'authenticated'
    const isCartEmpty: boolean = cartItems.length === 0

    const openCart = useCallback(() => setIsCartOpen(true), [])
    const closeCart = useCallback(() => setIsCartOpen(false), [])
    const clearCart = useCallback(() => setCartItems([]), [])

    const addItem = useCallback((targetItem: CartItem) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === targetItem.id)
            return existing
                ? prev.map(item =>
                    item.id === targetItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...prev, { ...targetItem, quantity: 1 }]
        })
    }, [])

    const removeItem = useCallback((targetItem: CartItem) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === targetItem.id)
            if (!existing) return prev
            return existing.quantity === 1
                ? prev.filter(item => item.id !== targetItem.id)
                : prev.map(item =>
                    item.id === targetItem.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
        })
    }, [])

    const { totalPrice, totalQuantity } = useMemo(
        () => cartItems.reduce(
            (accumulator, item) => ({
                totalPrice: accumulator.totalPrice + item.price * item.quantity,
                totalQuantity: accumulator.totalQuantity + item.quantity,
            }),
            { totalPrice: 0, totalQuantity: 0 }
        ), [cartItems]
    )

    //  Checkout mutation
    const { mutate, isPending, error } = useMutation({
        mutationFn: () => sendOrder({ merchantId, cartItems }),
        onSuccess: () => {
            clearCart()
            closeCart()
            alert('Order placed successfully!') // Change later!!!
            navigate(CONSUMER_ROUTE.ORDER_HISTORY)
        },
    })

    const checkout = useCallback(() => mutate(), [mutate])

    return {
        openCart: openCart,
        closeCart: closeCart,
        isCartOpen: isCartOpen,
        isCartEmpty: isCartEmpty,
        addItem: addItem,
        removeItem: removeItem,
        merchantId: merchantId,
        cartItems: cartItems,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        checkout: checkout,
        isCheckoutDisabled: isPending || !isAuthenticated || isCartEmpty || !merchantId.trim(),
        isCheckoutPending: isPending,
        checkoutError: error,
        clearCart: clearCart
    }
}