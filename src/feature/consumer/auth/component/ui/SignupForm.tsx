import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CONSUMER_ROUTE } from "../../../../../shared/constant/routePath"
import { useConsumerAuthContext } from "../../../shared/context/ConsumerAuthContext"
import { signupReq } from "../../api/signupReq"
import type { SignupReqDTO } from "../../type/signupReqDTO"

type SignupStatus =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "failed"; error: string }

const INITIAL_SIGNUP_FORM: SignupReqDTO = {
  name: "",
  emailAddress: "",
  password: "",
  consumerAddress: "",
  consumerAddressCoordinate: {
    latitude: 0,
    longitude: 0,
  },
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Something went wrong"
}

function SignupForm() {
  const navigate = useNavigate()
  const consumerAuthContext = useConsumerAuthContext()

  const [formData, setFormData] = useState<SignupReqDTO>(INITIAL_SIGNUP_FORM)
  const [signupStatus, setSignupStatus] = useState<SignupStatus>({
    status: "idle",
  })

  if (!consumerAuthContext) {
    throw new Error("SignupForm must be used within ConsumerAuthContextProvider")
  }

  const { login } = consumerAuthContext

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as keyof SignupReqDTO
    const { value } = event.target

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSignupStatus({ status: "loading" })

    try {
      const signupResponse = await signupReq(formData)

      login(signupResponse.accessToken)
      setFormData(INITIAL_SIGNUP_FORM)
      navigate(CONSUMER_ROUTE.MERCHANTS)
    } catch (error: unknown) {
      setSignupStatus({
        status: "failed",
        error: getErrorMessage(error),
      })
    }
  }

  const isLoading: boolean = signupStatus.status === "loading"
  const isSubmitDisabled: boolean =
    isLoading ||
    !formData.name.trim() ||
    !formData.emailAddress.trim() ||
    !formData.password.trim() ||
    !formData.consumerAddress.trim()

  return (
    <>
      <form
        className="mt-5 flex flex-col justify-center rounded-3xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="mb-1">
          Username
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Username"
          required
          value={formData.name}
          onChange={handleChange}
          className="mb-5 w-80 rounded-lg bg-white p-3 text-black"
        />

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
          autoComplete="new-password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mb-5 w-80 rounded-lg bg-white p-3 text-black"
        />

        <label htmlFor="consumerAddress" className="mb-1">
          Delivery Address
        </label>
        <input
          id="consumerAddress"
          name="consumerAddress"
          type="text"
          placeholder="Delivery Address"
          required
          value={formData.consumerAddress}
          onChange={handleChange}
          className="mb-5 w-80 rounded-lg bg-white p-3 text-black"
        />

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="rounded-lg bg-sky-600 px-6 py-3 font-bold text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Signing up..." : "Continue to sign up"}
        </button>
      </form>

      {signupStatus.status === "failed" && (
        <div aria-live="polite" className="mt-4 min-h-6 font-bold text-red-600">
          Signup failed: {signupStatus.error}
        </div>
      )}
    </>
  )
}

export default SignupForm