import type { OrderHistoryDTO } from "../../type/orderHistoryDTO"

type OrderHistoryCardProps = {
    task: OrderHistoryDTO
}

function OrderHistoryCardLayout({ task }: OrderHistoryCardProps) {
    return (
        <article className="bg-gray-800 mt-5 p-5 rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Order ID: {task.taskId}</h2>
            <p className="mb-1">Order Time: {task.orderTime}</p>
            <p className="mb-1">Merchant: {task.merchantName}</p>
            <p className="mb-1">Price: ${task.totalPrice}</p>
            <p className="mb-1">Items: {task.itemNames.map((itemName, index) => (
                <p key={index} className="italic font-normal">- {itemName}</p>
            ))}
            </p>
            <p className="mb-1">
                Status: <span className="text-green-500">{task.taskStatus}</span>
            </p>
        </article>
    )
}

export default OrderHistoryCardLayout