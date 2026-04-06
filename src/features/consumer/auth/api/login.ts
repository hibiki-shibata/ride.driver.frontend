
export type LoginReqDTO = {
    phoneNumber: string;
};

export async function loginReq(reqBody: LoginReqDTO): Promise<any> {
    const res = await fetch("http://localhost:3000/api/v1/auth/courier/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    })
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res;
}