import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <div className=" flex min-h-[80vh] items-start ">
      {/* Content */}
      <div className="mx-auto grid w-full max-w-screen-xl  gap-16  p-6 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="  text-4xl font-bold text-neutral-900 md:text-7xl ">
            I’m a curious{' '}
            <span className="text-gradient-no-hover block md:inline">full stack developer</span>{' '}
            <br className="hidden md:inline" /> who can’t stop tinkering.
          </h1>
          <p className=" text-xl text-neutral-600 md:text-2xl ">
            I build full stack applications with React, Tailwind CSS, and Node
            JS.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button content="View projects" href="#projects" />
            <ButtonSecondary content="More about me" href="#about" />
          </div>
        </div>
        <div className="relative flex aspect-square items-center  justify-center p-6 md:m-auto md:w-2/3">
          <Image
            layout="fill"
            className=" rounded-full "
            src="/images/new_portrait.jpg"
            priority
            alt="nick smiling"
          />
        </div>
      </div>
    </div>
  )
}
