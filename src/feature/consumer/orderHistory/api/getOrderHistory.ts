import { CONSUMER_API_URI } from "../../../../shared/constant/apiURI"
import { httpRequest } from "../../shared/api/httpRequest"
import type { OrderHistoryDTO } from "../type/orderHistoryDTO"


type GetOrderHistoryResponse = OrderHistoryDTO[] | null

export async function getOrderHistory(): Promise<OrderHistoryDTO[]> {
  const response = await httpRequest<GetOrderHistoryResponse>({
    method: 'GET',
    uri: CONSUMER_API_URI.GET_ORDER_HISTORY,
    requiresAuth: true,
  });

  return response ?? []
}