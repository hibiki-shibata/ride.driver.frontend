import type { ConsumerProfile } from "../type/consumerProfile"
import { getConsumerProfileReq } from "../api/getConsumerProfile"


export class ConsumerProfileService {
    private static instance: ConsumerProfileService
    private static consumerProfile: ConsumerProfile

    private constructor() {}

    public static getInstance(): ConsumerProfileService {
        if (!ConsumerProfileService.instance) {
            ConsumerProfileService.instance = new ConsumerProfileService()
        }
        return ConsumerProfileService.instance
    }

    public async getConsumerProfile() {
        if (!ConsumerProfileService.consumerProfile) {
            await this.updateConsumerProfile()
        }
        return ConsumerProfileService.consumerProfile
    }

    private async updateConsumerProfile() {
        // get access token
        try {
            ConsumerProfileService.consumerProfile = await getConsumerProfileReq()
        } catch (error) {
            console.error("Failed to fetch consumer profile:", error)
            throw error
        }
    }       
}