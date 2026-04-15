export type TaskDataDTO = {
    taskId: string
    consumerName: string
    consumerEmailaddress: string
    merchantName: string
    taskStatus: string
    pickupAddress: string
    pickupLatitude: number
    pickupLongitude: number
    dropoffAddress: string
    dropoffLatitude: number
    dropoffLongitude: number
    itemNames: string[]
    totalPrice: number
}