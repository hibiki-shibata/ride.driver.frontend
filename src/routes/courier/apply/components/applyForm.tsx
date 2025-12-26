import { useEffect } from "react"
import { cpApplicationReq } from "../services/cpApplicationReq"


function applyForm() {
    useEffect(() => {
        cpApplicationReq(
            { cpName: "John Doe", phoneNumber: "1234567890", vehicleType: "Bicycle" }
        )
    }, [])


    return (
        <div className="py-15">
            <h2 className="font-bold">Your name</h2>
            <input
                className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                type="text"
                placeholder="Full Name"
            />
            <h2 className="font-bold">Phone number</h2>
            <input
                className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                type="text"
                placeholder="Phone Number"
            />
            <h2 className="font-bold">Vehicle type</h2>
            <select className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white">
                <option >Bicycle</option>
                <option >Car</option>
                <option>Motorcycle</option>
            </select>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mb-4 rounded-lg w-full">
                Submit Application
            </button>
        </div>

    )
}


export default applyForm