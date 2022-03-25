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
          <h2 className="text-gradient text-2xl font-bold  text-neutral-500">
            FEATURED PROJECTS
          </h2>
          <p className=" text-6xl font-bold text-neutral-900 ">
            Check out my favorite work below!
          </p>
        </div>

        {/* projects grid */}

        <ul className=" grid h-[40em] w-full grid-flow-row grid-rows-2 gap-4 lg:grid-cols-12">
          <li className="relative col-span-3 row-span-2 h-full">
            <Image
              className="rounded-xl "
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li className="relative col-span-6 row-span-2">
            <Image
              className="h-full w-full rounded-xl object-cover "
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
          <li className="relative col-span-3 row-span-1">
            <Image
              className="h-full w-full rounded-xl object-cover "
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
          <li className="relative col-span-3 row-span-1">
            <Image
              className="h-full w-full rounded-xl object-cover "
              src="/images/nick-chmela-software-developer-hiking.jpg"
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
