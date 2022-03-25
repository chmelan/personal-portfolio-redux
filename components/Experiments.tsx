import ExperimentCard from "./ExperimentCard";

export default function Experiments() {
  return (
    <div className="flex items-center py-28">
      {/* Content */}
      <div className="max-w-screen-xl mx-auto w-full px-6">
        <h2 className=" font-serif text-4xl font-semibold text-white ">
          Current Experiments
        </h2>
        <p className="text-xl text-slate-400 font-semibold mb-4">
          Check out some ideas I'm currently exploring.
        </p>
        <hr className="border-slate-600 border-dashed pb-10" />
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          <ExperimentCard />
          <ExperimentCard />
          <ExperimentCard />
        </ul>
      </div>
    </div>
  );
}
