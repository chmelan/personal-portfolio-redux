import { FaGithub } from 'react-icons/fa'
import ButtonSecondary from './ButtonSecondary'
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

interface ProjectCardSmallProps {
  project: ProjectTypes
  reversed?: boolean
}

export default function ProjectCardSmall(props: ProjectCardSmallProps) {
  return (
    <li className="flex flex-col items-center gap-8">
      <div className="relative  h-64 w-full">
        <Image
          layout="fill"
          src={props.project.imageURL}
          alt="some pic"
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className={'flex flex-col gap-4   '}>
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
          <ButtonSecondary
            target="_blank"
            rel="noreferrer"
            href={props.project.projectLink}
            content="View live demo"
            isGradient
          />
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
