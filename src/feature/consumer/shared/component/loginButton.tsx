import { CONSUMER_ROUTE } from "../../../../shared/constant/routePath"

function LoginButton() {
    return (
        <a className="bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700"
            href={CONSUMER_ROUTE.LOGIN}>
            Log in
        </a>
    )
}

export default LoginButton