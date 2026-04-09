import { COURIER_ROUTE } from "../constant/routePath"

const profilePageUri = "https://hibiki-shibata.github.io/"

function Footer() {
    return (
        <>
            <div className="bg-black text-white p-15 flex justify-center">
                <ul className="flex flex-wrap items-center mt-1 text-sm font-medium text-gray-500 space-x-4">
                    <li><a className="hover:underline" href={COURIER_ROUTE.HOME}>Courier page</a></li>
                    <li><a href={profilePageUri} className="hover:underline">Contact: hibiki.shibata@wolt.com</a></li>
                    <li><a href={profilePageUri} className="hover:underline">Service owner: @Hibiki</a></li>
                </ul>
            </div>
        </>
    )
}

export default Footer