import SignupButton from "../signupButton";
import LoginButton from "../loginButton";
import HrefToCourierPage from "./hrefToCourierPage";
import UnknownAccountIcon from "./unknownAccountIcon";
import MélobeeLogo from "../../../components/Mélobee-logo";

function header() {
    return (
        <div className="bg-black text-white flex justify-between">
            <MélobeeLogo />
            <div className="flex">
                <HrefToCourierPage />
                <div className="sm:flex hidden sm:block">
                    <LoginButton />
                    <SignupButton />
                </div>
                <div className="block sm:hidden m-0 p-0 items-center flex px-2 pr-6">
                    <UnknownAccountIcon />
                </div>
            </div>
        </div>
    )
}

export default header;