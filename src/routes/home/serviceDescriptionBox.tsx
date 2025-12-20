import SignupButton from "./signupButton";

function serviceDescriptionBox() {
    return (
        <>
            <div className="rounded-3xl flex mt-20">
                <div className="bg-cyan-900 p-10 rounded-3xl p-10 mr-7 ml-7 font-bold">
                    <h2 className="text-3xl font-bold mb-5">Merits of Amazones Delivery?</h2>
                    <ul className="list-disc list-inside text-lg space-y-3">
                        <li className="mt-6"> The price
                            <ul className="text-gray-300 font-normal">
                                - We don't take commisions as a platform, but you decide.
                            </ul>
                        </li>
                        <li className="mt-6">Flexiblility
                            <ul className="text-gray-300 font-normal">
                                - You can use it for Taxi, mailing and Q-commerce.
                            </ul>
                        </li>
                        <li className="mt-6"> Simpleness
                            <ul className="text-gray-300 font-normal">
                                - No contracts and coplex procedures, start delivery on browser right now.
                            </ul>
                        </li>
                        <li className="mt-6">Democracy
                            <ul className="text-gray-300 font-normal">
                                - Minimum controls as a platform, most of things are up to couriers & customers' direct negotiation.
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="bg-cyan-700 p-10 rounded-3xl p-10 mr-7 ml-7 font-bold">
                    <h2 className="text-3xl font-bold mb-1">When people chose us?</h2>
                    <ul className="list-disc list-inside text-lg  space-y-3">
                        <li className="mt-10">You want to control the delivery price.
                            <ul className="text-gray-300 font-normal">
                                - You can negotiate the couriers directly.
                            </ul>
                        </li>
                        <li className="mt-10">You want to quickly try delivery service for free.
                            <ul className="text-gray-300 font-normal">
                                - You don't need any contracts and complex procedures, just start using it on browser.
                            </ul>
                        </li>
                        <li className="mt-10">You want to directly connect with couriers.
                            <ul className="text-gray-300 font-normal">
                                - You can establish your own direct supply-chain with couriers.
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rounded-3xl flex mt-10 justify-center">
                <div className="bg-cyan-800 p-10 rounded-3xl p-10 mr-7 ml-7 font-bold">
                    <h2 className="text-3xl font-bold mb-5">What you need to register?</h2>
                    <ul className="list-disc list-inside text-lg  space-y-3">
                        <li className="mt-6">Name
                            <ul className="text-gray-300 font-normal">
                                - This will be displayed on Courier side.
                            </ul>
                        </li>
                        <li className="mt-6">Phone number
                            <ul className="text-gray-300 font-normal">
                                - To ensure your identity. The number might be used by couriers to contact you. Register the number you can pick on delivery.
                            </ul>
                        </li>
                        <li className="mt-6">Picking address
                            <ul className="text-gray-300 font-normal">
                                - Courier will pickup & deliver from address.
                            </ul>
                        </li>
                        <li className="mt-6"> Destination address
                            <ul className="text-gray-300 font-normal">
                                - Courier will deliver to address.
                            </ul>
                        </li>
                        <SignupButton />
                    </ul>
                </div>
            </div>
        </>
    )

}

export default serviceDescriptionBox;