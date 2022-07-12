import Image from 'next/image'

export default function HomeAbout() {
  return (
    <div className=" flex items-center py-28" id="about">
      {/* Content */}
      <div className="mx-auto w-full max-w-screen-xl px-6">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className=" col-span-7 flex flex-col gap-6 ">
            <h2 className="text-gradient text-xl font-bold md:text-2xl  ">
              ABOUT ME
            </h2>
            <p className=" text-4xl font-bold text-neutral-900 md:text-6xl ">
              I'm a roadie turned full-stack developer.
            </p>
          </div>
          <div className="col-span-5">
            <p className=" text-xl text-neutral-700 md:text-2xl ">
              In my free time, you can find me
              <span className="text-neutral-800 "> climbing cool rocks⛰️</span>,
              playing with
              <span className="text-neutral-800"> toy space ships🚀</span>, or
              hanging out with
              <span className="text-neutral-800  "> my dog🐕</span>. I'm at my
              happiest when I’m{' '}
              <a
                href="https://www.youtube.com/channel/UCEbflS8E03LQdxMEW0nvx1g"
                target="__blank"
                rel="noreferrer"
                className=" hover:text-gradient-hover underline hover:underline "
              >
                empowering others to learn.
              </a>
            </p>
          </div>
        </div>

        <ul className="my-16 inline-grid h-[48em] w-full grid-flow-row grid-cols-2 gap-4 md:h-96 md:grid-rows-2 lg:h-[42em] lg:grid-cols-12">
          <li className="relative col-span-2 row-span-2 md:col-span-7 md:row-span-2">
            <Image
              className="h-full w-full rounded-xl object-cover "
              src="/images/IMG-20191010-WA0002.jpg"
              alt="backstage at a Sting concert"
              layout="fill"
            />
          </li>
          <li className="relative  md:col-span-3 md:row-span-1">
            <Image
              className="h-full  w-full rounded-xl object-cover"
              src="/images/nick-chmela-000.jpg"
              alt="plastic space ships on a wargaming mat"
              layout="fill"
            />
          </li>
          <li className="relative md:col-span-2 md:row-span-1">
            <Image
              className="h-full  w-full rounded-xl object-cover"
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>{' '}
          <li className="relative col-span-2 row-span-2 md:col-span-5 md:row-span-1">
            <Image
              className="col-span-2 h-full w-full rounded-xl object-cover"
              src="/images/nick-chmela-002.jpg"
              alt="Nick's cheagle(chihuahua beagle), Dill"
              layout="fill"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
