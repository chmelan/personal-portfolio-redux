import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import { FaEye } from 'react-icons/fa'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <div className=" flex h-[80vh] items-start ">
      {/* Content */}
      <div className="mx-auto grid w-full  max-w-screen-xl p-6 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="  text-7xl font-bold text-neutral-900 ">
            I’m a curious{' '}
            <span className="text-gradient-no-hover">full stack developer</span>{' '}
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
        <div className="relative m-auto flex aspect-square  w-2/3 items-center justify-center p-6">
          <Image
            layout="fill"
            className=" rounded-full "
            src="/images/main_portrait.jpg"
            alt="nick smiling"
          />
        </div>
      </div>
    </div>
  )
}
