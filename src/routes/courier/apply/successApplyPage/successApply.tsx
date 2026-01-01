import { Navigate } from "react-router-dom";

function successApply() {
  const displaySuccessApplyPage: boolean = true
  if (!displaySuccessApplyPage) {
    return <Navigate to="/ride.driver.frontend/courier/apply" />;
  }
  return (
    <div>
      <h1>Thank you for interesting in becoming a Amazones courier partner!</h1>
      <p>If you're seeing this page without applying Amazones Courier, Apply from the button down below.</p>
      <button
        className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mb-4 rounded-lg w-full"
        onClick={() => {
          window.location.href = "/ride.driver.frontend/courier/apply"
        }}>
        Apply to become a Amazones courier partner
      </button>
    </div>
  )
}

export default successApply;