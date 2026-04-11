import SignupButton from "../component/signupButton"
import LoginButton from "../component/loginButton"
import SmallAuthButtons from "../component/smallAuthButtons"
import LinkToCourierHome from "../component/linkToCourierHome"
import AmazonesLogo from "../../../../shared/component/amazones-logo"
import { useConsumerAuthContext } from "../context/AuthProvider"

function ConsumerHeader() {
    const { consumerProfile, authStatus } = useConsumerAuthContext() ?? {}
    const isAuthenticated = authStatus === 'authenticated'

    return (
        <div className="bg-black text-white flex justify-between md:py-0 py-5">
            <AmazonesLogo />
            <div className="flex">
                <LinkToCourierHome />

                {isAuthenticated ? (
                    <span className="flex items-center px-2 pr-6 my-5 text-2xl underline hover:text-gray-300">
                        {consumerProfile ? consumerProfile.name : "Unknown User"}
                    </span>
                ) : (
                    <>
                        <div className="hidden sm:flex">
                            <LoginButton />
                            <SignupButton />
                        </div>
                        <div className="flex sm:hidden m-0 p-0 items-center px-2 pr-6">
                            <SmallAuthButtons />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ConsumerHeader