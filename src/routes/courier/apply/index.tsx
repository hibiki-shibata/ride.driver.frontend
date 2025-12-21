import Header from "../components/header"
import ApplyForm from "./components/applyForm"
import Footer from '../../../components/footer'

function coureirApply() {
    return (
        <>
            <Header />
            <div className="flex justify-center bg-sky-300 text-black lg:px-110 lg:py-20 px-10 py-10">
                <div>
                    <h1 className="text-4xl font-bold m-10">Ready to become a Mélobee courier partner?</h1>
                    <h2 className="text-2xl text-gray-900 m-10">Before we get you started as a Mélobee courierpartner, we just need a few details from you. Fill out the quick application below, and we'll get the ball rolling!</h2>
                    <ApplyForm />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default coureirApply;