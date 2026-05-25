import { useQuery } from '@tanstack/react-query'
import { useCartContext } from "../context/cartContext"
import type { MenuItem } from "../type/menuItem"
import { getMenu } from "../api/getMenu"

type UseMerchantMenuType = {
  menuItems: MenuItem[]
  isMenuLoading: boolean
  menuLoadError: string | null
}

export function useMerchantMenu(): UseMerchantMenuType {
  const { merchantId } = useCartContext()
  const { data, isLoading, error } = useQuery({
    queryKey: ['menu', merchantId],
    queryFn: () => getMenu(merchantId),
  })
  return {
    menuItems: data ? data : [],
    isMenuLoading: isLoading,
    menuLoadError: error ? JSON.stringify(error) : null,
  }
}