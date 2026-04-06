import { useState } from "react";

function unknownAccountIcon() {
    const [showSigninOptions, setShowSigninOptions] = useState<boolean>(false);

    return (
        <>
            <div className="cursor-pointer" onClick={() => setShowSigninOptions(!showSigninOptions)}>
                <svg className="hover:fill-gray-300" width="38px" height="38px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="black"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path> </g> </g></svg>
            </div>
            {showSigninOptions && (
                <div className="absolute top-15 right-2 mt-2 text-white font-bold rounded-lg p-2 z-50 bg-gray-700">
                    <a href="/ride.driver.frontend/consumer/login"
                        className="block px-10 py-4 bg-gray-700 hover:bg-gray-600 border-white rounded-lg">
                        Login to your account
                    </a>
                    <span className="block border-t my-2 border-gray-500"></span>
                    <a href="/ride.driver.frontend/consumer/signup"
                        className="block px-10 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg">
                        Signup for a new account
                    </a>
                </div>
            )}
        </>
    )
}

export default unknownAccountIcon;