function ServiceBanner() {
    return (
        <p className=" py-1 text-white bg-red-900 md:flex text-center md:flex-row md:justify-center animate-pulse">
            🚨 The backend instance is not running by default for cost reasons -
            <div>
                <a href="https://drive.google.com/file/d/1ko3GkkVkxu2W7JOJMOL2H4MTNhOH539g/view" target="_blank" className="text-blue-400 underline">
                    Check demo video
                </a>
                OR
                <a href="https://hibiki-shibata.github.io/#contact-card" target="_blank" className="text-blue-400 underline">
                    reach out to Hibiki
                </a>
            </div>
        </p>
    )
}

export default ServiceBanner