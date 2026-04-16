import RequiredInfo from "./component/RequiredInfo"
import MissionAndResponsibility from "./component/MissionAndResponsibility"
import RegisterProcessCircle from "./component/RegisterProcessCircle"

function CourierHome() {
    return (
        <div className="bg-gray-900 text-white py-10 px-5 xl:px-110 flex flex-col gap-20">
            <MissionAndResponsibility />
            <RegisterProcessCircle />
            <RequiredInfo />
        </div>
    )
}

export default CourierHome