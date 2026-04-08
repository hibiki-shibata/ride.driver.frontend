import Footer from "../../../shared/component/footer"
import Header from "../shared/section/header"
import SignupAndLogin from "./signupAndLogin"

function ConsumerAuth({ isLogin }: { isLogin: boolean }) {
    return (
        <div>
            <Header />
            <SignupAndLogin isLogin={isLogin} />
            <Footer />
        </div>
    )
}

export default ConsumerAuth