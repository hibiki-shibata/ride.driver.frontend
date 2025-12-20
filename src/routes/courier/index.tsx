import Header from "./header";
import Footer from '../../components/footer'
import SignupButton from "./signupButton";
import DescriptionContaners from "./descriptionContaners";

function courier() {
    return (
        <>
            <Header />
            <div className="bg-gray-900 text-white p-20">
                <div className="text-center">
                    <h1 className="text-5xl">Become a Amazones Courier Partner</h1>
                    <SignupButton />
                </div>
                <DescriptionContaners />
            </div>
            <Footer />
        </>
    )
}

export default courier;