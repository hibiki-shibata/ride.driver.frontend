import SignupAndLoginForm from "./component/signupAndLoginForm"
import ConsumerLayout from "../shared/layout/consumerLayout"

function LoginAndSignupPage({ isLogin }: { isLogin: boolean }) {
    return (
        <ConsumerLayout>
            <SignupAndLoginForm isLogin={isLogin} />
        </ConsumerLayout>
    )
}

export default LoginAndSignupPage