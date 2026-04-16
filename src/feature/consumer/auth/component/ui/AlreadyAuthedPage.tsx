import LinkToExploreMerchant from './LinkToExploreMerchant'

function AlreadyAuthedPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-center text-white sm:px-20">
            <h1 className="mb-4 text-4xl font-bold">You are already logged in</h1>
            <p className="mb-10 text-sm text-gray-300 sm:text-base">You can continue browsing available merchants.</p>
            <LinkToExploreMerchant />
        </div>
    )
}

export default AlreadyAuthedPage