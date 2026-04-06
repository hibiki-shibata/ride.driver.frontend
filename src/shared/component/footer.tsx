import { FRONTEND_URI } from "../constant/apiUri";

function Footer() {
    return (
        <>
            <div className="bg-black text-white p-15 flex justify-center">
                <ul className="flex flex-wrap items-center mt-1 text-sm font-medium text-gray-500 space-x-4">
                    <li><a className="hover:underline" href="/ride.driver.frontend/courier">Couriers</a></li>
                    <li><a href={FRONTEND_URI} className="hover:underline">Contact: hibiki.shibata@wolt.com</a></li>
                    <li><a href={FRONTEND_URI} className="hover:underline">Service owner: @Hibiki</a></li>
                </ul>
            </div>
        </>
    )
}

export default Footer