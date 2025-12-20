import SignupButton from "./signupButton";

function header() {
    return (
        <div className="bg-black text-white flex justify-between">
            <h1 className="pt-2 pl-10 text-5xl">~ Amazones ~</h1>
            <div className="flex">
                <button className="hover:underline m-3">
                    <a href="/ride.driver.frontend/courier">
                        Join as a Courier
                    </a>
                </button>
                <div className="flex">
                    <button className="bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700">
                        Log in
                    </button>
                   <SignupButton />
                </div>
            </div>
        </div>
    )
}

export default header;