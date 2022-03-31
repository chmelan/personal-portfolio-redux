import { FaGithub, FaArrowRight } from 'react-icons/fa'

import Image from 'next/image'
interface ProjectTypes {
  imageURL: string
  imageAlt: string
  title: string
  description: string
  techStack: string[]
  projectLink: string
  githubLink: string
}

interface ProjectCardProps {
  project: ProjectTypes
  reversed?: boolean
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <li className="grid grid-cols-3 items-center gap-8 py-8">
      <div className="relative col-span-2 h-full">
        <Image
          src={props.project.imageURL}
          alt="some pic"
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div
        className={
          props.reversed
            ? 'flex flex-col gap-4 py-32 pr-8 md:row-start-1 '
            : 'flex flex-col gap-4  py-32 pl-8'
        }
      >
        <h3 className="text-3xl font-bold text-neutral-900">
          {props.project.title}
        </h3>
        <p>
          {props.project.techStack.map(
            (tech: string, i: number, techStack: string[]) => {
              return (
                <span key={tech} className="font-bold text-neutral-400">
                  {tech + ' '}
                  {techStack.length - 1 === i ? null : (
                    <span className="text-neutral-400">• </span>
                  )}
                </span>
              )
            }
          )}
        </p>

        <p className="text-base  text-neutral-400  ">
          {props.project.description}
        </p>

        <div className="flex justify-between gap-4">
          <a
            className=" text-gradient group flex items-center justify-center gap-2 py-4  text-lg font-bold "
            href={props.project.projectLink}
            target="_blank"
            rel="noreferrer"
          >
            View live demo
            <span className=" transition group-hover:translate-x-1 group-active:translate-x-5">
              <FaArrowRight />
            </span>
          </a>
          <a
            href={props.project.githubLink}
            target="_blank"
            rel="noreferrer"
            className=" flex items-center font-bold "
            aria-label="View source code on GitHub"
          >
            <FaGithub
              title="View source code on GitHub"
              className="h-9 w-9 fill-neutral-500 p-1"
            />
          </a>
        </div>
      </div>
    </li>
  )
}
