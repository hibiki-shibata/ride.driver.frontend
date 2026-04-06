export type SignupReqDTO = {
    phoneNumber: string;
    username: string;
};

export async function signupReq(reqBody: SignupReqDTO): Promise<any> {
    const res = await fetch("http://localhost:3000/api/v1/auth/courier/signup", {
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
