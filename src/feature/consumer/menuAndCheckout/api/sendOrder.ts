import { CONSUMER_API_URI } from  "../../../../shared/constant/apiUri"
import { httpRequest } from "../../shared/api/httpRequest"
import type { CreateOrderRequest } from "../type/createOrderRequest"
import type { OrderHistoryDTO } from '../../orderHistory/type/orderHistory'

export async function sendOrder(createOrderRequest: CreateOrderRequest): Promise<OrderHistoryDTO> {
    const res = await httpRequest<OrderHistoryDTO>({
        method: "POST",
        uri: CONSUMER_API_URI.CREATE_ORDER,
        body: createOrderRequest,
        requiresAuth: true,
    })
    return res
}