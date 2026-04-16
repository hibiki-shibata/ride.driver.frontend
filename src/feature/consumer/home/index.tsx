import Headline from './component/ui/ServiceHeadline'
import LinkToCpExplore from '../shared/component/ui/LinkToMxExplore'
import ServiceInfoSection from './component/section/ServiceInfoSection'

function ConsumerHome() {
    return (
        <div className='bg-gradient-to-b from-gray-900 to-blue-950 text-white pt-20 pb-20 px-2 md:px-15'>
            <Headline />
            <LinkToCpExplore />
            <ServiceInfoSection />
        </div>
    )
}

export default ConsumerHome