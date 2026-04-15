import SignupButton from "../auth/component/courierSignupButton"

const requiredFields = [
  {
    title: "Name",
    details: ["This name will be displayed to customers."],
  },
  {
    title: "Phone number",
    details: [
      "Used to verify your identity. Register a number you can answer while on duty.",
    ],
  },
  {
    title: "Vehicle type",
    details: [
      "Customers may choose a courier depending on the required vehicle type.",
    ],
  },
]

function RequiredInfo() {
  return (
    <div className="mt-10 rounded-3xl bg-gray-800 p-10">
      <h2 className="mb-10 text-center text-4xl">
        Required Fields for Verification
      </h2>

      <div className="flex flex-col items-center justify-center">
        <ul className="list-disc pl-5 text-lg font-bold">
          {requiredFields.map((field, index) => (
            <li key={index} className="mt-10">
              {field.title}

              {field.details && (
                <ul className="mt-2">
                  {field.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="font-normal text-gray-400"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <SignupButton />
      </div>
    </div>
  )
}

export default RequiredInfo