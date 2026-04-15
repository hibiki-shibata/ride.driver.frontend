import { useEffect, useState } from "react"
import { getActiveTasks } from "../api/getActiveTask"
import type { TaskDataDTO } from "../type/taskDataDTO"

const POLLING_INTERVAL_MS = 30000

type UseActiveTasksResult = {
    tasks: TaskDataDTO[]
    isLoading: boolean
    error: string | null
}

// function createMockActiveTasks(): TaskDataDTO[] {
//     return Array.from({ length: 5 }, (_, index) => {
//         const i = index + 1

//         return {
//             taskId: `task-${i}`,
//             consumerName: `Consumer ${i}`,
//             consumerEmailaddress: "aa@a.com",
//             merchantName: `Merchant ${i}`,
//             taskStatus: i % 2 === 0 ? "PICKUP" : "DROPOFF",
//             pickupAddress: `${i} Pickup St`,
//             pickupLatitude: 37.7749 + i * 0.01,
//             pickupLongitude: -122.4194 + i * 0.01,
//             dropoffAddress: `${i} Dropoff St`,
//             dropoffLatitude: 37.7749 - i * 0.01,
//             dropoffLongitude: -122.4194 - i * 0.01,
//             itemNames: [`Item A${i}`, `Item B${i}`],
//             totalPrice: i * 10,
//         }
//     })
// } // Remove later - for testing only

export function useActiveTasks(): UseActiveTasksResult {
    const [tasks, setTasks] = useState<TaskDataDTO[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true

        async function fetchActiveTasks() {
            try {
                const response: TaskDataDTO[] = await getActiveTasks()

                if (!isMounted) return

                setTasks(response ?? [])
                setError(null)
            } catch (err) {
                if (!isMounted) return
                setError("Failed to load active orders.")
                console.error(err)
            } finally {
                if (!isMounted) return
                setIsLoading(false)
            }
        }

        fetchActiveTasks()

        const intervalId = window.setInterval(fetchActiveTasks, POLLING_INTERVAL_MS)

        return () => {
            isMounted = false
            window.clearInterval(intervalId)
        }
    }, [])

    return {
        tasks,
        isLoading,
        error,
    }
}