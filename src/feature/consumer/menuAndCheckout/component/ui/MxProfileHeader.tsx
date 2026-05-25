
import { useMerchantProfile } from "../../hook/useMerchantProfile"


function MxProfileHeader() {
    const { merchantProfile, isMxProfileLoading, mxProfileLoadError } = useMerchantProfile()
    return (
        <>
            {isMxProfileLoading && (
                <h1 className="text-center font-bold animate-bounce">
                    Loading merchant profile...
                </h1>
            )}

            {mxProfileLoadError && (
                <h1 className="text-rose-400 text-center font-bold">
                    Failed to fetch merchant Profile
                </h1>
            )}

            {!isMxProfileLoading && !mxProfileLoadError && merchantProfile && (
                <>
                    <h1 className="mt-10 mb-5 text-center text-4xl font-bold text-amber-200">
                        {merchantProfile.name}'s Menu
                    </h1>
                    <p className="mt-2 text-center text-lg text-slate-300">
                        {merchantProfile.merchantAddress}
                    </p>
                    <p className="mt-1 text-center text-lg text-slate-300">
                        Tel: {merchantProfile.phoneNumber}
                    </p>
                    <p className="mt-4 text-center text-lg italic text-slate-400">
                        {merchantProfile.merchantComment}
                    </p>
                </>
            )}
        </>
    )
}

export default MxProfileHeader