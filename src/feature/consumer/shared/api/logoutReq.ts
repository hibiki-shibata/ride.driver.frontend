import { CONSUMER_API_URI } from  "../../../../shared/constant/apiUri"
import { httpRequest } from "./httpRequest";

export async function logoutReq(): Promise<void> {
    await httpRequest({
        method: "POST",
        uri: CONSUMER_API_URI.LOGOUT,
        requiresAuth: true,
    })
}