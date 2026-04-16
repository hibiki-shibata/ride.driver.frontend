import MeritOfAmazones from "../../component/ui/MeritOfAmazones"
import WhatYouNeedToRegister from "../../component/ui/WhatYouNeedToRegister"
import WhenChoseUs from "../../component/ui/WhenChoseUs"

function ServiceInfoSection() {
    return (
        <div className="flex xl:flex-row flex-col mt-10">
            <MeritOfAmazones />
            <WhatYouNeedToRegister />
            <WhenChoseUs />
        </div>
    )
}

export default ServiceInfoSection