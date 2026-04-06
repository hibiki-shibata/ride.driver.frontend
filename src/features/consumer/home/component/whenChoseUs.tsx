import SignupButton from "../../auth/component/signupButton";

const reasonsToChooseUs = [
  {
    title: "You want to control the delivery price",
    description: "You can negotiate directly with couriers."
  },
  {
    title: "You want to try a delivery service quickly and for free",
    description:
      "There are no contracts or complex procedures. You can start using it right in your browser."
  },
  {
    title: "You want to connect directly with couriers",
    description:
      "You can build your own direct delivery network with couriers."
  }
];

function WhenPeopleChooseUs() {
  return (
    <section className="mt-5 mr-1 ml-1 rounded-3xl bg-gradient-to-b from-teal-600 to-teal-800 p-12 font-bold sm:mr-7 sm:ml-7">
      <h2 className="mb-5 text-center text-3xl font-bold">
        When Do People Choose Us?
      </h2>

      <div className="flex flex-col items-center justify-center">
        <ul className="list-disc list-inside space-y-8 text-lg">
          {reasonsToChooseUs.map((reason) => (
            <li key={reason.title}>
              <span>{reason.title}</span>
              <p className="mt-1 font-normal text-gray-300">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <SignupButton />
        </div>
      </div>
    </section>
  );
}

export default WhenPeopleChooseUs;