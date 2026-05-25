import { useQuery } from "@tanstack/react-query"
import { getPublishedMerchants } from "../api/getPublishedMerchants"
import type { MerchantProfile } from "../../shared/type/merchantProfile"

type UsePublishedMerchantsType = {
  publishedMerchants: MerchantProfile[]
  isLoadingPublishedMerchants: boolean
  publishedMerchantsLoadError: string | null
}

export function usePublishedMerchants(): UsePublishedMerchantsType {
  const { data, isLoading, error } = useQuery({
    queryKey: ["publishedMerchants"],
    queryFn: () => getPublishedMerchants()
  })

  return {
    publishedMerchants: data ? data : [],
    isLoadingPublishedMerchants: isLoading,
    publishedMerchantsLoadError: JSON.stringify(error)
  }
}