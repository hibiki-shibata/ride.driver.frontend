import { useState } from "react"
import { useCartContext } from "../context/cartContext"
import { sendOrder } from "../api/sendOrder"

function OrderCart({ merchantId }: { merchantId: string }) {
    const { addItem, removeItem, cartItems, clearCart } = useCartContext()
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    async function proceedToCheckout() {
        if (cartItems.length === 0 || isSubmitting) return

        try {
            setIsSubmitting(true)

            await sendOrder({
                merchantId,
                cartItems,
            })

            clearCart()
            setIsCartOpen(false)
        } catch (error) {
            console.error("Failed to send order:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return isCartOpen ? (
        <div className="rounded-2xl border border-slate-700 bg-slate-700 p-6 text-white shadow-xl h-full">
            <h2 className="mb-4 text-center text-2xl font-bold text-amber-200">
                Cart Details
            </h2>

            <h3 className="mb-4 text-center text-xl font-bold text-amber-100">
                Total: ${totalPrice.toFixed(2)}
            </h3>

            <div className="mb-5 space-y-2">
                <button
                    className="w-full rounded-xl bg-emerald-600 py-3 px-4 font-bold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={proceedToCheckout}
                    disabled={cartItems.length === 0 || isSubmitting}>
                    {isSubmitting ? "Processing..." : "Proceed to Checkout"}
                </button>

                <button
                    className="w-full rounded-xl bg-rose-600 py-3 px-4 font-bold text-white transition-colors hover:bg-rose-700"
                    onClick={() => setIsCartOpen(false)}
                    disabled={isSubmitting}>
                    Close
                </button>
            </div>

            {cartItems.length === 0 ? (
                <p className="text-center text-slate-300">Your cart is empty.</p>
            ) : (
                <ul className="space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
                    {cartItems.map((item) => (
                        <li
                            key={item.itemId}
                            className="rounded-xl border border-slate-700 bg-slate-800 p-4"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                    <p className="text-lg font-semibold text-amber-100">
                                        {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-300">
                                        Unit price: ${item.price.toFixed(2)}
                                    </p>
                                    <p className="mt-1 font-semibold text-emerald-400">
                                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white transition-all hover:bg-rose-500 active:scale-90"
                                            onClick={() => removeItem(item.itemId)}>
                                            -
                                        </button>

                                        <span className="min-w-[2rem] text-center text-base font-bold text-white">
                                            {item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white transition-all hover:bg-emerald-500 active:scale-90"
                                            onClick={() => addItem({
                                                itemId: item.itemId,
                                                name: item.name,
                                                price: item.price,
                                            })}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    ) : (
        <>
            {cartItems.length !== 0 && (
                <div className="fixed bottom-27 right-12 rounded-full bg-rose-500 px-2 text-white font-bold shadow-md">
                    !
                </div>
            )}

            <button
                className="fixed bottom-10 right-10 cursor-pointer rounded-full border border-slate-500 bg-slate-700 p-4 shadow-lg transition-all duration-300 hover:bg-slate-600"
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label="Open cart"
            >
                <svg fill="#ffffff" id="Capa_1" width="40px" height="40px" viewBox="0 0 902.86 902.86"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
            </button>
        </>
    )
}

export default OrderCart