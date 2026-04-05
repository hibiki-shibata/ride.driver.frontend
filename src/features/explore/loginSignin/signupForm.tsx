import { useState } from "react";
import { signinReq } from "./api/signinReq";
import type { SigninRequestDTO } from "./api/signinReq";

type SignupStatus = { status: "idle" } | { status: "loading" } | { status: "success", message: string } | { status: "failed", error: string }

function userSignupForm() {
    const [signinStatus, setSigninStatus] = useState<SignupStatus>({ status: "idle" })
    const [signinData, setSigninData] = useState<SigninRequestDTO>({
        phoneNumber: "",
        username: ""
    })


    async function handleSignupSubmit(signinData: SigninRequestDTO) {
        try {
            setSigninStatus({ status: "loading" })
            const res = await signinReq(signinData)
            if (res) setSigninStatus({ status: "success", message: "Signup successful" })
        } catch (e) {
            setSigninStatus({ status: "failed", error: (e as Error).message })
        }
    }

    return (
        <>
            <form className="mt-5 rounded-3xl flex flex-col justify-center">
                <input
                    className="p-3 rounded-lg text-black mb-5 bg-white w-80"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setSigninData({ ...signinData, username: e.target.value })}
                />
                <input
                    className="p-3 rounded-lg text-black mb-5 bg-white w-80"
                    type="text"
                    placeholder="Phone number"
                    onChange={(e) => setSigninData({ ...signinData, phoneNumber: e.target.value })}
                />
                <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        handleSignupSubmit(signinData!)
                    }}>
                    Continue to Signup
                </button>
            </form>
            {signinStatus.status === "loading" && <p>Signing up...</p>}
            {signinStatus.status === "success" && <p className="text-green-600 font-bold">{signinStatus.message}</p>}
            {signinStatus.status === "failed" && <p className="text-red-600 font-bold">Signup failed: {signinStatus.error}</p>}
        </>
    )
}

export default userSignupForm;