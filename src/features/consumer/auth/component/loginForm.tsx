import { loginReq } from "../api/login";
import type { LoginReqDTO } from "../api/login";
import { useState } from "react";

type LoginStatus = { status: "idle" } | { status: "loading" } | { status: "success", message: string } | { status: "failed", error: string }

function LoginForm() {
    const [loginData, setLoginData] = useState<LoginReqDTO>({
        emailAddress: "",
        password: "",
    })
    const [loginStatus, setLoginStatus] = useState<LoginStatus>({ status: "idle" })

    async function handleLoginSubmit(loginData: LoginReqDTO) {
        try {
            setLoginStatus({ status: "loading" })
            const res = await loginReq(loginData)
            if (res) setLoginStatus({ status: "success", message: "Login successful" })
        } catch (e) {
            setLoginStatus({ status: "failed", error: (e as Error).message })
        }
    }

    return (
        <>
            <form className="mt-5 rounded-3xl flex flex-col justify-center">
                <input
                    className="p-3 rounded-lg text-black mb-5 bg-white w-80"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setLoginData({ ...loginData, emailAddress: e.target.value })}
                />
                <input
                    className="p-3 rounded-lg text-black mb-5 bg-white w-80"
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
                <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        handleLoginSubmit(loginData!)
                    }}>
                    Continue to login
                </button>
            </form>
            {loginStatus.status === "loading" && <p>Logging in...</p>}
            {loginStatus.status === "success" && <p className="text-green-600 font-bold">{loginStatus.message}</p>}
            {loginStatus.status === "failed" && <p className="text-red-600 font-bold">Login failed: {loginStatus.error}</p>}
        </>
    )
}
export default LoginForm;