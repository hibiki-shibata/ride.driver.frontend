import { useEffect, useState } from "react"
import { getMenu } from "../api/getMenu"
import type { MenuItem } from "../type/menuItem"

type UseMerchantMenuResult = {
  menuItems: MenuItem[]
  isLoading: boolean
  error: string | null
}

export function useMerchantMenu(merchantName: string): UseMerchantMenuResult {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

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