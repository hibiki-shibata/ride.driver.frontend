import { useQuery } from "@tanstack/react-query"
import { getOrderHistory } from "../api/getOrderHistory"
import type { OrderHistory } from "../type/orderHistory"

type UseOrderHistoryType = {
    orderHistory: OrderHistory[]
    isLoadingOrderHistory: boolean
    orderHistoryFetchError: string | null
}

export function useOrderHistory(): UseOrderHistoryType {
    const { data, isLoading, error } = useQuery({
        queryKey: ["orderHistory"],
        queryFn: () => getOrderHistory(),
        refetchInterval: 3000
    })
    return {
        orderHistory: data ? data : [],
        isLoadingOrderHistory: isLoading,
        orderHistoryFetchError: JSON.stringify(error)
    }
}