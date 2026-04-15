import { useState } from "react"
import AmazonesLogo from "../../../../shared/component/amazones-logo"
import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"
import SignupButton from "../component/signupButton"
import LoginButton from "../component/loginButton"
import SmallAuthButtons from "../component/smallAuthButtons"
import LinkToCourierHome from "../component/linkToCourierHome"
import { useConsumerAuthContext } from "../context/authContext"

function ConsumerHeader() {
    const { consumerProfile, authStatus } = useConsumerAuthContext() ?? {}
    const [isOpenMenuOptions, setIsOpenMenuOptions] = useState(false)
    const isAuthenticated = authStatus === 'authenticated'

    return (
        <div className="bg-black text-white flex justify-between md:py-0 py-5">
            <AmazonesLogo />
            <div className="flex">
                <LinkToCourierHome />

                {isAuthenticated ? (<>
                    <button className="flex items-center px-2 pr-6 my-5 text-2xl underline hover:text-gray-300"
                        onClick={() => setIsOpenMenuOptions(!isOpenMenuOptions)}>
                        {consumerProfile ? consumerProfile.name : "Unknown User"}
                    </button>
                    {isOpenMenuOptions && (
                        <div className="absolute right-5 top-16 bg-gray-800 rounded-lg p-4">
                            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                                href={CONSUMER_ROUTE.HOME}>
                                Home
                            </a>
                            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                                href={CONSUMER_ROUTE.ORDER_STATUS}>
                                Active Order
                            </a>
                            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                                href={CONSUMER_ROUTE.MERCHANTS}>
                                Explore Merchants
                            </a>
                            <a className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded">
                                Logout
                            </a>
                        </div>
                    )}
                </>) : (<>
                    <div className="hidden sm:flex">
                        <LoginButton />
                        <SignupButton />
                    </div>
                    <div className="flex sm:hidden m-0 p-0 items-center px-2 pr-6">
                        <SmallAuthButtons />
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default ConsumerHeader