import SignupButton from "../../auth/component/signupButton"

const registrationRequirements = [
  {
    title: "Name",
    description: "This will be displayed to the courier."
  },
  {
    title: "Phone number",
    description:
      "This helps verify your identity. Couriers may also use it to contact you, so register a number you can answer during delivery."
  },
  {
    title: "Pickup address",
    description: "The courier will pick up the item from this address."
  },
  {
    title: "Destination address",
    description: "The courier will deliver the item to this address."
  }
]

function WhatYouNeedToRegister() {
  return (
    <section className="mt-10 mr-1 ml-1 rounded-3xl bg-gradient-to-b from-yellow-600 to-yellow-900 p-12 font-bold sm:mr-7 sm:ml-7">
      <h2 className="mb-5 text-center text-3xl font-bold">
        What You Need to Register
      </h2>

      <div className="flex flex-col items-center justify-center">
        <ul className="list-disc list-inside space-y-6 text-lg">
          {registrationRequirements.map((item) => (
            <li key={item.title}>
              <span>{item.title}</span>
              <p className="mt-1 font-normal text-gray-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <SignupButton />
        </div>
      </div>
    </section>
  )
}

export default WhatYouNeedToRegister