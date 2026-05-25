import { CONSUMER_API_URI } from "../../../../shared/constant/apiUri"
import { httpRequest } from "../../shared/api/httpRequest"
import type { OrderHistory } from "../type/orderHistory"

type GetOrderHistoryType = OrderHistory[]

export async function getOrderHistory(): Promise<OrderHistory[]> {
  const response = await httpRequest<GetOrderHistoryType>({
    method: 'GET',
    uri: CONSUMER_API_URI.GET_ORDER_HISTORY,
    requiresAuth: true,
  })
  return response ?? []
}