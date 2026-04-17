import { useSearchParams } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import MenuItemCard from "../ui/MenuItemCard"
import CartSection from "../ui/CartSection"
import { useMerchantMenu } from "../../hook/useMerchantMenu"

function MenuListSection() {
  const { addItem, removeItem } = useCartContext()
  const [searchParams] = useSearchParams()

  const merchantName = searchParams.get("merchantName") ?? "Unknown Merchant"
  const merchantId = searchParams.get("merchantId") ?? ""

  const { menuItems, isLoading, error } = useMerchantMenu(merchantId)

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
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
      <CartSection merchantId={merchantId} />
    </div>
  )
}

export default MenuListSection