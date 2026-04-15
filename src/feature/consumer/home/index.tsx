import ConsumerLayout from "../shared/layout/consumerLayout"
import Headline from './component/ServiceHeadline'
import LinkToCpExplore from './component/LinkToCpExplore'
import MeritOfAmazones from "./component/MeritOfAmazones"
import WhatNeedToRegister from "./component/WhatYouNeedToRegister"
import WhenChoseUs from "./component/WhenChoseUs"

function ConsumerHome() {
    return (
        <ConsumerLayout>
            <div className='bg-gradient-to-b from-gray-900 to-blue-950 text-white pt-20 pb-20 px-2 md:px-15'>
                <Headline />
                <LinkToCpExplore />
                <div className="flex xl:flex-row flex-col mt-10">
                    <MeritOfAmazones />
                    <WhatNeedToRegister />
                    <WhenChoseUs />
                </div>
            </div>
        </ConsumerLayout>
    )
}

export default ConsumerHome