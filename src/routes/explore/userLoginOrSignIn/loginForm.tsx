function userLoginForm() {
    return (
        <form className="mt-5 rounded-3xl flex flex-col justify-center">
            <input
                className="p-3 rounded-lg text-black mb-5 bg-white w-80"
                type="text"
                placeholder="Phone number"
            />
            <button
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg"
                type="submit">
                Continue to login
            </button>
        </form>
    )
}
export default userLoginForm;