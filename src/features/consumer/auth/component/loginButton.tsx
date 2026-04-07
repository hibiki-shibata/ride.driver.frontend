import { CONSUMER_PATH } from "../../../../shared/constant/hrefPath"

function LoginButton() {
    return (
        <a className="bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700"
            href={CONSUMER_PATH.LOGIN}>
            Log in
        </a>
    )
}

export default LoginButton