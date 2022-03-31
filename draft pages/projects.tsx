import FooterCTA from '../components/FooterCTA'
import ProjectCardSmall from '../components/ProjectCardSmall'
import { featuredProjects } from '../lib/projects.js'

export default function Projects() {
  return (
    <div className="py-48">
      <div className="mx-auto w-full max-w-screen-xl px-6">
        <h1 className="mb-16 text-5xl font-bold text-neutral-900">
          My projects
        </h1>
        <ul className="grid gap-8  md:grid-cols-2 lg:grid-cols-3 ">
          {featuredProjects.map((featuredProject, i) => {
            return (
              <ProjectCardSmall
                key={featuredProject.title}
                project={featuredProject}
              />
            )
          })}
        </ul>
      </div>
      {/* <FooterCTA /> */}
    </div>
  )
}
