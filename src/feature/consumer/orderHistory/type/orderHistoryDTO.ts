export type OrderHistoryDTO = {
    taskId: string
    merchantName: string
    taskStatus: string
    orderTime: string
    pickupAddress: string
    pickupLatitude: number
    pickupLongitude: number
    dropoffAddress: string
    dropoffLatitude: number
    dropoffLongitude: number
    itemNames: string[]
    totalPrice: number
}