import { useState } from "react";

function loginButton() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    return (
        <>
            <button className="bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700"
                onClick={() => setIsLoginOpen(!isLoginOpen)}>
                Log in
            </button>
            {isLoginOpen && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 text-black p-7">

                    <span className="text-xl font-bold">Ready to Login?</span>
                    <form className="mt-6 flex flex-col">
                        Email Address:
                        <input
                            type="text"
                            placeholder="example@domain.com"
                            className="mb-10 p-2 w-100 border border-gray-300 rounded"
                        />
                        <button
                            type="submit"
                            className="bg-sky-600 text-white rounded-lg p-2 hover:bg-sky-700"
                            onClick={() => { setIsLoginOpen(false) }}
                        >
                            Login
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default loginButton;