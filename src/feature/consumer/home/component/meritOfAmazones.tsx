import ServiceInfoSection, { type ServiceInfoItem } from "./ServiceInfoSection"
import SignupButton from "../../shared/component/signupButton"

const merits: ServiceInfoItem[] = [
  {
    title: "Pricing",
    description:
      "We don't take commissions as a platform. You decide the pricing.",
  },
  {
    title: "Flexibility",
    description: "You can use it for taxis, mailing, and quick commerce.",
  },
  {
    title: "Simplicity",
    description:
      "No contracts or complex procedures. Start deliveries in the browser right away.",
  },
  {
    title: "Freedom",
    description:
      "Minimal platform control. Most decisions are handled directly between couriers and customers.",
  },
]

function MeritsOfAmazones() {
  return (
    <ServiceInfoSection
      title="Merits of Amazones Delivery"
      items={merits}
      className="mt-10 rounded-3xl bg-gradient-to-t from-amber-900 to-orange-700 p-12 text-white"
    />
  )
}

export default MeritsOfAmazones