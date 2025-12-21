import SignupButton from "../signupButton";

function requiredInfo() {
    return (
                    <div className="bg-gray-800 p-10 mt-10 rounded-3xl">
                <h1 className="text-4xl text-center mb-10">Required field for verification</h1>
                <ul className="list-disc pl-5 text-lg font-bold">
                    <li className="mt-10">Name
                        <ul>
                            <li className="mt-2 font-normal text-gray-400">The name will be displayed on customer side.</li>
                        </ul>
                    </li>
                    <li className="mt-10">Phone number
                        <ul>
                            <li className="mt-2 font-normal text-gray-400">To ensure your identity. Register the number you can pick on duty.</li>
                        </ul>
                    </li>
                    <li className="mt-10">Vehicle type</li>
                    <ul>
                        <li className="mt-2 font-normal text-gray-400">Customer choose courier depending on required vehicle type.</li>
                    </ul>
                </ul>
                <SignupButton />
            </div>
    )
}

export default requiredInfo;