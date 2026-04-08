import UserSignupButton from "../component/signupButton"
import UserLoginButton from "../component/loginButton"
import HrefToCourierPage from "../component/linkToCourierHome"
import SmallAuthButtons from "../component/smallAuthButtons"
import AmazonesLogo from "../../../../shared/component/amazones-logo"

function ConsumerHeader() {
    return (
        <div className="bg-black text-white flex justify-between md:py-0 py-5">
            <AmazonesLogo />
            <div className="flex">
                <HrefToCourierPage />
                <div className="sm:flex hidden sm:block">
                    <UserLoginButton />
                    <UserSignupButton />
                </div>
                <div className="block sm:hidden m-0 p-0 items-center flex px-2 pr-6">
                    <SmallAuthButtons />
                </div>
            </div>
        </div>
    )
}

export default ConsumerHeader