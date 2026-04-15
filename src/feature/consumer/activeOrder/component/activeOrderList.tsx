import { useEffect, useState } from "react"
import { getActiveTask } from "../api/getActiveTask"
import type { TaskDataDTO } from "../type/taskDataDTO"

function testActiveOrderList() { // Remove this function after testing
    const sampleData: TaskDataDTO[] = []
    for (let i = 1; i <= 5; i++) {
        sampleData.push({
            taskId: `task-${i}`,
            consumerName: `Consumer ${i}`,
            consumerEmailaddress: `aa@a.com`,
            merchantName: `Merchant ${i}`,
            taskStatus: i % 2 === 0 ? "PICKUP" : "DROPOFF",
            pickupAddress: `${i} Pickup St`,
            pickupLatitude: 37.7749 + i * 0.01,
            pickupLongitude: -122.4194 + i * 0.01,
            dropoffAddress: `${i} Dropoff St`,
            dropoffLatitude: 37.7749 - i * 0.01,
            dropoffLongitude: -122.4194 - i * 0.01,
            itemNames: [`Item A${i}`, `Item B${i}`],
            totalPrice: i * 10,
        })
    }
    return sampleData
}

function ActiveOrderList() {
    const [activeTask, setActiveTask] = useState<TaskDataDTO[] | null>(null)

    async function fetchActiveTask() {
        const res: TaskDataDTO[] | null = await getActiveTask()
        setActiveTask(res ? res : null)
    }

    // poll every 10 seconds to update active order status
    useEffect(() => {
        setActiveTask(testActiveOrderList()) // Remove this line after testing        
        fetchActiveTask()
        const intervalId = setInterval(fetchActiveTask, 30000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="bg-gray-900 text-white scroll-smooth font-bold min-h-screen">
            <h1 className="text-4xl p-10 text-center">Your Active Orders</h1>
            {activeTask ? (
                activeTask.map((task) => (
                    <div key={task.taskId}
                        className="bg-gray-800 mt-5 p-5 rounded-lg max-w-xl mx-auto">
                        <h2 className="text-2xl font-bold mb-2">Order ID: {task.taskId}</h2>
                        <p className="mb-1">Merchant: {task.merchantName}</p>
                        <p className="mb-1">Price: {task.totalPrice}</p>
                        <p className="mb-1">Items: {task.itemNames.join(", ")}</p>
                        <p className="mb-1">Status: <span className="text-green-500">{task.taskStatus}</span></p>
                    </div>
                ))
            ) : (
                <p className="text-xl mt-10">You have no active orders.</p>
            )}
        </div>
    )
}

export default ActiveOrderList