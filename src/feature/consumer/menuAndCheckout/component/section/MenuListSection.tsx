import { useSearchParams } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import LinkToMxExplore from "../../../shared/component/ui/LinkToMxExplore"
import MenuItemCard from "../ui/MenuItemCard"
import CartSection from "./CartSection"
import { useMerchantMenu } from "../../hook/useMerchantMenu"

function MenuListSection() {
  const { addItem, removeItem } = useCartContext()
  const [searchParams] = useSearchParams()

  const merchantName = searchParams.get("merchantName") ?? "Unknown Merchant"
  const merchantId = searchParams.get("merchantId") ?? ""

  const { menuItems, isLoading, error } = useMerchantMenu(merchantName)

  return (
    <section className="min-h-screen bg-slate-900 p-4 text-white md:flex md:gap-6">
      <div className="flex-1">
        <LinkToMxExplore />

        <h1 className="m-10 text-center text-4xl font-bold text-amber-200">
          {merchantName}
        </h1>

        {isLoading && (
          <p className="text-center text-lg text-slate-300">Loading menu...</p>
        )}

        {!isLoading && error && (
          <p className="text-center text-lg font-semibold text-rose-400">
            {error}
          </p>
        )}

        {!isLoading && !error && menuItems.length === 0 && (
          <p className="text-center text-lg text-slate-300">
            No menu items are available.
          </p>
        )}

        {!isLoading && !error && menuItems.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddItem={addItem}
                onRemoveItem={removeItem}
              />
            ))}
          </div>
        )}
      </div>

      <aside className="mt-8 md:mt-0 md:w-[360px] md:shrink-0">
        <CartSection merchantId={merchantId} />
      </aside>
    </section>
  )
}

export default MenuListSection