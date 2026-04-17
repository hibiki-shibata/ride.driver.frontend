import type { MenuItem } from "../../type/menuItem"

type CartItemPayload = {
  itemId: string
  name: string
  price: number
}

type MenuItemCardProps = {
  item: MenuItem
  onAddItem: (item: CartItemPayload) => void
  onRemoveItem: (itemId: string) => void
}

function MenuItemCard({
  item,
  onAddItem,
  onRemoveItem,
}: MenuItemCardProps) {
  return (
    <article className="my-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 px-7 pb-6 pt-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-amber-400 hover:bg-slate-700">
      <h3 className="mb-4 text-center text-2xl font-bold text-amber-100">
        {item.name}
      </h3>

      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="text-lg font-bold text-emerald-400">
          ${item.price.toFixed(2)}
        </span>

        <button
          type="button"
          className="rounded-full bg-slate-600 px-3 py-1 text-sm font-bold transition-colors hover:bg-rose-500 active:scale-90"
          onClick={() => onRemoveItem(item.id)}
        >
          -
        </button>

        <button
          type="button"
          disabled={!item.enabled}
          className="rounded-full bg-slate-600 px-3 py-1 text-sm font-bold transition-colors hover:bg-emerald-500 active:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() =>
            onAddItem({
              itemId: item.id,
              name: item.name,
              price: item.price,
            })
          }
        >
          +
        </button>
      </div>

      <p className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-center text-slate-300">
        {item.productDescription}
      </p>

      {!item.enabled && (
        <p className="mt-3 text-center font-semibold text-rose-400">
          Currently unavailable
        </p>
      )}
    </article>
  )
}

export default MenuItemCard