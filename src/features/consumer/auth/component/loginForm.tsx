import { useState } from "react";
import { loginReq } from "../api/login";
import type { LoginReqDTO, LoginResDTO } from "../type/loginDTO";
import { useConsumerAccessTokenContext } from "../context/accessTokenContext";

type LoginStatus =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "failed"; error: string };

function LoginForm() {
  const [loginData, setLoginData] = useState<LoginReqDTO>({
    emailAddress: "",
    password: "",
  })

  const [loginStatus, setLoginStatus] = useState<LoginStatus>({
    status: "idle",
  })

  const { setContextAccessToken } = useConsumerAccessTokenContext()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoginStatus({ status: "loading" });

    try {
      const res: LoginResDTO = await loginReq(loginData)
      setContextAccessToken(res.accessToken)

      setLoginStatus({
        status: "success",
        message: "Login successful",
      })
      setLoginData({
        emailAddress: "",
        password: "",
      })
    } catch (error: unknown) {
      setLoginStatus({
        status: "failed",
        error: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const isLoading = loginStatus.status === "loading";

  return (
    <>
      <form
        className="mt-5 rounded-3xl flex flex-col justify-center"
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
          value={loginData.emailAddress}
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
          value={loginData.password}
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
        {loginStatus.status === "success" && (
          <p className="text-green-600 font-bold">{loginStatus.message}</p>
        )}
        {loginStatus.status === "failed" && (
          <p className="text-red-600 font-bold">
            Login failed: {loginStatus.error}
          </p>
        )}
      </div>
    </>
  );
}

export default LoginForm;