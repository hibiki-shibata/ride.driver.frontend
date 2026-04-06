import ServiceDescription from './serviceDescription'
import Headline from '../component/headline'
import ExploreCpButton from '../../explore/component/exploreCpButton'

function ConsumerHomeBodySection() {
    return (
        <div className='bg-gradient-to-b from-gray-900 to-blue-950 text-white pt-20 pb-20 px-2 md:px-15'>
            <Headline />
            <ExploreCpButton />
            <div>
                <ServiceDescription />
            </div>
        </div>
    )
}

export default ConsumerHomeBodySection