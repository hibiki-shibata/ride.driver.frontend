import SignupForm from "./component/SignupForm"
import LinkToCourierHome from "../shared/component/ui/LinkToCourierHome"

function CoureirAuth() {
    return (
        <div className="flex flex-col bg-sky-300 text-black xl:px-110 px-15 py-10">
            <LinkToCourierHome />
            <SignupForm />
        </div>
    )
}

export default CoureirAuth