import type { CartItem } from "./cartItem"

export type CreateOrderRequest = {
    merchantId: string
    cartItems: CartItem[]
}
