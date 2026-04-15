import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
import { useConsumerAuthContext } from "../../shared/context/authContext"
import { loginReq } from "../api/login"
import type { LoginReqDTO } from "../type/loginReqDTO"

type LoginStatus =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "failed"; error: string }

const INITIAL_LOGIN_FORM: LoginReqDTO = {
  emailAddress: "",
  password: "",
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Something went wrong"
}

function LoginForm() {
  const navigate = useNavigate()
  const authContext = useConsumerAuthContext()

  const [formData, setFormData] = useState<LoginReqDTO>(INITIAL_LOGIN_FORM)
  const [loginStatus, setLoginStatus] = useState<LoginStatus>({ status: "idle" })

  if (!authContext) {
    throw new Error("LoginForm must be used within ConsumerAuthContextProvider")
  }

  const { login } = authContext

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoginStatus({ status: "loading" })

    try {
      const loginResponse = await loginReq(formData)

      login(loginResponse.accessToken)
      setFormData(INITIAL_LOGIN_FORM)
      navigate(CONSUMER_ROUTE.MERCHANTS)
    } catch (error: unknown) {
      setLoginStatus({
        status: "failed",
        error: getErrorMessage(error),
      })
    }
  }

  const isLoading = loginStatus.status === "loading"
  const isSubmitDisabled =
    isLoading || !formData.emailAddress.trim() || !formData.password.trim()

  return (
    <>
      <form
        className="mt-16 flex flex-col justify-center rounded-3xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="emailAddress" className="mb-1">
          Email Address
        </label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
          value={formData.emailAddress}
          onChange={handleChange}
          className="mb-5 w-80 rounded-lg bg-white p-3 text-black"
        />

        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mb-5 w-80 rounded-lg bg-white p-3 text-black"
        />

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="rounded-lg bg-sky-600 px-6 py-3 font-bold text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Logging in..." : "Continue to login"}
        </button>
      </form>

      <div aria-live="polite" className="mt-4 min-h-6">
        {loginStatus.status === "failed" && (
          <p className="font-bold text-red-600">
            Login failed: {loginStatus.error}
          </p>
        )}
      </div>
    </>
  )
}

export default LoginForm