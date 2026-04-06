import MeritOfAmazones from "../../component/common/meritOfAmazones";
import WhatNeedToRegister from "../../component/common/whatNeedToRegister";
import WhenChoseUs from "../../component/common/whenChoseUs";

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

export default ServiceDescriptionSection;