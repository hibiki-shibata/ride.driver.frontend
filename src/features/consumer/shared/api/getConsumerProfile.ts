import { httpRequest } from "./httpRequest"
import type { ConsumerProfile } from "../type/consumerProfile"
import { CONSUMER_PROFILE_API_URI } from "../../../../shared/constant/apiUri"

export async function getConsumerProfile(): Promise<ConsumerProfile> {
    return httpRequest<ConsumerProfile>({        
        method: "GET",
        uri: CONSUMER_PROFILE_API_URI.ME,
        requiresAuth: true,
    })
}