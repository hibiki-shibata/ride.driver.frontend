import { useEffect, useState } from "react"
import { getAvailableMerchants } from "../api/getAvailableMerchants"
import type { MerchantProfile } from "../../shared/type/merchantProfile"

// function testMerchants(): MerchantProfile[] { // Remove later
//   const merchants: MerchantProfile[] = []
//   for (let i = 0; i < 10; i++) {
//     merchants.push({
//       id: `${i}`,
//       name: `Restaurant ${i}`,
//       phoneNumber: `123456789${i}`,
//       merchantAddress: `${i} Main St`,
//       merchantComment: `This is merchant ${i}'s comment.`,
//       merchantStatus: i % 2 === 0 ? "OPEN" : "CLOSED",
//       merchantAddressCoordinates: {
//         latitude: 37.7749 + i * 0.01,
//         longitude: -122.4194 + i * 0.01,
//       },
//     })
//   }
//   return merchants
// }

type UseAvailableMerchantsResult = {
  merchants: MerchantProfile[]
  isLoading: boolean
  error: string | null
}

export function usePublishedMerchants(): UseAvailableMerchantsResult {
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