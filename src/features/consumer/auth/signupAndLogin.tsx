import { useState } from "react";
import UserLoginForm from "./component/loginForm";
import UserSigninForm from "./component/signupForm";

function SignupAndLogin({ isLogin }: { isLogin: boolean }) {
  const [isLoginMode, setLoginMode] = useState(isLogin);

  return (
    <div className="flex flex-col items-center px-20 py-24 sm:py-32 bg-gray-900 text-white">
      <h1 className="mb-10 text-4xl font-bold">
        Welcome back to Amazones platform!
      </h1>

      <div className="mb-8 flex text-gray-400">
        <button
          type="button"
          onClick={() => setLoginMode(true)}
          className={`text-3xl font-bold cursor-pointer ${
            isLoginMode ? "text-white" : "text-gray-400"
          }`}
        >
          Login
        </button>

        <span className="mx-3 text-3xl font-bold">/</span>

        <button
          type="button"
          onClick={() => setLoginMode(false)}
          className={`text-3xl font-bold cursor-pointer ${
            !isLoginMode ? "text-white" : "text-gray-400"
          }`}
        >
          Signup
        </button>
      </div>

      {isLoginMode ? <UserLoginForm /> : <UserSigninForm />}
    </div>
  );
}

export default SignupAndLogin;