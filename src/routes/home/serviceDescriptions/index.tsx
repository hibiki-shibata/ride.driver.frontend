import MeritOfMélobee from "./meritOfMélobee";
import WhatNeedToRegister from "./whatNeedToRegister";
import WhenChoseUs from "./whenChoseUs";

function serviceDescription() {
    return (
        <>
            <div className="rounded-3xl sm:flex mt-5">
                <MeritOfMélobee />
                <WhatNeedToRegister />
            </div>
            <div className="rounded-3xl flex mt-15 justify-center">
                <WhenChoseUs />
            </div>
        </>
    )

}

export default serviceDescription;