import { useEffect, useState } from "react"
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
  isLoading: boolean
  error: string | null
}

export function useMerchantMenu(merchantName: string): UseMerchantMenuResult {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    // setMenuItems(testMenuItems()) // Remove later

    async function fetchMenu() {
      try {
        const response = await getMenu(merchantName)

        if (!isMounted) return

        setMenuItems(response)
        setError(null)
      } catch (error: unknown) {
        if (!isMounted) return

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load menu."
        )
      } finally {
        if (!isMounted) return
        setIsLoading(false)
      }
    }

    fetchMenu()

    return () => {
      isMounted = false
    }
  }, [merchantName])

  return {
    menuItems,
    isLoading,
    error,
  }
}