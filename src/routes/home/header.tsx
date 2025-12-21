import SignupButton from "./signupButton";
import LoginButton from "./loginButton";
import HrefToCourierPage from "../home/hrefToCourierPage";
import AmazonesLogo from "../../components/amazones-logo";

function header() {
    return (
        <div className="bg-black text-white flex justify-between">
            <AmazonesLogo />
            <div className="sm:flex">
                <HrefToCourierPage />
                <div className="sm:flex">
                    <LoginButton />
                    <SignupButton />
                </div>
            </div>
        </div>
    )
}

export default header;