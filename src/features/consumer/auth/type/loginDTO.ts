export type LoginReqDTO = {
  emailAddress: string;
  password: string;
};

export type LoginResDTO = {
  success: boolean;
  message?: string;
  token?: string;
};