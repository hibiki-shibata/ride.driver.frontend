import SignupButton from "../../components/signupButton";

function missionAndResponsibility() {
    return (
        <div className="bg-gray-800 p-10 mt-10 rounded-3xl">
            <h1 className="text-4xl text-center mb-10">Missions and Responsibilities</h1>
            <div className="flex flex-col justify-center items-center">
                <ul className="list-disc text-lg  font-bold">
                    <li className="mt-7">Flexible online time.
                        <ul className="mt-1 font-normal text-base text-gray-400">
                            <li>Let's go online whenever you want to.</li>
                            <li>Let's go offline whenever you want to after comleting an ongoing Misssion.</li>
                        </ul>
                    </li>
                    <li className="mt-7">Please be a professional on duty.
                        <ul className="mt-1 font-normal text-base text-gray-400">
                            <li>Your safety, customer's safety is your priority.</li>
                            <li>Polityly driving, but effort for on-time delivering.</li>
                            <li>Smooth communications.</li>
                        </ul>
                    </li>
                    <li className="mt-7">Report us issues quickly.
                        <ul className="mt-1 font-normal text-base text-gray-400">
                            <li>Feel free to report us about operatinal issue or system issues</li>
                            <li> Always Welcome to hear your feedback about the service.</li>
                        </ul>
                    </li>
                    <li className="mt-7">Make a little earnings at your free time, and go grab a drink with it !!🍻</li>
                </ul>
                <SignupButton />
            </div>
        </div>
    )
}

export default missionAndResponsibility;