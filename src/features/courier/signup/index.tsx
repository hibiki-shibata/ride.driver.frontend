import ApplyForm from "./components/signupForm"
import Header from "../../../shared/component/headers/courier"
import Footer from '../../../shared/component/footer'

function CoureirSignup() {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center bg-sky-300 text-black lg:px-110 lg:py-20 px-10 py-10">
                <a href="/ride.driver.frontend/courier"
                    className="bg-sky-500 hover:bg-sky-600 text-white absolute  text-black font-bold py-2 px-4 mb-4 rounded-lg top-25 left-5">
                    Back to Courier page
                </a>
                <div>
                    <h1 className="text-4xl font-bold m-10">Ready to become a Amazones courier partner?</h1>
                    <h2 className="text-2xl text-gray-900 m-10">Before we get you started as a Amazones courierpartner, we just need a few details from you. Fill out the quick application below, and we'll get the ball rolling!</h2>
                    <ApplyForm />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CoureirSignup