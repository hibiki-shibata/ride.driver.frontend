import { CONSUMER_API_URI } from  "../../../../shared/constant/apiUri"
import { httpRequest } from "../../shared/api/httpRequest"
import type { MerchantProfile } from "../../shared/type/merchantProfile"

export async function getMerchantProfile(merchantId: string): Promise<MerchantProfile> {
    const res = await httpRequest<MerchantProfile>({
        method: "GET",
        uri: CONSUMER_API_URI.GET_MERCHANT + `/${merchantId}`,
        requiresAuth: true,
    })
    return res
}