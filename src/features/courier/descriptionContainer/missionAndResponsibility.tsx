import SignupButton from "../auth/component/courierSignupButton";

const responsibilities = [
  {
    title: "Flexible online time.",
    details: [
      "Go online whenever you want.",
      "Go offline whenever you want after completing an ongoing mission.",
    ],
  },
  {
    title: "Please be professional on duty.",
    details: [
      "Your safety and the customer's safety should be your top priority.",
      "Drive politely while still aiming for on-time delivery.",
      "Communicate smoothly and clearly.",
    ],
  },
  {
    title: "Report issues quickly.",
    details: [
      "Feel free to report operational or system issues.",
      "We always welcome your feedback about the service.",
    ],
  },
  {
    title: "Earn a little extra in your free time, then go grab a drink with it!! 🍻",
  },
];

function MissionAndResponsibility() {
  return (
    <div className="mt-10 rounded-3xl bg-gray-800 p-10">
      <h1 className="mb-10 text-center text-4xl">
        Missions and Responsibilities
      </h1>

      <div className="flex flex-col items-center justify-center">
        <ul className="list-disc text-lg font-bold">
          {responsibilities.map((item, index) => (
            <li key={index} className="mt-7">
              {item.title}

              {item.details && (
                <ul className="mt-1 text-base font-normal text-gray-400">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <SignupButton />
      </div>
    </div>
  );
}

export default MissionAndResponsibility;