import { useState } from "react"
import { cpApplicationReq } from "../services/cpApplicationReq"
import type { CpApplicationData } from "../services/cpApplicationReq"

type ApplicationSubmitStatus = { status: "idle" } | { status: "loading" } | { status: "success", message: string } | { status: "failed", error: string }

function applyForm() {
    const [requestStatus, setRequestStatus] = useState<ApplicationSubmitStatus>({ status: "idle" })
    const [cpDraftData, setCpDraftData] = useState<CpApplicationData>({
        cpFirstName: "",
        cpLastName: "",
        phoneNumber: "",
        vehicleType: ""
    })

    const handleSubmit = async (cpDraftData: CpApplicationData) => {
        try {
            setRequestStatus({ status: "loading" })
            const resMesssage: String = await cpApplicationReq(cpDraftData)
            if (resMesssage) setRequestStatus({ status: "success", message: JSON.stringify(resMesssage) })
        } catch (e) {
            setRequestStatus({ status: "failed", error: (e as Error).message })
        }
    }
    return (
        <div className="py-15">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(cpDraftData)
                }}>
                <label className="font-bold">Your name</label>
                <div className="flex">
                    <input
                        className="mb-7 p-3 mr-2 rounded-lg w-full text-black bg-white bg-white"
                        type="text"
                        placeholder="First Name"
                        value={cpDraftData.cpFirstName}
                        onChange={(e) => setCpDraftData({ ...cpDraftData, cpFirstName: e.target.value })}
                        required />
                    <input
                        className="mb-7 p-3 ml-2 rounded-lg w-full text-black bg-white bg-white"
                        type="text"
                        placeholder="Last Name"
                        value={cpDraftData.cpLastName}
                        onChange={(e) => setCpDraftData({ ...cpDraftData, cpLastName: e.target.value })}
                        required
                    />
                </div>
                <label className="font-bold">Phone number</label>
                <small> ( Format: +8112345678 )</small>
                <input
                    className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                    type="tel"
                    placeholder="Phone Number"
                    value={cpDraftData.phoneNumber}
                    onChange={(e) => setCpDraftData({ ...cpDraftData, phoneNumber: e.target.value })}
                    pattern="^\+?\d{8,12}$"
                    required
                />
                <label className="font-bold">Vehicle type</label>
                <select className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                    value={cpDraftData.vehicleType}
                    onChange={(e) => setCpDraftData({ ...cpDraftData, vehicleType: e.target.value })}>
                    <option value="" disabled>Select vehicle type</option>
                    <option value="Bicycle" >Bicycle</option>
                    <option value="Car">Car</option>
                    <option value="Motorcycle">Motorcycle</option>
                </select>
                {requestStatus.status === "loading" && (
                    <p className="text-blue-600 font-bold mb-4">Submitting your application...</p>
                )}
                {requestStatus.status === "success" && (
                    <p className="text-green-700 font-bold mb-4">Your application has been submitted successfully!</p>
                )}
                {requestStatus.status === "failed" && (
                    <p className="text-red-600 font-bold mb-4">There was an error submitting your application. Please try again later.</p>
                )}
                <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mb-4 rounded-lg w-full"
                    type="submit">
                    Submit Application
                </button>
            </form>
        </div>

    )
}


export default applyForm