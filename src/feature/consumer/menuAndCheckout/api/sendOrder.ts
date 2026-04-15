import { CONSUMER_API_URI } from '../../../../shared/constant/apiURI'
import { httpRequest } from "../../shared/api/httpRequest"
import type { CreateOrderRequest } from "../type/createOrderRequest"
import type { TaskDataDTO } from '../../activeOrder/type/taskDataDTO'

export async function sendOrder(createOrderRequest: CreateOrderRequest): Promise<TaskDataDTO> {
    const res = await httpRequest<TaskDataDTO>({
        method: "POST",
        uri: CONSUMER_API_URI.CREATE_ORDER,
        body: createOrderRequest,
        requiresAuth: true,
    })
    return res
}