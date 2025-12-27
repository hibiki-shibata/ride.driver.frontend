import { useState } from "react"
import { cpApplicationReq } from "../services/cpApplicationReq"


function applyForm() {
    const [cpData, setCpData] = useState({
        cpFirstName: "",
        cpLastName: "",
        phoneNumber: "",
        vehicleType: ""
    })
    return (
        <div className="py-15">
            <form>
                <label className="font-bold">Your name</label>
                <div className="flex">
                    <input
                        className="mb-7 p-3 mr-2 rounded-lg w-full text-black bg-white bg-white"
                        type="text"
                        placeholder="First Name"
                        value={cpData.cpFirstName}
                        onChange={(e) => setCpData({ ...cpData, cpFirstName: e.target.value })}
                        required
                    />
                    <input
                        className="mb-7 p-3 ml-2 rounded-lg w-full text-black bg-white bg-white"
                        type="text"
                        placeholder="Last Name"
                        value={cpData.cpLastName}
                        onChange={(e) => setCpData({ ...cpData, cpLastName: e.target.value })}
                        required
                    />
                </div>
                <label className="font-bold">Phone number</label>
                <small> ( Format: +8112345678 )</small>
                <input
                    className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                    type="tel"
                    placeholder="Phone Number"
                    value={cpData.phoneNumber}
                    onChange={(e) => setCpData({ ...cpData, phoneNumber: e.target.value })}
                    pattern="^\+?\d{8,12}$"
                    required
                />
                <label className="font-bold">Vehicle type</label>
                <select className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                    value={cpData.vehicleType}
                    onChange={(e) => setCpData({ ...cpData, vehicleType: e.target.value })}>
                    <option value="" disabled>Select vehicle type</option>
                    <option value="Bicycle" >Bicycle</option>
                    <option value="Car">Car</option>
                    <option value="Motorcycle">Motorcycle</option>
                </select>
                <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mb-4 rounded-lg w-full"
                    onClick={() => cpApplicationReq(cpData)}>
                    Submit Application
                </button>
            </form>
        </div>

    )
}


export default applyForm