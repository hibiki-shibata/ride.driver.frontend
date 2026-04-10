import SignupButton from "../component/signupButton"
import LoginButton from "../component/loginButton"
import SmallAuthButtons from "../component/smallAuthButtons"
import LinkToCourierHome from "../component/linkToCourierHome"
import AmazonesLogo from "../../../../shared/component/amazones-logo"
import { useConsumerAuthContext } from "../context/AuthProvider"

function ConsumerHeader() {
    const consumerAuthContext = useConsumerAuthContext()
    const consumerProfile = consumerAuthContext?.consumerProfile
    
    return consumerProfile ? (
        <>
            <div className="bg-black text-white flex justify-between md:py-0 py-5">
                <AmazonesLogo />
                <div className="flex">
                    <LinkToCourierHome />
                    <span className="items-center flex px-2 pr-6 my-5 text-4xl">
                        Welcome, {consumerProfile.name}
                    </span>
                </div>

            </div>
        </>
    ) : (
        <div className="bg-black text-white flex justify-between md:py-0 py-5">
            <AmazonesLogo />
            <div className="flex">
                <LinkToCourierHome />
                <div className="sm:flex hidden sm:block">
                    <LoginButton />
                    <SignupButton />
                </div>
                <div className="block sm:hidden m-0 p-0 items-center flex px-2 pr-6">
                    <SmallAuthButtons />
                </div>
            </div>
        </div>
    )
}

export default ConsumerHeader