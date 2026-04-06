export type SignupReqDTO = {
  phoneNumber: string;
  username: string;
};

export type SignupResDTO = {
  success: boolean;
  message?: string;
  userId?: string;
};

export async function signupReq(
  body: SignupReqDTO,
): Promise<SignupResDTO> {
  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/courier/signup`,
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
      `Signup request failed (${res.status}): ${errorText || res.statusText}`,
    );
  }

  return res.json() as Promise<SignupResDTO>;
}