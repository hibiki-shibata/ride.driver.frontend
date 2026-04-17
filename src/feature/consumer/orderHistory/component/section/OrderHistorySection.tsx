import OrderHistoryCardLayout from "../ui/OrderHistoryCardLayout"
import { useOrderHistory } from "../../hook/useOrderHistory"
import { useConsumerAuthContext } from "../../../shared/context/ConsumerAuthContext"

function OrderHistorySection() {
    const { tasks, isLoading, error } = useOrderHistory()
    const consumerAuthContext = useConsumerAuthContext()

    const isAuthenticated: boolean = consumerAuthContext?.authStatus === "authenticated"

    return (
        <section className="bg-gray-900 text-white scroll-smooth font-bold min-h-screen">
            <h1 className="text-4xl p-10 text-center">Your Order History</h1>

            {!isAuthenticated && (
                <p className="text-xl text-center mt-10 italic text-gray-400">
                    Please log in to view your active orders.
                </p>
            )}

            {isLoading && (
                <p className="text-xl text-center mt-10">Loading active orders...</p>
            )}

            {!isLoading && isAuthenticated && error && (
                <p className="text-xl text-center mt-10 text-red-400">{error}</p>
            )}

            {!isLoading && !error && tasks.length === 0 && (
                <p className="text-xl text-center mt-10">You have no active orders.</p>
            )}

            {!isLoading && !error && tasks.length > 0 &&
                tasks.map((task) => <OrderHistoryCardLayout key={task.taskId} task={task} />)}
        </section>
    )
}

export default OrderHistorySection