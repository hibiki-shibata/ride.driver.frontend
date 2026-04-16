import type { TaskDataDTO } from "../../type/taskDataDTO"

type ActiveOrderCardProps = {
    task: TaskDataDTO
}

function ActiveOrderCardLayout({ task }: ActiveOrderCardProps) {
    return (
        <article className="bg-gray-800 mt-5 p-5 rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Order ID: {task.taskId}</h2>
            <p className="mb-1">Merchant: {task.merchantName}</p>
            <p className="mb-1">Price: {task.totalPrice}</p>
            <p className="mb-1">Items: {task.itemNames.join(", ")}</p>
            <p className="mb-1">
                Status: <span className="text-green-500">{task.taskStatus}</span>
            </p>
        </article>
    )
}

export default ActiveOrderCardLayout