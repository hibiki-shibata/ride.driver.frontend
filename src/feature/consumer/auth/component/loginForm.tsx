import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { CONSUMER_ROUTE } from '../../../../shared/constant/routePath'
import { useConsumerAuthContext } from "../../shared/context/authContext"
import type { LoginReqDTO, LoginResDTO } from "../type/loginDTO"
import { loginReq } from "../api/login"

type LoginStatus =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "failed"; error: string }


function LoginForm() {
  const navigate = useNavigate()
  const { login } = useConsumerAuthContext()!
  const [loginDataDraft, setLoginDataDraft] = useState<LoginReqDTO | null>(null)
  const [loginStatus, setLoginStatus] = useState<LoginStatus | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginDataDraft((prev) => ({
      ...prev,
      [name]: value,
    } as LoginReqDTO))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoginStatus({ status: "loading" })
    try {
      if (!loginDataDraft) throw new Error("Login data is not set")
      const loginRes: LoginResDTO = await loginReq(loginDataDraft)
      login(loginRes.accessToken)

      setLoginStatus({
        status: "success",
        message: "Login successful",
      })
      setLoginDataDraft(null)
      navigate(CONSUMER_ROUTE.EXPLORE)
    } catch (error: unknown) {
      setLoginStatus({
        status: "failed",
        error: error instanceof Error ? error.message : "Something went wrong",
      })
    }
  }

  const isLoading = loginStatus?.status === "loading"

  return (
    <>
      <form
        className="mt-16 rounded-3xl flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="emailAddress" className="mb-1">
          Email Address
        </label>
        <input
          id="emailAddress"
          name="emailAddress"
          className="p-3 rounded-lg text-black mb-5 bg-white w-80"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
          value={loginDataDraft?.emailAddress}
          onChange={handleChange}
        />

        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          className="p-3 rounded-lg text-black mb-5 bg-white w-80"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          value={loginDataDraft?.password}
          onChange={handleChange}
        />

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Continue to login"}
        </button>
      </form>

      <div aria-live="polite" className="mt-4">
        {loginStatus?.status === "success" && (
          <p className="text-green-600 font-bold">{loginStatus.message}</p>
        )}
        {loginStatus?.status === "failed" && (
          <p className="text-red-600 font-bold">
            Login failed: {loginStatus.error}
          </p>
        )}
      </div>
    </>
  );
}

export default LoginForm;