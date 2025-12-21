function applyForm() {
    return (
        <div className="py-15">
            <input
                className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                type="text"
                placeholder="Full Name"
            />
            <input
                className="mb-7 p-3 rounded-lg w-full text-black bg-white bg-white"
                type="text"
                placeholder="Phone Number"
            />
            <input
                className="mb-4 p-3 rounded-lg w-full text-black bg-white"
                type="text"
                placeholder="Vehicle Type"
            />
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 mb-4 rounded-lg w-full">
                Submit Application
            </button>
        </div>

    )
}


export default applyForm