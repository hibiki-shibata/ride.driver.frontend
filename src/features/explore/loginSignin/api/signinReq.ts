export type SigninRequestDTO = {
    phoneNumber: string;
    username: string;
};

export async function signinReq(signupRequest: SigninRequestDTO): Promise<any> {
    const res = await fetch("http://localhost:3000/api/v1/auth/courier/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupRequest),
    })
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res;

}
