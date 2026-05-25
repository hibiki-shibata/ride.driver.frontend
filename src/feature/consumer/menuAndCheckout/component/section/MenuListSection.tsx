// import { useCartContext } from "../../context/cartContext"
import { useMerchantMenu } from "../../hook/useMerchantMenu"
import MenuItemCard from "../ui/MenuItemCard"


function MenuListSection() {
    const { menuItems, isMenuLoading, menuLoadError } = useMerchantMenu()
    return (
        <>
            {isMenuLoading && (
                <p className="text-center text-lg text-slate-300 animate-bounce">
                    Loading menu...
                </p>
            )}

            {menuLoadError && (
                <p className="text-center text-lg font-semibold text-rose-400">
                    Failed to load menu data
                </p>
            )}

            {!isMenuLoading && !menuLoadError && menuItems.length === 0 && (
                <p className="text-center text-lg text-slate-300">
                    No menu items are available.
                </p>
            )}

            {!isMenuLoading && !menuLoadError && menuItems.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {menuItems.map((menuItem) => <MenuItemCard menuItem={menuItem} />)}
                </div>
            )}
        </>
    )
}

export default MenuListSection