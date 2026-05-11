
import { FRONTEND_URI } from "../../../../shared/constant/apiUri"
import { Link } from "react-router-dom"

function LinkToAppInstall() {
    return (
        <Link
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mt-10 rounded-lg"
            to={FRONTEND_URI}
            target="_blank"
            rel="noopener noreferrer"
        >
            Download the App
        </Link>
    )
}

export default LinkToAppInstall