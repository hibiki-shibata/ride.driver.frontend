import { COURIER_API_URI } from "../../../../shared/constant/apiUri"
import { httpRequest } from "../../shared/api/httpRequest"

export type CpApplicationData = {
    cpFirstName: string
    cpLastName: string
    phoneNumber: string
    vehicleType: string
}

export async function signupReq(cpApplyData: CpApplicationData): Promise<string> {
    const response = await httpRequest<{ message: string }>({
        method: "POST",
        uri: `${COURIER_API_URI}`,
        body: cpApplyData,
        requiresAuth: false,
    })
    return response.message
}