export type MerchantProfile = {
    id: string
    name: string
    phoneNumber: string
    merchantAddress: string
    merchantComment: string
    merchantStatus: string
    merchantAddressCoordinates: {
        latitude: number
        longitude: number
    }
}