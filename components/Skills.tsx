import {
  FaReact,
  FaDatabase,
  FaHtml5,
  FaElementor,
  FaNpm,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDesktop,
  FaCodeBranch,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiEslint,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const frontEndSkills = [
  {
    name: "React",
    color: "fill-[#7fd8f8]",
    Icon: FaReact,
  },
  {
    name: "Tailwind CSS",
    color: "fill-[#15b8c5]",
    Icon: SiTailwindcss,
  },
  {
    name: "HTML",
    color: "fill-[#f75421]",
    Icon: FaHtml5,
  },

  {
    name: "JavaScript",
    color: "fill-[#e5ca55]",
    Icon: DiJavascript1,
  },
  {
    name: "Elementor",
    color: "fill-[#cf315f]",
    Icon: FaElementor,
  },
  // {
  //   name: "TypeScript",
  //   color: "fill-[#3178c6]",
  //   icon: SiTypescript,
  // },
];

const backEndSkills = [
  {
    name: "Node JS",
    color: "fill-[#679e63]",
    Icon: FaNodeJs,
  },
  {
    name: "Express",
    color: "fill-[#000000]",
    Icon: SiExpress,
  },
  {
    name: "Python",
    color: "fill-[#3276ae]",
    Icon: FaPython,
  },
  {
    name: "Mongo DB",
    color: "fill-[#569134]",
    Icon: SiMongodb,
  },
];

const otherSkills = [
  {
    name: "NPM",
    color: "fill-[#b80303]",
    Icon: FaNpm,
  },
  {
    name: "Linux & Bash",
    color: "fill-[#000000]",
    Icon: FaLinux,
  },
  {
    name: "ESLint",
    color: "fill-[#482fbd]",
    Icon: SiEslint,
  },
  {
    name: "Git & Github",
    color: "fill-[#000000]",
    Icon: FaGithub,
  },
];

const Skill = ({ skill }) => {
  return (
    <li className="flex items-center gap-4  p-1" key={skill.name}>
      <skill.Icon className="fill-neutral-500 w-6 h-6" />
      <h3 className=" text-lg text-neutral-600 font-semibold">{skill.name}</h3>
    </li>
  );
};

export default function Skills() {
  return (
    <div className="max-w-screen-xl mx-auto w-full px-6 display flex flex-col items-end gap-16">
      {/* Content */}
      <div className="max-w-2xl lg:text-right flex flex-col gap-6">
        <h2 className="text-2xl text-neutral-500 font-bold  text-gradient">
          MY SKILLS
        </h2>
        <p className=" text-6xl font-bold text-neutral-900 ">
          I&apos;m always learning something new!
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto w-full px-6">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          <li className="flex flex-col items-center gap-4">
            <FaDesktop className="fill-white w-20 h-20 gradient-background p-2 rounded-xl" />

            <h3 className="text-2xl text-neutral-900 font-bold">
              Front End Skills
            </h3>

            {/* <p className="text-base  text-neutral-400  ">
              At Sparrow, I helped over 150 entrepreneurs and small businesses
              launch accessible, performant, and SEO-friendly websites.
            </p> */}
            <ul className="flex flex-col gap-2 ">
              {frontEndSkills.map((skill) => {
                return <Skill skill={skill} />;
              })}
            </ul>
          </li>

          <li className="flex flex-col gap-4 items-center">
            <FaDatabase className="fill-white w-20 h-20 gradient-background p-2 rounded-xl " />

            <h3 className="text-2xl text-neutral-900 font-bold">
              Back End Skills
            </h3>
            {/* 
            <p className="text-base  text-neutral-400  ">
              I used React, MongoDB, and NodeJS to improve user experiences for
              the world’s largest peer-to-peer motorcycle rental company.
            </p> */}
            <ul className="flex flex-col gap-2 ">
              {backEndSkills.map((skill) => {
                return <Skill skill={skill} />;
              })}
            </ul>
          </li>

          <li className="flex flex-col gap-4 items-center">
            <FaCodeBranch className="fill-white w-20 h-20 gradient-background p-2 rounded-xl" />
            <h3 className="text-2xl text-neutral-900 font-bold">
              <a
                href="https://clairglobal.com/"
                target="_blank"
                rel="noreferrer"
              >
                Other skills
              </a>
            </h3>

            {/* <p className="text-base  text-neutral-400  ">
              At Clair Global, I worked with music tours including Sting, Bon
              Jovi, and Florence and the Machine to help bring reinforced audio
              to crowds of over 70,000 people at stadiums.
            </p> */}
            <ul className="flex flex-col gap-2 ">
              {otherSkills.map((skill) => {
                return <Skill skill={skill} />;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
