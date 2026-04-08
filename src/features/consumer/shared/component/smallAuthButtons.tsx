import { useState } from "react"
import { CONSUMER_ROUTE } from "../../../../shared/constant/hrefRoute";

const links = [
  { href: CONSUMER_ROUTE.LOGIN, label: "Login to your account" },
  { href: CONSUMER_ROUTE.SIGNUP, label: "Create a new account" },
]

export default function SmallAuthButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Open account menu"
      >
        <svg
          className="hover:fill-gray-300"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          stroke="black"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </g>
          </g>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-2 top-15 z-50 mt-2 rounded-lg bg-gray-700 p-2 text-white font-bold shadow-lg">
          {links.map((link, index) => (
            <div key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-10 py-4 hover:bg-gray-600"
              >
                {link.label}
              </a>
              {index < links.length - 1 && (
                <span className="my-2 block border-t border-gray-500" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}