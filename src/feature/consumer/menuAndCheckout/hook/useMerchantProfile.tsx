import { useQuery } from '@tanstack/react-query'
import { useCartContext } from "../context/cartContext"
import type { MerchantProfile } from "../../shared/type/merchantProfile"
import { getMerchantProfile } from "../api/getMerchantProfile"

type UseMerchantProfileType = {
    merchantProfile: MerchantProfile | undefined
    isMxProfileLoading: boolean
    mxProfileLoadError: string | null
}

export function useMerchantProfile(): UseMerchantProfileType {
    const { merchantId } = useCartContext()
    const { data, isLoading, error } = useQuery({
        queryKey: ['merchantProfile', merchantId],
        queryFn: () => getMerchantProfile(merchantId),
    })
    return {
        merchantProfile: data ? data : undefined,
        isMxProfileLoading: isLoading,
        mxProfileLoadError: error ? JSON.stringify(error) : null,
    }
}