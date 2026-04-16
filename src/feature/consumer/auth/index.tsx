import SignupAndLoginForm from "./component/SignupAndLoginForm"

function LoginAndSignupPage({ isLogin }: { isLogin: boolean }) {
    return (
        <SignupAndLoginForm isLogin={isLogin} />
    )
}

export default LoginAndSignupPage