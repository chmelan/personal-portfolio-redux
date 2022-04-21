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
    <li className="grid  gap-8 md:grid-cols-3 md:items-center md:py-8">
      <div className="gradient-background-opposite relative aspect-square rounded-xl md:col-span-2 md:aspect-auto md:h-full">
        <Image
          src={props.project.imageURL}
          alt="some pic"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className={
          props.reversed
            ? 'flex flex-col gap-4 md:row-start-1 md:py-32 md:pr-8 '
            : 'flex flex-col gap-4  py-32 md:py-32 md:pl-8'
        }
      >
        <h3 className=" text-2xl font-bold text-neutral-900 md:text-3xl">
          {props.project.title}
        </h3>
        <p>
          {props.project.techStack.map(
            (tech: string, i: number, techStack: string[]) => {
              return (
                <span key={tech} className="font-bold text-neutral-500">
                  {tech + ' '}
                  {techStack.length - 1 === i ? null : (
                    <span className="text-neutral-500">• </span>
                  )}
                </span>
              )
            }
          )}
        </p>

        <p className="text-base  text-neutral-500  ">
          {props.project.description}
        </p>

        <div className="flex justify-between gap-4">
          <a
            className="gradient-background mt-2 rounded-lg outline-offset-4 "
            href={props.project.projectLink}
            target="_blank"
            rel="noreferrer"
          >
            <span className="  block -translate-x-1 -translate-y-1 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white transition-transform  hover:-translate-x-1.5 hover:-translate-y-1.5 active:-translate-x-0 active:-translate-y-0">
              View live demo
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
              className="h-14 w-14 fill-neutral-500 p-1 md:h-9 md:w-9"
            />
          </a>
        </div>
      </div>
    </li>
  )
}
