import AvailableMerchantList from "./component/section/AvailableMerchantList"
import BackToConsumerHome from "./component/ui/BackToConsumerHome"

function ConsumerExplore() {
    return (
        <div className="min-h-screen bg-slate-900 px-6 py-10 text-white">
            <BackToConsumerHome />
            <AvailableMerchantList />
        </div>
    )
}

export default ConsumerExplore