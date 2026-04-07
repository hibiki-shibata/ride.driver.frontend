import { COURIER_PROFILE_API_URI } from "../../../../shared/constant/apiUri";

export type CpApplicationData = {
    cpFirstName: string;
    cpLastName: string;
    phoneNumber: string;
    vehicleType: string;
}

export async function cpApplicationReq(cpApplyData: CpApplicationData): Promise<string> {
    if (!cpApplyData.cpFirstName || !cpApplyData.cpLastName || !cpApplyData.phoneNumber || !cpApplyData.vehicleType) {
        throw new Error("All fields are required.");
    }
    const res = await fetch(COURIER_PROFILE_API_URI.SIGNUP, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cpApplyData),
    })

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json()
}