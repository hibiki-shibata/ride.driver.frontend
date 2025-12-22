import SignupButton from "../signupButton";

function whatNeedToRegister() {
    return (
        // <div className="bg-cyan-900 p-10 rounded-3xl p-10 sm:mr-7 sm:ml-7 mr-1 ml-1 mt-4 font-bold" >
        <div className="bg-gradient-to-b from-yellow-600 to-yellow-900 p-10 rounded-3xl p-12 sm:mr-7 sm:ml-7 mr-1 ml-1 font-bold mt-10" >
            <h2 className="text-3xl text-center font-bold mb-5">What you need to register?</h2>
            <div className="flex flex-col justify-center items-center">
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
                </ul>
                    <SignupButton />
            </div>
        </div>
    )
}

export default whatNeedToRegister;