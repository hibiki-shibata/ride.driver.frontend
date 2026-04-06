export type LoginReqDTO = {
  phoneNumber: string;
};

export type LoginResDTO = {
  success: boolean;
  message?: string;
  token?: string;
};

export async function loginReq(
  body: LoginReqDTO,
): Promise<LoginResDTO> {
  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/courier/login`,
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