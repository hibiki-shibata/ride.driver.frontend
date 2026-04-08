import type { ConsumerProfile } from "../../auth/type/consumerProfile"
import { CONSUMER_PROFILE_API_URI } from "../../../../shared/constant/apiUri"
import { AccessTokenManager } from "../../auth/service/accessTokenManager"

export async function getConsumerProfileReq(): Promise<ConsumerProfile> {
    const accessToken = AccessTokenManager.getInstance().getAccessToken()
    const res = await fetch(
        CONSUMER_PROFILE_API_URI.ME,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        },
    )
    if (!res.ok) {
        throw new Error(`Get consumer profile request failed (${res.status}): ${res.statusText}`)
    }
    return res.json() as Promise<ConsumerProfile>
}