import Header from "../../shared/component/headers/courier"
import Footer from '../../shared/component/footer'
import SignupButton from "../../shared/component/buttons/couriers/courierSignupButton";
import DescriptionContaners from "./descriptionContainer"

function courier() {
    return (
        <>
            <Header />
            <div className="bg-gray-900 text-white md:p-20 p-1">
                <div className="text-center">
                    <h1 className="text-5xl sm:mt-0 mt-10">Become a Amazones Courier Partner</h1>
                    <SignupButton />
                </div>
                <DescriptionContaners />
            </div>
            <Footer />
        </>
    )
}

export default courier;