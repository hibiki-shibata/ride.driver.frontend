import Header from "./components/header";
import Footer from '../../components/footer'
import SignupButton from "./components/signupButton";
import DescriptionContaners from "./components/descriptionContainers";

function courier() {
    return (
        <>
            <Header />
            <div className="bg-gray-900 text-white md:p-20 p-1">
                <div className="text-center">
                    <h1 className="text-5xl">Become a Mélobee Courier Partner</h1>
                    <SignupButton />
                </div>
                <DescriptionContaners />
            </div>
            <Footer />
        </>
    )
}

export default courier;