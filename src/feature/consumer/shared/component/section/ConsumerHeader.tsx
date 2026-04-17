import { useState } from "react"
import AmazonesLogo from "../../../../../shared/component/amazones-logo"
import LinkToSignupForm from "../../../shared/component/ui/LinkToSignupForm"
import LinkToLoginForm from "../../../shared/component/ui/LinkToLoginForm"
import AccountMenuBar from "../ui/AccountMenuBar"
import SmallAuthButtons from "../ui/AuthBtnInSmallScreen"
import LinkToCourierHome from "../ui/LinkToCourierHome"
import { useConsumerAuthContext } from "../../context/ConsumerAuthContext"

function ConsumerHeader() {
  const authContext = useConsumerAuthContext()
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)

  if (!authContext) {
    throw new Error("ConsumerHeader must be used within ConsumerAuthContextProvider")
  }

  const { consumerProfile, authStatus } = authContext
  const isAuthenticated: boolean = authStatus === "authenticated"
  const accountName: string = consumerProfile?.name ?? "Unknown Account"

  return (
    <header className="flex justify-between bg-black py-5 text-white md:py-0">
      <AmazonesLogo />

      <nav className="flex items-center">
        <LinkToCourierHome />

        {isAuthenticated ? (
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="my-5 flex items-center px-2 pr-6 text-2xl underline transition-colors hover:text-gray-300"
              aria-expanded={isAccountMenuOpen}
              aria-haspopup="menu">
              {accountName}
            </button>
            {isAccountMenuOpen && <AccountMenuBar />}
          </div>
        ) : (
          <>
            <div className="hidden sm:flex mr-3">
              <LinkToLoginForm />
              <LinkToSignupForm />
            </div>

            <div className="flex items-center px-2 pr-6 sm:hidden">
              <SmallAuthButtons />
            </div>
          </>
        )}
      </nav>
    </header>
  )
}

export default ConsumerHeader