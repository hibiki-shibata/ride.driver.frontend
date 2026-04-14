// import CheckoutCard from "./checkoutCard"
import { useState } from "react"

function OrderCart() {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    return isCartOpen ? (
        <div className="fixed bg-gray-600 right-0 h-screen top-0 p-10">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <p className="mb-2">Total: $XX.XX</p>
            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded my-1">
                Proceed to Checkout
            </button>
            <button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded my-1"
                onClick={() => setIsCartOpen(false)}>
                Close
            </button>
        </div>
    ) : (
        <button className="fixed rounded-full bg-gray-600 hover:bg-gray-500 p-4 bottom-10 right-10 cursor-pointer border-1"
            type="button"
            onClick={() => setIsCartOpen(true)}>
            <svg fill="#ffffff" id="Capa_1" width="40px" height="40px" viewBox="0 0 902.86 902.86"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
        </button>
    )

}

export default OrderCart