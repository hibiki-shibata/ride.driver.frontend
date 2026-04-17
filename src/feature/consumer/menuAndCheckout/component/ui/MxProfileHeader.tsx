
import { useMerchantProfile } from "../../hook/useMerchantProfile"

type MxProfileProps = {
    merchantId: string
}

function MxProfileHeader({ merchantId }: MxProfileProps) {
    const { merchantProfile, isMxProfileLoading, mxProfileLoadError } = useMerchantProfile(merchantId)
    return (
        <>
            <h1 className="m-10 text-center text-4xl font-bold text-amber-200">

                {isMxProfileLoading && "Loading merchant profile..."}

                {!isMxProfileLoading && mxProfileLoadError && (
                    <span className="text-rose-400">{mxProfileLoadError}</span>
                )}

                {!isMxProfileLoading && !mxProfileLoadError && merchantProfile && (
                    <>
                        <span>{merchantProfile.name}'s Menu</span>
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

            </h1>
        </>
    )
}

export default MxProfileHeader