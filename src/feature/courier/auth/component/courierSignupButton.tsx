import { COURIER_ROUTE } from "../../../../shared/constant/routePath"

function courierSignupButton() {
    return (
        <a href={COURIER_ROUTE.SIGNUP}>
            <button className="p-1 mt-15 bg-sky-600 rounded-lg p-3 m-3 hover:bg-sky-700">
                Sign up now
            </button>
        </a>
    )
}

export default courierSignupButton