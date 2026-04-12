type VehicleType = 'CAR' | 'MOTORCYCLE' | 'BICYCLE' | 'TRUCK'
type CPStatus = 'ONBOARDING' | 'ONLINE' | 'OFFLINE' | 'SUSPENDED'

type OperationArea = {
    id: string
    name: string
}

export type ConsumerProfile = {
    id: string
    name: string
    phoneNumber: string
    vehicleType: VehicleType
    cpRate: number | null
    cpStatus: CPStatus
    operationArea: OperationArea | null
    cpComments: string | null
}