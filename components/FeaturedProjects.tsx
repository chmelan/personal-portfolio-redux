import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import etchImage from "../resources/nick-chmela-software-developer-hiking.jpg";
import { featuredProjects } from "../resources/projects.js";

export default function FeaturedProjects(props) {
  return (
    <div id={props.id} className="flex items-center py-28">
      {/* Content */}
      <div className="max-w-screen-xl mx-auto w-full px-6 display flex flex-col items-center gap-8">
        <div className="max-w-2xl lg:text-center flex flex-col gap-6">
          <h2 className="text-2xl text-neutral-500 font-bold  text-gradient">
            FEATURED PROJECTS
          </h2>
          <p className=" text-6xl font-bold text-neutral-900 ">
            Check out my favorite work below!
          </p>
        </div>

        {/* projects grid */}

        <ul className="grid lg:grid-cols-12 gap-4 grid-flow-row grid-rows-2">
          <li className="col-span-3 row-span-2">
            <img
              className="rounded-xl w-full h-full object-cover "
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
          <li className="col-span-6 row-span-2">
            <img
              className="rounded-xl  w-full h-full object-cover"
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
          <li className="col-span-3 row-span-1">
            <img
              className="rounded-xl  w-full h-full object-cover"
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
          <li className="col-span-3 row-span-1">
            <img
              className="rounded-xl  w-full h-full object-cover"
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
        </ul>

        {/* featured projects */}
        <ul className="grid gap-4 ">
          {featuredProjects.map((featuredProject, i) => {
            return (
              <ProjectCard
                key={featuredProject.title}
                project={featuredProject}
                reversed={i % 2 === 0}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
