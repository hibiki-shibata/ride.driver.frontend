const merits = [
  {
    title: "Pricing",
    description: "We don't take commissions as a platform. You decide the pricing."
  },
  {
    title: "Flexibility",
    description: "You can use it for taxis, mailing, and quick commerce."
  },
  {
    title: "Simplicity",
    description: "No contracts or complex procedures. Start deliveries in the browser right away."
  },
  {
    title: "Freedom",
    description: "Minimal platform control. Most decisions are handled directly between couriers and customers."
  }
];

function MeritsOfAmazones() {
  return (
    <section className="mt-10 rounded-3xl bg-gradient-to-t from-amber-900 to-orange-700 p-12">
      <h2 className="mb-5 text-center text-3xl font-bold">
        Merits of Amazones Delivery
      </h2>

      <ul className="list-disc list-inside space-y-6 text-lg">
        {merits.map((merit) => (
          <li key={merit.title}>
            <span className="font-bold">{merit.title}</span>
            <p className="mt-1 font-normal text-gray-300">
              {merit.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MeritsOfAmazones;