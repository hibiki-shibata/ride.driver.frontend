import { CONSUMER_API_URI } from "../../../../shared/constant/apiUri"
import type { SignupReqDTO, SignupResDTO } from "../type/signupDTO"
import { httpRequest } from "../../shared/api/httpRequest"

export async function signupReq(
  body: SignupReqDTO,
): Promise<SignupResDTO> {
  const res = await httpRequest<SignupResDTO>({
    method: "POST",
    uri: CONSUMER_API_URI.SIGNUP,
    body,
    requiresAuth: false,
  })
  return res
}