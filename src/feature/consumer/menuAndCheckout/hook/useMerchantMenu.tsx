import { useQuery } from '@tanstack/react-query'
import { getMenu } from "../api/getMenu"
import type { MenuItem } from "../type/menuItem"
import { useCartContext } from "../context/cartContext"

type UseMerchantMenuResult = {
  menuItems: MenuItem[]
  isMenuLoading: boolean
  menuLoadError: string | null
}

// // useMerchantMenu.ts — same file, same interface
export function useMerchantMenu(): UseMerchantMenuResult {
  const { merchantId } = useCartContext()

  const { data, isLoading, error } = useQuery({
    queryKey: ['menu', merchantId],
    queryFn: () => getMenu(merchantId),
  })
  return {
    menuItems: data ?? [],
    isMenuLoading: isLoading,
    menuLoadError: error instanceof Error ? error.message : null,
  }
}