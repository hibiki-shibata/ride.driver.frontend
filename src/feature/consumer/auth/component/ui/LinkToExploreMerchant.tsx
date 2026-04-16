import { Link } from 'react-router-dom'
import { CONSUMER_ROUTE } from '../../../../../shared/constant/routePath'

function LinkToExploreMerchant() {
    return (
        <Link
            to={CONSUMER_ROUTE.MERCHANTS}
            className="rounded-lg bg-sky-600 px-6 py-4 font-bold transition-colors hover:bg-sky-700">
            Explore Amazones
        </Link>
    )
}

export default LinkToExploreMerchant