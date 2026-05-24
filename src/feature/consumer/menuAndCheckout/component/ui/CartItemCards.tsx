import type { CartItem } from "../../type/cartItem"
import { useCartContext } from "../../context/cartContext"

type CartItemProps = {
  cartItem: CartItem
}

function CartItemCard({ cartItem }: CartItemProps) {
  const { addItem, removeItem } = useCartContext()
  const subtotal = cartItem.price * cartItem.quantity

  return (
    <li className="rounded-xl border border-slate-700 bg-slate-800 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-lg font-semibold text-amber-100">
            {cartItem.name}
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Unit price: ${cartItem.price.toFixed(2)}
          </p>
          <p className="mt-1 font-semibold text-emerald-400">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              // disabled={isDisabled}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white transition-all hover:bg-rose-500 active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => removeItem(cartItem)}
              aria-label={`Decrease quantity of ${cartItem.name}`}
            >
              -
            </button>

            <span className="min-w-[2rem] text-center text-base font-bold text-white">
              {cartItem.quantity}
            </span>

            <button
              type="button"
              // disabled={isDisabled}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white transition-all hover:bg-emerald-500 active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => addItem(cartItem)}
              aria-label={`Increase quantity of ${cartItem.name}`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItemCard