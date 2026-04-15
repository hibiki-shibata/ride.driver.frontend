export type SignupReqDTO = {
  name: string
  emailAddress: string
  consumerAddress: string
  consumerAddressCoordinate: {
    latitude: number
    longitude: number
  }
  password: string
}

export type SignupResDTO = {
  accessToken: string
}