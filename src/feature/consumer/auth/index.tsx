import SignupAndLoginForm from "./component/signupAndLoginForm"

function LoginAndSignupPage({ isLogin }: { isLogin: boolean }) {
    return (
        <SignupAndLoginForm isLogin={isLogin} />
    )
}

export default LoginAndSignupPage