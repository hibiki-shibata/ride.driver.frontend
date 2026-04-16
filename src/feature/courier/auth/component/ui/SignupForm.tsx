import { useState } from "react"
import { cpApplicationReq } from "../../api/cpApplicationReq"
import type { CpApplicationData } from "../../api/cpApplicationReq"
import ApplySuccessPage from "./ApplySuccessPage"

type ApplicationSubmitStatus = { status: "idle" } | { status: "loading" } | { status: "success", message: string } | { status: "failed", error: string }

function SignupForm() {
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
            const resMessage: string = await cpApplicationReq(cpDraftData)
            if (resMessage) setRequestStatus({ status: "success", message: JSON.stringify(resMessage) })
        } catch (e: unknown) {
            setRequestStatus({ status: "failed", error: (e instanceof Error) ? e.message : "Unknown error" })
        }
    }
    return (
        <div className="py-15">
            {requestStatus.status !== "success" && (
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
                        onChange={(e) => setCpDraftData({ ...cpDraftData, vehicleType: e.target.value })}
                        required
                    >
                        <option value="" disabled>Select vehicle type</option>
                        <option value="BICYCLE" >Bicycle</option>
                        <option value="MOTORCYCLE">Motorcycle</option>
                        <option value="CAR">Car</option>
                        <option value="TRUCK">Truck</option>
                    </select>
                    <button
                        className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mb-4 rounded-lg w-full"
                        type="submit">
                        Submit Application
                    </button>
                </form>
            )}
            {requestStatus.status === "success" && (
                <ApplySuccessPage />
            )}
            {requestStatus.status === "loading" && (
                <p>Submitting your application...</p>
            )}
            {requestStatus.status === "failed" && (
                <p className="text-red-600 font-bold">Something went wrong: {requestStatus.error}</p>
            )}
        </div>
    )
}


export default SignupForm