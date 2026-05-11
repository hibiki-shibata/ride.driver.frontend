import { CONSUMER_API_URI } from "../../../../shared/constant/apiUri"
import { httpRequest } from "../../shared/api/httpRequest"
import type { MenuItem } from "../type/menuItem"

export async function getMenu(merchantId: string): Promise<MenuItem[]> {
    const res = await httpRequest<MenuItem[]>({
        method: "GET",
        uri: CONSUMER_API_URI.GET_MERCHANT_MENU + `/${merchantId}` + `/products`,
        requiresAuth: true,
    })
    return res
}