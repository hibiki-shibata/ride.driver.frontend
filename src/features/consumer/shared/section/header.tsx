import SignupButton from "../auth/component/signupButton"
import LoginButton from "../auth/component/loginButton"
import LinkToCourierHome from "../component/linkToCourierHome"
import SmallAuthButtons from "../auth/component/smallAuthButtons"
import AmazonesLogo from "../../../../shared/component/amazones-logo"

function ConsumerHeader() {
    return (
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