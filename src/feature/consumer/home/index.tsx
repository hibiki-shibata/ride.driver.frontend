import ConsumerLayout from "../shared/layout/consumerLayout"
import ServiceDescription from './section/serviceDescription'
import Headline from './component/headline'
import LinkToCpExplore from './component/linkToCpExplore'

function ConsumerHome() {
    return (
        <ConsumerLayout>
            <div className='bg-gradient-to-b from-gray-900 to-blue-950 text-white pt-20 pb-20 px-2 md:px-15'>
                <Headline />
                <LinkToCpExplore />
                <ServiceDescription />
            </div>
        </ConsumerLayout>
    )
}

export default ConsumerHome