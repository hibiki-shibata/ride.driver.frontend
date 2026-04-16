import SignupAndLoginForm from "./component/section/SignupAndLoginForm"

function LoginAndSignupPage({ isLogin }: { isLogin: boolean }) {
    return (
        <SignupAndLoginForm isLogin={isLogin} />
    )
}

export default LoginAndSignupPage