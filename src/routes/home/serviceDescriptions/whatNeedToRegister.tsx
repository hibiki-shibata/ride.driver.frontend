import SignupButton from "../signupButton";

function whatNeedToRegister() {
    return (
        // <div className="bg-cyan-900 p-10 rounded-3xl p-10 sm:mr-7 sm:ml-7 mr-1 ml-1 mt-4 font-bold" >
            <div className="bg-cyan-600 p-10 rounded-3xl p-10 sm:mr-7 sm:ml-7 mr-1 ml-1 font-bold " >
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
            )
}

            export default whatNeedToRegister;