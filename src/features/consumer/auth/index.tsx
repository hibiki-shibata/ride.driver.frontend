import Footer from "../../../shared/component/footer"
import Header from "../shared/section/header"
import SignupAndLoginForm from "./section/signupAndLoginForm"

function LoginAndSignupPage({ isLogin }: { isLogin: boolean }) {
    return (
        <>
            <Header />
            <SignupAndLoginForm isLogin={isLogin} />
            <Footer />
        </>
    )
}

export default LoginAndSignupPage