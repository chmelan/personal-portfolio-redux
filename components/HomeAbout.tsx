import Image from 'next/image'

export default function HomeAbout() {
  return (
    <div className=" flex items-center py-28" id="about">
      {/* Content */}
      <div className="mx-auto w-full max-w-screen-xl px-6">
        <div className="grid items-end md:grid-cols-12">
          <div className=" col-span-7 flex flex-col gap-6 ">
            <h2 className="text-gradient text-2xl font-bold  text-neutral-500">
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

        <ul className="my-16 inline-grid h-96 w-full grid-flow-row grid-rows-2 gap-4 lg:h-[42em] lg:grid-cols-12">
          <li className="relative col-span-7 row-span-2">
            <Image
              className="h-full w-full rounded-xl object-cover "
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
          <li className="relative col-span-3 row-span-1">
            <Image
              className="h-full  w-full rounded-xl object-cover"
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
          <li className="relative col-span-2 row-span-1">
            <Image
              className="h-full  w-full rounded-xl object-cover"
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>{' '}
          <li className="relative col-span-5 row-span-1">
            <Image
              className="h-full  w-full rounded-xl object-cover"
              src="/images/nick-chmela-software-developer-hiking.jpg"
              alt="Nick hiking in the wintery woods of Maine"
              layout="fill"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
