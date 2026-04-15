import { CONSUMER_API_URI } from "../../../../shared/constant/apiURI"
import { httpRequest } from "../../shared/api/httpRequest"
import type { TaskDataDTO } from "../type/taskDataDTO"

export async function getActiveTask(): Promise<TaskDataDTO[] | null> {
    const res = await httpRequest<TaskDataDTO[] | null>({
        method: "GET",
        uri: CONSUMER_API_URI.GET_ACTIVE_TASK,
        requiresAuth: true,
    })
    return res
}