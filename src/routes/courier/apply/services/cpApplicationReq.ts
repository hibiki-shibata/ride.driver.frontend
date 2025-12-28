export type CpApplicationData = {
    cpFirstName: string;
    cpLastName: string;
    phoneNumber: string;
    vehicleType: string;
}

export async function cpApplicationReq(cpApplyData: CpApplicationData): Promise<String> {
    if (!cpApplyData.cpFirstName || !cpApplyData.cpLastName || !cpApplyData.phoneNumber || !cpApplyData.vehicleType) {
        throw new Error("All fields are required.");
    }
    const res = await fetch('http://localhost:3000/courier/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cpApplyData),
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json()
}