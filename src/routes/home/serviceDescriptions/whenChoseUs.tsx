import SignupButton from "../signupButton";

function whenChoseUs() {
    return (
        <div className="bg-gradient-to-b from-teal-600 to-teal-800 p-10 rounded-3xl p-12 sm:mr-7 sm:ml-7 mr-1 ml-1 font-bold mt-5" >
            <h2 className="text-3xl text-center font-bold mb-5">When people chose us?</h2>
            <div className="flex flex-col justify-center items-center">
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
                <SignupButton />
            </div>
        </div>
    )
}

export default whenChoseUs;