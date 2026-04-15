import { httpRequest } from "./httpRequest"
import type { ConsumerProfile } from "../type/consumerProfile"
import { CONSUMER_API_URI } from "../../../../shared/constant/apiURI"

export async function getConsumerProfile(): Promise<ConsumerProfile> {
    return await httpRequest<ConsumerProfile>({
        method: "GET",
        uri: CONSUMER_API_URI.ME,
        requiresAuth: true,
    })
}