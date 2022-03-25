import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import weatherAppImage from "../resources/weather_app_pro_1997_v1_3.png";
export default function ExperimentCard() {
  return (
    <li className="rounded-lg border border-slate-700 bg-gradient-to-tr from-slate-800/50 overflow-hidden">
      <img
        src={weatherAppImage}
        alt="app screenshot"
        className="object-cover "
      />

      <div className="p-6">
        <h3 className="text-2xl text-white font-bold">Project Name</h3>
        <p className="text-slate-500 font-bold">
          REACT • REACT-ROUTER • WEATHER UNDERGROUND API • TAILWIND CSS
        </p>
        <p className="text-base leading-5 text-slate-400 font-semibold pb-4">
          Id vel veri essent democritum. Est ei euismod equidem repudiare, cu
          pro utinam ocurreret.
        </p>
        <hr className="border-slate-600 pt-2 pb-2 " />
        <div className="flex items-center justify-between">
          <Link
            to="projects"
            className=" flex items-center text-gradient font-bold "
          >
            <span>VIEW LIVE DEMO ⮕</span>
          </Link>
          <Link
            to="projects"
            className=" flex items-center text-amber-500 font-bold "
            aria-label="View source code on GitHub"
          >
            <FaGithub
              title="View source code on GitHub"
              className="fill-slate-500 h-9 w-9 p-1"
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
