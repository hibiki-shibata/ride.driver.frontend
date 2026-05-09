// import { useEffect, useState } from "react"
// import { QueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query';
import { getMenu } from "../api/getMenu"
import type { MenuItem } from "../type/menuItem"

// function testMenuItems(): MenuItem[] { // Remove later
//   const menuItems: MenuItem[] = []
//   for (let i = 0; i < 10; i++) {
//     menuItems.push({
//       id: `${i}`,
//       name: `Menu Item ${i}`,
//       description: `This is menu item ${i}'s description.`,
//       price: 10 + i,
//       enabled: i % 2 === 0,
//     })
//   }
//   return menuItems
// }

type UseMerchantMenuResult = {
  menuItems: MenuItem[]
  isMenuLoading: boolean
  menuLoadError: string | null
}

// export function useMerchantMenu(merchantId: string): UseMerchantMenuResult {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([])
//   const [isMenuLoading, setIsMenuLoading] = useState(true)
//   const [menuLoadError, setMenuLoadError] = useState<string | null>(null)

//   useEffect(() => {
//     let isMounted = true
//     // setMenuItems(testMenuItems()) // Remove later

//     async function fetchMenu() {
//       try {
//         const response = await getMenu(merchantId)

//         if (!isMounted) return

//         setMenuItems(response)
//         setMenuLoadError(null)
//       } catch (error: unknown) {
//         if (!isMounted) return

//         setMenuLoadError(
//           error instanceof Error
//             ? error.message
//             : "Failed to load menu."
//         )
//       } finally {
//         if (!isMounted) return
//         setIsMenuLoading(false)
//       }
//     }

//     fetchMenu()

//     return () => {
//       isMounted = false
//     }
//   }, [merchantId])

//   return {
//     menuItems,
//     isMenuLoading,
//     menuLoadError,
//   }
// }


// useMerchantMenu.ts — same file, same interface
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