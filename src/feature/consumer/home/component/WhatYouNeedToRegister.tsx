import SignupButton from "../../shared/component/signupButton"
import ServiceInfoSection, { type ServiceInfoItem } from "./ServiceInfoSection"

const registrationRequirements: ServiceInfoItem[] = [
  {
    title: "Name",
    description: "This will be displayed to the courier.",
  },
  {
    title: "Phone number",
    description:
      "This helps verify your identity. Couriers may also use it to contact you, so register a number you can answer during delivery.",
  },
  {
    title: "Pickup address",
    description: "The courier will pick up the item from this address.",
  },
  {
    title: "Destination address",
    description: "The courier will deliver the item to this address.",
  },
]

function WhatYouNeedToRegister() {
  return (
    <ServiceInfoSection
      title="What You Need to Register"
      items={registrationRequirements}
      className="mx-1 mt-10 rounded-3xl bg-gradient-to-b from-yellow-600 to-yellow-900 p-12 text-white sm:mx-7"
    />
  )
}

export default WhatYouNeedToRegister