import Header from "../../../shared/component/headers/courier"
import Footer from '../../../shared/component/footer'
import UserLoginForm from "./loginForm"
import UserSigninForm from "./signupForm"
import { useEffect, useState } from "react";

function userLoginOrSignIn({ isLogin }: { isLogin: Boolean }) {
    const [isLoginMode, setLoginMode] = useState<Boolean>(true)
    useEffect(() => {
        setLoginMode(isLogin)
    }, [isLogin])
    return (
        <>
            <Header />
            <div className="flex flex-col items-center px-20 py-30 sm:py-50 bg-gray-900 text-white">
                <h1 className="text-4xl font-bold mb-15">
                    Welcome back to Amazones platform!
                </h1>
                <div className="flex mb-10 text-gray-400 cursor-pointer">
                    {isLoginMode ? (
                        <h2 className="text-3xl font-bold text-white"
                            onClick={() => setLoginMode(true)}>Login </h2>
                    ) : <h2 className="text-3xl font-bold"
                        onClick={() => setLoginMode(true)}>Login</h2>}

                    <span className="text-3xl font-bold mx-3">/</span>

                    {!isLoginMode ? (
                        <h2 className="text-3xl font-bold text-white"
                            onClick={() => setLoginMode(false)}>Signup</h2>
                    ) : <h2 className="text-3xl font-bold"
                        onClick={() => setLoginMode(false)}>Signup</h2>}
                </div>
                {isLoginMode ? <UserLoginForm /> : <UserSigninForm />}
            </div>

            <Footer />
        </>
    )
}
export default userLoginOrSignIn;