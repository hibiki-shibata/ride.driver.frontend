import { useEffect, useState } from "react"
import { getAvailableMerchants } from "../api/getAvailableMerchants"
import type { MerchantProfile } from "../type/merchantProfile"

type UseAvailableMerchantsResult = {
  merchants: MerchantProfile[]
  isLoading: boolean
  error: string | null
}

export function useAvailableMerchants(): UseAvailableMerchantsResult {
  const [merchants, setMerchants] = useState<MerchantProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchMerchants() {
      try {
        const response = await getAvailableMerchants()

        if (!isMounted) return

        setMerchants(response)
        setError(null)
      } catch (error: unknown) {
        if (!isMounted) return

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load available merchants."
        )
      } finally {
        if (!isMounted) return
        setIsLoading(false)
      }
    }

    fetchMerchants()

    return () => {
      isMounted = false
    }
  }, [])

  return {
    merchants,
    isLoading,
    error,
  }
}