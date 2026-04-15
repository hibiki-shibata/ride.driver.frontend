import { Navigate } from "react-router-dom"
import { FRONTEND_URI } from "../../../../shared/constant/apiURI"

function SignupSuccessPage() {
  const displaySuccessApplyPage: boolean = true
  if (!displaySuccessApplyPage) {
    return <Navigate to="/ride.driver.frontend/courier/apply" />
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-green-700 text-center mb-7">
          Thank you for applying for Amazones Courier!
        </h1>
        <h2 className="text-xl font-bold">~ Install Amazones Courier App & Go online ~</h2>
        <a
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mt-10 rounded-lg"
          href={FRONTEND_URI}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the App
        </a>
      </div>
    </>
  )
}

export default SignupSuccessPage