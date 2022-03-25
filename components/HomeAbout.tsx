import etchImage from "../resources/nick-chmela-software-developer-hiking.jpg";

export default function HomeAbout() {
  return (
    <div className=" flex items-center py-28" id="about">
      {/* Content */}
      <div className="max-w-screen-xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-12 items-end">
          <div className=" flex flex-col gap-6 col-span-7 ">
            <h2 className="text-2xl text-neutral-500 font-bold  text-gradient">
              ABOUT ME
            </h2>
            <p className=" text-6xl font-bold text-neutral-900 ">
              I'm a roadie turned full-stack developer.
            </p>
          </div>
          <div className="col-span-5">
            <p className="text-2xl text-neutral-500 ">
              In my free time, you can find me
              <span className="text-neutral-700 "> climbing cool rocks⛰️</span>,
              playing with
              <span className="text-neutral-700"> toy space ships🚀</span>, or
              hanging out with
              <span className="text-neutral-700  "> my dog🐕</span>. I'm at my
              happiest when I’m{" "}
              <a
                href="https://www.youtube.com/channel/UCEbflS8E03LQdxMEW0nvx1g"
                target="__blank"
                rel="noreferrer"
                className=" underline hover:text-gradient-hover hover:underline "
              >
                empowering others to learn.
              </a>
            </p>
          </div>
        </div>

        <ul className="grid lg:grid-cols-12 gap-4 grid-flow-row grid-rows-2 my-16 ">
          <li className="col-span-7 row-span-2">
            <img
              className="rounded-xl w-full h-full object-cover "
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
          <li className="col-span-3 row-span-1">
            <img
              className="rounded-xl  w-full h-full object-cover"
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
          <li className="col-span-2 row-span-1">
            <img
              className="rounded-xl  w-full h-full object-cover"
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>{" "}
          <li className="col-span-5 row-span-1">
            <img
              className="rounded-xl  w-full h-full object-cover"
              src={etchImage}
              alt="etch a sketch project screenshot"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
