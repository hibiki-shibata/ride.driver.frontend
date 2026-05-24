import { useRef } from "react"
import CartItemCard from "./CartItemCards"
import { useCartContext } from "../../context/cartContext"

function CartPanel() {
  const cartTopRef = useRef<HTMLDivElement>(null)
  const {
    isCartEmpty,
    closeCart,
    cartItems,
    totalPrice,
    checkout,
    isCheckoutPending,
    isCheckoutDisabled,
    checkoutError,
    clearCart
  } = useCartContext()
  return (
    <>
      <aside className="rounded-xl border border-yellow-700 p-6 pt-16" ref={cartTopRef}>
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
            onClick={checkout}
            className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isCheckoutPending ? "Processing..." : "Proceed to Checkout"}
          </button>

          <button
            type="button"
            disabled={isCheckoutPending}
            onClick={closeCart}
            className="w-full rounded-xl bg-gray-600 px-4 py-3 font-bold text-white transition-colors hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Close
          </button>
        </div>

        {checkoutError && (
          <p className="mb-4 rounded-lg border border-rose-500 bg-rose-950 px-4 py-3 text-sm text-rose-300">
            {JSON.stringify(checkoutError)}
          </p>
        )}

        {isCartEmpty && (
          <p className="text-center text-slate-300">
            Your cart is empty.
          </p>
        )}

        <ul className="space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
          {cartItems.map((cartItem) => <CartItemCard cartItem={cartItem} />)}
        </ul>


        <button
          type="button"
          disabled={isCheckoutPending || isCartEmpty}
          onClick={clearCart}
          className="mt-5 w-full rounded-xl bg-rose-600 px-4 py-3 font-bold text-white transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear Cart
        </button>
      </aside>

      <button
        className="fixed bottom-4 w-full text-center italic text-slate-400 hover:text-slate-200 animate-bounce"
        onClick={() => cartTopRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        Go To Cart Detail
      </button>
    </>

  )
}

export default CartPanel