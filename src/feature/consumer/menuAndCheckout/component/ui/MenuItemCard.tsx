import type { MenuItem } from "../../type/menuItem"
import { useCartContext } from "../../context/cartContext"

type MenuItemCardProps = {
  menuItem: MenuItem
}

function menuItemToCartItemMapper(menuItem: MenuItem) {
  return {
    id: menuItem.id,
    name: menuItem.name,
    price: menuItem.price,
    quantity: 1,
  }
}

function MenuItemCard({ menuItem }: MenuItemCardProps) {
  const { addItem, removeItem } = useCartContext()

  return (
    <article className="my-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 px-7 pb-6 pt-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-amber-400 hover:bg-slate-700">
      <h3 className="mb-4 text-center text-2xl font-bold text-amber-100">
        {menuItem.name}
      </h3>

      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="text-lg font-bold text-emerald-400">
          ${menuItem.price.toFixed(2)}
        </span>

        <button
          type="button"
          className="rounded-full bg-slate-600 px-3 py-1 text-sm font-bold transition-colors hover:bg-rose-500 active:scale-90"
          onClick={() => removeItem(menuItemToCartItemMapper(menuItem))}>
          -
        </button>

        <button
          type="button"
          disabled={!menuItem.enabled}
          className="rounded-full bg-slate-600 px-3 py-1 text-sm font-bold transition-colors hover:bg-emerald-500 active:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => addItem(menuItemToCartItemMapper(menuItem))}>
          +
        </button>
      </div>

      <p className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-center text-slate-300">
        {menuItem.productDescription}
      </p>

      {!menuItem.enabled && (
        <p className="mt-3 text-center font-semibold text-rose-400">
          Currently unavailable
        </p>
      )}
    </article>
  )
}

export default MenuItemCard