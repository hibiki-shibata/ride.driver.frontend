import type { LoginReqDTO, LoginResDTO } from "../type/loginDTO"
import { CONSUMER_PROFILE_API_URI } from "../../../../shared/constant/apiUri"
import { httpRequest } from "../../shared/api/httpRequest"

export async function loginReq(
  body: LoginReqDTO,
): Promise<LoginResDTO> {
  const res = await httpRequest<LoginResDTO>({
    method: "POST",
    uri: CONSUMER_PROFILE_API_URI.LOGIN,
    body,
    requiresAuth: false,
  })
  return res
}