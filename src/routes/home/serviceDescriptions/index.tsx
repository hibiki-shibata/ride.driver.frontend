import MeritOfAmazones from "./meritOfAmazones";
import WhatNeedToRegister from "./whatNeedToRegister";
import WhenChoseUs from "./whenChoseUs";

function serviceDescription() {
    return (
        <>
            <div className="rounded-3xl sm:flex mt-12">
                <MeritOfAmazones />
                <WhatNeedToRegister />
            </div>
            <div className="rounded-3xl flex mt-15 justify-center">
                <WhenChoseUs />
            </div>
        </>
    )

}

export default serviceDescription;