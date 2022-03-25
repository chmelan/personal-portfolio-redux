import FooterCTA from "../components/FooterCTA";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../resources/projects.js";
export default function Projects() {
  return (
    <div className="py-48">
      <div className="max-w-screen-xl mx-auto w-full px-6">
        <h1 className=" font-serif text-5xl font-semibold text-neutral-900 mb-4">
          My projects
        </h1>
        <hr className="border-neutral-500 border-dashed pb-10" />
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          {featuredProjects.map((featuredProject, i) => {
            return (
              <ProjectCard
                key={featuredProject.title}
                project={featuredProject}
              />
            );
          })}
        </ul>
      </div>
      <FooterCTA />
    </div>
  );
}
