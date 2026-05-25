import OrderHistoryCardLayout from "../ui/OrderHistoryCard"
import { useOrderHistory } from "../../hook/useOrderHistory"
import { useConsumerAuthContext } from "../../../shared/context/ConsumerAuthContext"

function OrderHistorySection() {
    const { orderHistory, isLoadingOrderHistory, orderHistoryFetchError } = useOrderHistory()
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

            {isLoadingOrderHistory && (
                <p className="text-xl text-center mt-10 animate-bounce">
                    Loading active orders...
                </p>
            )}

            {!isLoadingOrderHistory && isAuthenticated && orderHistoryFetchError && (
                <p className="text-xl text-center mt-10 text-red-400">
                    Failed to fetch Order History
                </p>
            )}

            {!isLoadingOrderHistory && !orderHistoryFetchError && orderHistory.length === 0 && (
                <p className="text-xl text-center mt-10">
                    You have no active orders
                </p>
            )}

            {!isLoadingOrderHistory && !orderHistoryFetchError && orderHistory.length > 0 &&
                orderHistory.map((task) => <OrderHistoryCardLayout task={task} />)}
        </section>
    )
}

export default OrderHistorySection