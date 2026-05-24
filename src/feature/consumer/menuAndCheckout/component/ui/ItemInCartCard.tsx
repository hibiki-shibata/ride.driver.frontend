type CartItem = {
  itemId: string
  name: string
  price: number
  quantity: number
}

type ItemInCartCardProps = {
  item: CartItem
  isDisabled: boolean
  onIncrease: (item: Pick<CartItem, "itemId" | "name" | "price">) => void
  onDecrease: (itemId: string) => void
}

function ItemInCartCard({
  item,
  isDisabled,
  onIncrease,
  onDecrease,
}: ItemInCartCardProps) {
  const subtotal = item.price * item.quantity

  return (
    <li className="rounded-xl border border-slate-700 bg-slate-800 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-lg font-semibold text-amber-100">
            {item.name}
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Unit price: ${item.price.toFixed(2)}
          </p>
          <p className="mt-1 font-semibold text-emerald-400">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={isDisabled}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white transition-all hover:bg-rose-500 active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => onDecrease(item.itemId)}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              -
            </button>

            <span className="min-w-[2rem] text-center text-base font-bold text-white">
              {item.quantity}
            </span>

            <button
              type="button"
              disabled={isDisabled}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white transition-all hover:bg-emerald-500 active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() =>
                onIncrease({
                  itemId: item.itemId,
                  name: item.name,
                  price: item.price,
                })
              }
              aria-label={`Increase quantity of ${item.name}`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ItemInCartCard