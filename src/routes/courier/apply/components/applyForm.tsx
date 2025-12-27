import { useState } from "react"
import { cpApplicationReq } from "../services/cpApplicationReq"


function applyForm() {
    const [cpData, setCpData] = useState({
        cpName: "",
        phoneNumber: "",
        vehicleType: ""
    })
    return (
        <div className="py-15">
            <form>
                <label className="font-bold">Your name</label>
                <input
                    className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                    type="text"
                    placeholder="Full Name"
                    value={cpData.cpName}
                    onChange={(e) => setCpData({ ...cpData, cpName: e.target.value })}
                    required
                />
                <label className="font-bold">Phone number</label>
                <small> ( Format: +8112345678 )</small>
                <input
                    className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                    type="tel"
                    placeholder="Phone Number"
                    value={cpData.phoneNumber}
                    onChange={(e) => setCpData({ ...cpData, phoneNumber: e.target.value })}
                    pattern="\+?[0-9]{10,15}"
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