import MeritOfAmazones from "../../components/common/meritOfAmazones";
import WhatNeedToRegister from "../../components/common/whatNeedToRegister";
import WhenChoseUs from "../../components/common/whenChoseUs";

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