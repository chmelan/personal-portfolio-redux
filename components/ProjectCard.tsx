import { FaGithub } from "react-icons/fa";
import ButtonSecondary from "./ButtonSecondary";

export default function ProjectCard(props) {
  return (
    <li className="grid md:grid-cols-3 items-center">
      <img
        src={props.project.imageURL}
        alt={props.project.imageAlt}
        className={
          props.reversed
            ? "object-cover rounded-xl aspect-video col-span-2 shadow md:col-start-2"
            : "object-cover rounded-xl aspect-video col-span-2 shadow "
        }
      />

      <div
        className={
          props.reversed
            ? "p-6 flex flex-col gap-4 md:row-start-1 "
            : "p-6 flex flex-col gap-4 "
        }
      >
        <h3 className="text-3xl text-neutral-900 font-bold">
          {props.project.title}
        </h3>
        <p>
          {props.project.techStack.map((tech, i, techStack) => {
            return (
              <span key={tech} className="text-neutral-400 font-bold">
                {tech + " "}
                {techStack.length - 1 === i ? null : (
                  <span className="text-neutral-400">• </span>
                )}
              </span>
            );
          })}
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
            gradient
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
              className="fill-neutral-500 h-9 w-9 p-1"
            />
          </a>
        </div>
      </div>
    </li>
  );
}
