import { useEffect, useState } from "react"
import type { MerchantProfile } from "../../shared/type/merchantProfile"
import { getMerchantProfile } from "../api/getMerchantProfile"

type UseMerchantProfileResult = {
    merchantProfile: MerchantProfile | undefined
    isMxProfileLoading: boolean
    mxProfileLoadError: string | null
}

export function useMerchantProfile(merchantId: string): UseMerchantProfileResult {
    const [merchantProfile, setMerchantProfile] = useState<MerchantProfile>()
    const [isMxProfileLoading, setIsMxProfileLoading] = useState(true)
    const [mxProfileLoadError, setMxProfileLoadError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true

        async function fetchMerchantProfile() {
            try {
                const response = await getMerchantProfile(merchantId)

                if (!isMounted) return

                setMerchantProfile(response)
                setMxProfileLoadError(null)
            } catch (error: unknown) {
                if (!isMounted) return

                setMxProfileLoadError(
                    error instanceof Error
                        ? error.message
                        : "Failed to load menu."
                )
            } finally {
                if (!isMounted) return
                setIsMxProfileLoading(false)
            }
        }

        fetchMerchantProfile()

        return () => {
            isMounted = false
        }
    }, [merchantId])

    return {
        merchantProfile,
        isMxProfileLoading,
        mxProfileLoadError,
    }
}