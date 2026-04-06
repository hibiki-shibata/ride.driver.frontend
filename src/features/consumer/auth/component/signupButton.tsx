import { CONSUMER_PATH } from "../../../../shared/constant/hrefPath"

function SignupButton() {
    return (
        <a className="bg-sky-600 rounded-lg p-3 m-3 mr-10 hover:bg-sky-700 text-nowrap"
            href={CONSUMER_PATH.SIGNUP}>
            Sign up
        </a>
    )
}

export default SignupButton;