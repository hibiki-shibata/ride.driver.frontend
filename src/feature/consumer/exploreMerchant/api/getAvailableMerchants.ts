import { CONSUMER_API_URI } from '../../../../shared/constant/apiURI'
import { httpRequest } from "../../shared/api/httpRequest"
import type { MerchantProfile } from "../type/merchantProfile"

export async function getAvailableMerchants(
    page: number = 0,
    pageSize: number = 100
): Promise<MerchantProfile[]> {
    const res = await httpRequest<MerchantProfile[]>({
        method: "GET",
        uri: CONSUMER_API_URI.GET_AVAILABLE_MERCHANTS + `?page=${page}&pageSize=${pageSize}`,
        requiresAuth: true,
    })
    return res
}