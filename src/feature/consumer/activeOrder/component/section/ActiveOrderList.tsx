import ActiveOrderCardLayout from "../ui/ActiveOrderCardLayout"
import { useActiveTasks } from "../../hook/useActiveTasks"

function ActiveOrderList() {
    const { tasks, isLoading, error } = useActiveTasks()

    return (
        <section className="bg-gray-900 text-white scroll-smooth font-bold min-h-screen">
            <h1 className="text-4xl p-10 text-center">Your Active Orders</h1>

            {isLoading && (
                <p className="text-xl text-center mt-10">Loading active orders...</p>
            )}

            {!isLoading && error && (
                <p className="text-xl text-center mt-10 text-red-400">{error}</p>
            )}

            {!isLoading && !error && tasks.length === 0 && (
                <p className="text-xl text-center mt-10">You have no active orders.</p>
            )}

            {!isLoading && !error && tasks.length > 0 &&
                tasks.map((task) => <ActiveOrderCardLayout key={task.taskId} task={task} />)}
        </section>
    )
}

export default ActiveOrderList