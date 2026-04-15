import { CONSUMER_API_URI } from '../../../../shared/constant/apiURI'
import { httpRequest } from "../../shared/api/httpRequest"
import type { CreateOrderRequest } from "../type/createOrderRequest"

export async function sendOrder(createOrderRequest: CreateOrderRequest): Promise<string> {
    const res = await httpRequest<string>({
        method: "POST",
        uri: CONSUMER_API_URI.CREATE_ORDER,
        body: createOrderRequest,
        requiresAuth: true,
    })
    return res
}