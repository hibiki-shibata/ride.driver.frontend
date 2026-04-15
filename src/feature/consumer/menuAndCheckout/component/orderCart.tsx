import { useMemo, useState } from "react"
import { useCartContext } from "../context/cartContext"
import { sendOrder } from "../api/sendOrder"
import CartItemRow from "./CartItemRow"

type OrderCartProps = {
  merchantId: string
}

function OrderCart({ merchantId }: OrderCartProps) {
  const { addItem, removeItem, cartItems, clearCart } = useCartContext()

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  )

  const totalQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  )

  const isCheckoutDisabled =
    isSubmitting || cartItems.length === 0 || !merchantId.trim()

  async function handleCheckout() {
    if (isCheckoutDisabled) return

    try {
      setIsSubmitting(true)
      setSubmitError(null)

      await sendOrder({
        merchantId,
        cartItems,
      })

      clearCart()
      setIsCartOpen(false)
    } catch (error: unknown) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to send order."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleCloseCart() {
    if (isSubmitting) return
    setIsCartOpen(false)
  }

  function handleClearCart() {
    if (isSubmitting || cartItems.length === 0) return
    clearCart()
    setIsCartOpen(false)
  }

  if (!isCartOpen) {
    return (
      <>
        {totalQuantity > 0 && (
          <div className="fixed bottom-24 right-10 rounded-full bg-rose-500 px-2 py-1 text-sm font-bold text-white shadow-md">
            {totalQuantity}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart"
          className="fixed bottom-10 right-10 rounded-full border border-slate-500 bg-slate-700 p-4 shadow-lg transition-all duration-300 hover:bg-slate-600"
        >
          <svg
            fill="currentColor"
            width="40"
            height="40"
            viewBox="0 0 902.86 902.86"
            aria-hidden="true"
            className="text-white"
          >
            <g>
              <g>
                <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z" />
              </g>
            </g>
          </svg>
        </button>
      </>
    )
  }

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
          onClick={handleCheckout}
          className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Proceed to Checkout"}
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleCloseCart}
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
              onIncrease={addItem}
              onDecrease={removeItem}
            />
          ))}
        </ul>
      )}

      <button
        type="button"
        disabled={isSubmitting || cartItems.length === 0}
        onClick={handleClearCart}
        className="mt-5 w-full rounded-xl bg-rose-600 px-4 py-3 font-bold text-white transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Clear Cart
      </button>
    </aside>
  )
}

export default OrderCart