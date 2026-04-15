import SignupButton from "../../shared/component/signupButton"
import ServiceInfoSection, { type ServiceInfoItem } from "./ServiceInfoSection"

const reasonsToChooseUs: ServiceInfoItem[] = [
  {
    title: "You want to control the delivery price",
    description: "You can negotiate directly with couriers.",
  },
  {
    title: "You want to try a delivery service quickly and for free",
    description:
      "There are no contracts or complex procedures. You can start using it right in your browser.",
  },
  {
    title: "You want to connect directly with couriers",
    description: "You can build your own direct delivery network with couriers.",
  },
]

function WhenPeopleChooseUs() {
  return (
    <ServiceInfoSection
      title="When Do People Choose Us?"
      items={reasonsToChooseUs}
      className="mx-1 mt-5 rounded-3xl bg-gradient-to-b from-teal-600 to-teal-800 p-12 text-white sm:mx-7"
      action={<SignupButton />}
    />
  )
}

export default WhenPeopleChooseUs