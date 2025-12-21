function registerProcessCircle() {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 mb-5">
            <div className="pr-7 pl-7 flex justify-center items-center flex-col">
                <div className="m-5 w-35 h-35 bg-cyan-900 rounded-full flex items-center justify-center font-bold align-center text-5xl">
                    1
                </div>
                <p className="text-xl font-bold" >Apply</p>
            </div>
           <div className="pr-7 pl-7 flex justify-center items-center flex-col">
                <div className="m-5 w-35 h-35 bg-cyan-900 rounded-full flex items-center justify-center font-bold align-center text-5xl">
                    2
                </div>
                <p className="text-xl font-bold" >install App</p>
            </div>
           <div className="pr-7 pl-7 flex justify-center items-center flex-col">
                <div className="m-6 w-35 h-35 bg-cyan-900 rounded-full flex items-center justify-center font-bold align-center text-5xl">
                    3
                </div>
                <p className="text-xl font-bold">Go online!</p>
            </div>

        </div>
    )
}

export default registerProcessCircle;