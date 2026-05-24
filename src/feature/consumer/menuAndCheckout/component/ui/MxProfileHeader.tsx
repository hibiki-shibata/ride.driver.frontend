
import { useMerchantProfile } from "../../hook/useMerchantProfile"


function MxProfileHeader() {
    const { merchantProfile, isMxProfileLoading, mxProfileLoadError } = useMerchantProfile()
    return (
        <>
            {isMxProfileLoading && "Loading merchant profile..."}

            {!isMxProfileLoading && mxProfileLoadError && (
                <span className="text-rose-400">{mxProfileLoadError}</span>
            )}

            {!isMxProfileLoading && !mxProfileLoadError && merchantProfile && (
                <>
                    <h1 className="mt-10 mb-5 text-center text-4xl font-bold text-amber-200">
                        {merchantProfile.name}'s Menu
                    </h1>
                    {/* Merchant comments, address, and phone number */}
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