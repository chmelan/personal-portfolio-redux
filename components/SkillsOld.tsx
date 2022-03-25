import { LightningBoltIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaElementor,
  FaNpm,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaLinux,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiEslint,
  SiMongodb,
  SiExpress,
  SiNodered,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const confidentSkills = [
  {
    name: "React",
    color: "fill-[#7fd8f8]",
    icon: FaReact,
  },
  {
    name: "Tailwind CSS",
    color: "fill-[#15b8c5]",
    icon: SiTailwindcss,
  },
  {
    name: "HTML",
    color: "fill-[#f75421]",
    icon: FaHtml5,
  },
  {
    name: "Git & Github",
    color: "fill-[#000000]",
    icon: FaGithub,
  },
  {
    name: "JavaScript",
    color: "fill-[#e5ca55]",
    icon: DiJavascript1,
  },
  {
    name: "Elementor",
    color: "fill-[#cf315f]",
    icon: FaElementor,
  },
];

const comfortableSkills = [
  {
    name: "NPM",
    color: "fill-[#b80303]",
    icon: FaNpm,
  },
  {
    name: "Node JS",
    color: "fill-[#679e63]",
    icon: FaNodeJs,
  },
  {
    name: "ESLint",
    color: "fill-[#482fbd]",
    icon: SiEslint,
  },
  {
    name: "Python",
    color: "fill-[#3276ae]",
    icon: FaPython,
  },
  {
    name: "Mongo DB",
    color: "fill-[#569134]",
    icon: SiMongodb,
  },
  {
    name: "Linux & Bash",
    color: "fill-[#000000]",
    icon: FaLinux,
  },
];

const exploringSkills = [
  {
    name: "Express",
    color: "fill-[#000000]",
    icon: SiExpress,
  },
  {
    name: "Node-RED",
    color: "fill-[#8b0000]",
    icon: SiNodered,
  },
  {
    name: "AWS",
    color: "fill-[#f79327]",
    icon: FaAws,
  },
  {
    name: "TypeScript",
    color: "fill-[#3178c6]",
    icon: SiTypescript,
  },
  {
    name: "Figma",
    color: "fill-[#0ac97f]",
    icon: FaFigma,
  },
  {
    name: "Docker",
    color: "fill-[#2391e6]",
    icon: SiDocker,
  },
];
export default function Example() {
  return (
    <div className="my-48 max-w-screen-xl mx-auto px-8">
      <h2 className="font-nunito text-5xl font-semibold">I am -</h2>
      <h3 className="font-nunito text-4xl font-bold mt-8 mb-4">
        confident with
      </h3>
      <div className="inline-grid gap-4 grid-cols-3 ">
        {confidentSkills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex border-zinc-900 border-2 items-center bg-zinc-900 w-72 h-"
            >
              <IconContext.Provider
                value={{
                  size: "2em",
                  className: `bg-white ${skill.color} h-10 w-10 p-1 `,
                }}
              >
                <skill.icon />
              </IconContext.Provider>

              <span className="text-white font-nunito-sans text-2xl  px-4 py-1">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
      <h3 className="font-nunito text-4xl font-bold mt-8 mb-4">
        comfortable with
      </h3>
      <div className="inline-grid gap-4 grid-cols-3 ">
        {comfortableSkills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex border-zinc-900 border-2 items-center bg-zinc-900 w-72 h-"
            >
              <IconContext.Provider
                value={{
                  size: "2em",
                  className: `bg-white ${skill.color} h-10 w-10 p-1 `,
                }}
              >
                <skill.icon />
              </IconContext.Provider>

              <span className="text-white font-nunito-sans text-2xl  px-4 py-1">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
      <h3 className="font-nunito text-4xl font-bold mt-8 mb-4">
        currently exploring
      </h3>
      <div className="inline-grid gap-4 grid-cols-3 ">
        {exploringSkills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex border-zinc-900 border-2 items-center bg-zinc-900 w-72 h-"
            >
              <IconContext.Provider
                value={{
                  size: "2em",
                  className: `bg-white ${skill.color} h-10 w-10 p-1 `,
                }}
              >
                <skill.icon />
              </IconContext.Provider>

              <span className="text-white font-nunito-sans text-2xl  px-4 py-1">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
