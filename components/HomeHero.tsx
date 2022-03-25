import portrait from "../resources/nick-chmela-software-developer-family-portrait.jpg";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import { FaEye } from "react-icons/fa";

export default function HomeHero() {
  return (
    <div className=" h-screen flex items-center ">
      {/* Content */}
      <div className="max-w-screen-xl mx-auto w-full  grid md:grid-cols-2 p-6">
        <div className="flex flex-col gap-6 justify-center items-start">
          <h1 className="  text-7xl font-bold text-neutral-900 ">
            I’m a curious{" "}
            <span className="text-gradient-no-hover">full stack developer</span>{" "}
            <br /> who can’t stop tinkering.
          </h1>
          <p className="text-2xl text-neutral-600 ">
            I build full stack applications with React, Tailwind CSS, and Node
            JS.
          </p>
          <div className="flex gap-4">
            <Button content="View projects" href="#projects" />
            <ButtonSecondary content="More about me" href="#about" />
          </div>
        </div>
        <div className="p-6 flex justify-center">
          <FaEye size="32em" className="text-neutral-900" />
        </div>
      </div>
    </div>
  );
}
