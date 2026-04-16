import { Navigate } from "react-router-dom"
import LinkToAppInstall from "./LinkToAppInstall"

function SignupSuccessPage() {
  const displaySuccessApplyPage: boolean = true
  if (!displaySuccessApplyPage) {
    return <Navigate to="/ride.driver.frontend/courier/apply" />
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-green-700 text-center mb-7">
        Thank you for applying for Amazones Courier!
      </h1>
      <h2 className="text-xl font-bold">~ Install Amazones Courier App & Go online ~</h2>
      <LinkToAppInstall />
    </div>
  )
}

export default SignupSuccessPage