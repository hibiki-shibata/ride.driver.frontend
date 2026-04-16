import CartItemRow from "../ui/CartItemRow"

type CartItem = {
  itemId: string
  name: string
  price: number
  quantity: number
}

type CartPanelProps = {
  cartItems: CartItem[]
  totalPrice: number
  isSubmitting: boolean
  submitError: string | null
  isCheckoutDisabled: boolean
  onCheckout: () => void
  onClose: () => void
  onClearCart: () => void
  onIncrease: (item: Omit<CartItem, "quantity">) => void
  onDecrease: (itemId: string) => void
}

function CartPanel({
  cartItems,
  totalPrice,
  isSubmitting,
  submitError,
  isCheckoutDisabled,
  onCheckout,
  onClose,
  onClearCart,
  onIncrease,
  onDecrease,
}: CartPanelProps) {
  return (
    <aside className="h-full rounded-2xl border border-slate-700 bg-slate-700 p-6 text-white shadow-xl">
      <h2 className="mb-4 text-center text-2xl font-bold text-amber-200">
        Cart Details
      </h2>

      <h3 className="mb-4 text-center text-xl font-bold text-amber-100">
        Total: ${totalPrice.toFixed(2)}
      </h3>

      <div className="mb-5 space-y-2">
        <button
          type="button"
          disabled={isCheckoutDisabled}
          onClick={onCheckout}
          className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Proceed to Checkout"}
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={onClose}
          className="w-full rounded-xl bg-gray-600 px-4 py-3 font-bold text-white transition-colors hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Close
        </button>
      </div>

      {submitError && (
        <p className="mb-4 rounded-lg border border-rose-500 bg-rose-950 px-4 py-3 text-sm text-rose-300">
          {submitError}
        </p>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center text-slate-300">Your cart is empty.</p>
      ) : (
        <ul className="space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
          {cartItems.map((item) => (
            <CartItemRow
              key={item.itemId}
              item={item}
              isDisabled={isSubmitting}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </ul>
      )}

      <button
        type="button"
        disabled={isSubmitting || cartItems.length === 0}
        onClick={onClearCart}
        className="mt-5 w-full rounded-xl bg-rose-600 px-4 py-3 font-bold text-white transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Clear Cart
      </button>
    </aside>
  )
}

export default CartPanel