import Footer from "../../../shared/component/footer"
import Header from "../shared/section/header"
import SignupAndLoginForm from "./section/signupAndLoginForm"
import { ConsumerAuthContextProvider } from "../shared/context/AuthProvider"

function LoginAndSignupPage({ isLogin }: { isLogin: boolean }) {
    return (
        <ConsumerAuthContextProvider>
            <Header />
            <SignupAndLoginForm isLogin={isLogin} />
            <Footer />
        </ConsumerAuthContextProvider>
    )
}

export default LoginAndSignupPage