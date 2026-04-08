export type ConsumerProfile = {
    id: string
    name: string
    emailAddress: string
    consumerAddress: string 
    consumerCoordinates: {
        latitude: number
        longitude: number
    }   
}