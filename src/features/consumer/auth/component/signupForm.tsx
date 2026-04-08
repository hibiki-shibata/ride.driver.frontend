import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { signupReq } from "../api/signup";
import type { SignupReqDTO, SignupResDTO } from "../type/signupDTO";
import { AccessTokenManager } from "../service/accessTokenManager";
import { CONSUMER_ROUTE } from '../../../../shared/constant/hrefRoute'

type SignupStatus =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "failed"; error: string };

function SignupForm() {
  const navigate = useNavigate()
  const [signupStatus, setSignupStatus] = useState<SignupStatus | null>(null)

  const [signupData, setSignupData] = useState<SignupReqDTO | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }) as SignupReqDTO);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignupStatus({ status: "loading" })
    if (!signupData) throw new Error("Signup data is not set")
    try {
      const res: SignupResDTO = await signupReq(signupData)
      setSignupStatus({
        status: "success",
        message: "Signup successful",
      })
      setSignupData(null)
      AccessTokenManager.getInstance().setAccessToken(res.accessToken)
      navigate(CONSUMER_ROUTE.EXPLORE)
    } catch (error: unknown) {
      setSignupStatus({
        status: "failed",
        error: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  const isLoading = signupStatus?.status === "loading";

  return (
    <>
      <form
        className="mt-5 rounded-3xl flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="mb-1">
          Username
        </label>
        <input
          id="name"
          name="name"
          className="p-3 rounded-lg text-black mb-5 bg-white w-80"
          type="text"
          placeholder="Username"
          required
          value={signupData?.name}
          onChange={handleChange}
        />

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
          value={signupData?.emailAddress}
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
          autoComplete="new-password"
          required
          value={signupData?.password}
          onChange={handleChange}
        />

        <label htmlFor="consumerAddress" className="mb-1">
          Delivery Address
        </label>
        <input
          id="consumerAddress"
          name="consumerAddress"
          className="p-3 rounded-lg text-black mb-5 bg-white w-80"
          type="text"
          placeholder="Delivery Address"
          required
          value={signupData?.consumerAddress}
          onChange={handleChange}
        />

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Continue to Signup"}
        </button>
      </form>

      <div aria-live="polite" className="mt-4">
        {signupStatus?.status === "success" && (
          <p className="text-green-600 font-bold">{signupStatus.message}</p>
        )}
        {signupStatus?.status === "failed" && (
          <p className="text-red-600 font-bold">
            Signup failed: {signupStatus?.error}
          </p>
        )}
      </div>
    </>
  );
}

export default SignupForm;