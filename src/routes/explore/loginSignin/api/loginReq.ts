
export type LoginRequestDTO = {
    phoneNumber: string;
};

export async function loginReq(loginRequest: LoginRequestDTO): Promise<any> {
    const res = await fetch("http://localhost:3000/api/v1/auth/courier/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
    })
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res;
}