import { useQuery } from '@tanstack/react-query'
import { getMenu } from "../api/getMenu"
import type { MenuItem } from "../type/menuItem"

type UseMerchantMenuResult = {
  menuItems: MenuItem[]
  isMenuLoading: boolean
  menuLoadError: string | null
}

// // useMerchantMenu.ts — same file, same interface
export function useMerchantMenu(merchantId: string): UseMerchantMenuResult {
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