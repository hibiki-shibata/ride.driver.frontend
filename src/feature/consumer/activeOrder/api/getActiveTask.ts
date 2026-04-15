import { CONSUMER_API_URI } from "../../../../shared/constant/apiURI"
import { httpRequest } from "../../shared/api/httpRequest"
import type { TaskDataDTO } from "../type/taskDataDTO"

type GetActiveTasksResponse = TaskDataDTO[] | null;

export async function getActiveTasks(): Promise<TaskDataDTO[]> {
  const response = await httpRequest<GetActiveTasksResponse>({
    method: 'GET',
    uri: CONSUMER_API_URI.GET_ACTIVE_TASK,
    requiresAuth: true,
  });

  return response ?? [];
}