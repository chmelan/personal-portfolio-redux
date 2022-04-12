import {
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaElementor,
  FaNpm,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDesktop,
  FaCodeBranch,
  FaLinux,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiEslint,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import Skill from './Skill'

const frontEndSkills = [
  {
    name: 'React',
    color: 'fill-[#7fd8f8]',
    Icon: FaReact,
  },
  {
    name: 'HTML',
    color: 'fill-[#f75421]',
    Icon: FaHtml5,
  },
  {
    name: 'CSS',
    color: 'fill-[#2862e9]',
    Icon: FaCss3Alt,
  },
  {
    name: 'TypeScript',
    color: 'fill-[#3178c6]',
    Icon: SiTypescript,
  },
  {
    name: 'TailwindCSS',
    color: 'fill-[#15b8c5]',
    Icon: SiTailwindcss,
  },

  {
    name: 'Elementor',
    color: 'fill-[#cf315f]',
    Icon: FaElementor,
  },
]

const backEndSkills = [
  {
    name: 'Node JS',
    color: 'fill-[#679e63]',
    Icon: FaNodeJs,
  },
  {
    name: 'Express',
    color: 'fill-[#ffffff]',
    Icon: SiExpress,
  },
  {
    name: 'Python',
    color: 'fill-[#3276ae]',
    Icon: FaPython,
  },
  {
    name: 'Mongo DB',
    color: 'fill-[#569134]',
    Icon: SiMongodb,
  },
]

const otherSkills = [
  {
    name: 'NPM',
    color: 'fill-[#b80303]',
    Icon: FaNpm,
  },
  {
    name: 'Linux & Bash',
    color: 'fill-[#ffffff]',
    Icon: FaLinux,
  },
  {
    name: 'Git & Github',
    color: 'fill-[#ffffff]',
    Icon: FaGithub,
  },
  {
    name: 'ESLint',
    color: 'fill-[#482fbd]',
    Icon: SiEslint,
  },
]

export default function Skills() {
  return (
    <div className="display mx-auto flex w-full max-w-screen-xl flex-col items-center gap-16 px-6 pb-28">
      {/* Content */}
      <div className="flex max-w-2xl flex-col gap-6 lg:text-center">
        <h2 className="text-gradient text-xl font-bold md:text-2xl  ">
          MY SKILLS
        </h2>
        <p className=" text-4xl font-bold text-neutral-900 md:text-6xl ">
          I&apos;m always learning something new!
        </p>
      </div>

      <ul className="grid gap-8 pl-[4px] md:grid-cols-2 lg:grid-cols-3">
        <li className="gradient-background rounded-lg outline-offset-4  ">
          <div className=" flex h-full w-full -translate-x-1 -translate-y-1 flex-col gap-4 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white ">
            <div className="flex items-end gap-4 border-b-2 border-neutral-700 pb-2">
              <FaDesktop className="gradient-background h-12 w-12 rounded-xl fill-white p-2 md:h-20 md:w-20" />
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Front end skills
              </h3>
            </div>
            <p className="  text-left font-normal text-neutral-400 ">
              Accessibility, Design, Copywriting, DOM Manipulation
            </p>
            <ul className="grid grid-cols-2  gap-2 ">
              {frontEndSkills.map((skill) => {
                return (
                  <Skill
                    key={skill.name}
                    name={skill.name}
                    Icon={skill.Icon}
                    color={skill.color}
                  />
                )
              })}
            </ul>
          </div>
        </li>

        <li className="gradient-background rounded-lg outline-offset-4  ">
          <div className=" flex h-full w-full -translate-x-1 -translate-y-1 flex-col gap-4 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white ">
            <div className="flex items-end gap-4 border-b-2 border-neutral-700 pb-2">
              <FaDatabase className="gradient-background h-12 w-12 rounded-xl fill-white p-2 md:h-20 md:w-20" />
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Back end skills
              </h3>
            </div>
            <p className=" text-left font-normal text-neutral-400 ">
              User Authentication, DB Architecture, REST API, CRUD
            </p>
            <ul className="grid grid-cols-2  gap-2 ">
              {backEndSkills.map((skill) => {
                return (
                  <Skill
                    key={skill.name}
                    name={skill.name}
                    Icon={skill.Icon}
                    color={skill.color}
                  />
                )
              })}
            </ul>
          </div>
        </li>
        <li className="gradient-background rounded-lg outline-offset-4  ">
          <div className=" flex h-full w-full -translate-x-1 -translate-y-1 flex-col gap-4 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white ">
            <div className="flex items-end gap-4 border-b-2 border-neutral-700 pb-2">
              <FaCodeBranch className="gradient-background h-12 w-12 rounded-xl fill-white p-2 md:h-20 md:w-20" />
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Other skills
              </h3>
            </div>
            <p className=" text-left font-normal text-neutral-400 ">
              MVC, Communication, Problem Solving, ES6 Modules
            </p>
            <ul className="grid grid-cols-2  gap-2 ">
              {otherSkills.map((skill) => {
                return (
                  <Skill
                    key={skill.name}
                    name={skill.name}
                    Icon={skill.Icon}
                    color={skill.color}
                  />
                )
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}
