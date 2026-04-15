import MeritOfAmazones from "../component/meritOfAmazones"
import WhatNeedToRegister from "../component/whatNeedToRegister"
import WhenChoseUs from "../component/whenChoseUs"

function ServiceDescriptionSection() {
    return (
        <>
            <div className="rounded-3xl sm:flex mt-5">
                <MeritOfAmazones />
                <WhatNeedToRegister />
            </div>
            <div className="rounded-3xl flex mt-15 justify-center">
                <WhenChoseUs />
            </div>
        </>
    )
}

export default ServiceDescriptionSection