import ProjectCard from './ProjectCard'
import etchImage from '../resources/nick-chmela-software-developer-hiking.jpg'
import { featuredProjects } from '../lib/projects.js'
import Image from 'next/image'

interface FeaturedProjectsProps {
  id?: string
}

export default function FeaturedProjects(props: FeaturedProjectsProps) {
  return (
    <div id={props.id} className="flex items-center py-28">
      {/* Content */}
      <div className="display mx-auto flex w-full max-w-screen-xl flex-col items-center gap-8 px-6">
        <div className="flex max-w-2xl flex-col gap-6 lg:text-center">
          <h2 className="text-gradient text-xl font-bold md:text-2xl  ">
            FEATURED PROJECTS
          </h2>
          <p className=" text-4xl font-bold text-neutral-900 md:text-6xl ">
            Check out my favorite work below!
          </p>
        </div>

        {/* projects grid */}

        <ul className=" hidden h-[40em] w-full gap-4 md:grid   lg:grid-cols-12">
          <li className="gradient-background-opposite relative h-full rounded-xl md:col-span-3 md:row-span-2">
            <Image
              src="/images/apm-transparent.png "
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li className="gradient-background-opposite relative rounded-xl md:col-span-6 md:row-span-2">
            <Image
              src="/images/ns-transparent.png"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
          <li className="gradient-background-opposite relative rounded-xl md:col-span-3 md:row-span-1">
            <Image
              src="/images/cc-transparent.png"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
          <li className="gradient-background-opposite relative rounded-xl md:col-span-3 md:row-span-1">
            <Image
              src="/images/mn-transparent.png"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
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
            )
          })}
        </ul>
      </div>
    </div>
  )
}
