const steps = [
  { number: 1, label: "Apply" },
  { number: 2, label: "Install App" },
  { number: 3, label: "Go online!" },
];

const itemClass = "flex flex-col items-center justify-center px-7";
const circleClass =
  "m-5 flex h-35 w-35 items-center justify-center rounded-full bg-sky-600 text-5xl font-bold text-white";

function RegisterProcessCircle() {
  return (
    <div className="mt-4 mb-5 flex flex-col items-center justify-center sm:flex-row">
      {steps.map(({ number, label }) => (
        <div key={number} className={itemClass}>
          <div className={circleClass}>{number}</div>
          <p className="text-xl font-bold">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default RegisterProcessCircle;