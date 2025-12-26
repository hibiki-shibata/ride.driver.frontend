export type CpApplicationData = {
    cpName: string;
    phoneNumber: string;
    vehicleType: string;
}

export async function cpApplicationReq(cpApplyData: CpApplicationData): Promise<void> {
    const res = await fetch('http://localhost:3000/courier/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cpApplyData),
    });

    if (!res.ok) {
        throw new Error('Failed to send request');
    }
}