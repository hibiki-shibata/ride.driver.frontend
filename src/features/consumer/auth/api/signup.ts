import { CONSUMER_PROFILE_API_URI } from "../../../../shared/constant/apiUri"
import type { SignupReqDTO, SignupResDTO } from "../type/signupDTO"

export async function signupReq(
  body: SignupReqDTO,
): Promise<SignupResDTO> {
  const res = await fetch(
    CONSUMER_PROFILE_API_URI.SIGNUP,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  )

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(
      `Signup request failed (${res.status}): ${errorText || res.statusText}`,
    )
  }

  return res.json() as Promise<SignupResDTO>
}