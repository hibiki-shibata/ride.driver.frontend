export type SignupReqDTO = {
  name: string;
  emailAddress: string;
  consumerAddress: string;
  consumerCoordinates: {
    latitude: number;
    longitude: number;
  };
  password: string;
}

export type SignupResDTO = {
  success: boolean;
  message?: string;
  userId?: string;
}