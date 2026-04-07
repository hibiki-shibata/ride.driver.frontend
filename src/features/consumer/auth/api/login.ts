import type { LoginReqDTO, LoginResDTO } from "../type/loginDTO";
import { CONSUMER_PROFILE_API_URI } from "../../../../shared/constant/apiUri";

export async function loginReq(
  body: LoginReqDTO,
): Promise<LoginResDTO> {
  const res = await fetch(
    CONSUMER_PROFILE_API_URI.LOGIN,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Login request failed (${res.status}): ${errorText || res.statusText}`,
    );
  }

  return res.json() as Promise<LoginResDTO>;
}