import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { IoColorPalette } from 'react-icons/io5'

type HeaderProps = {
  setRandomHue: () => void
}

const navigation = [
  // { name: 'About', href: '/about' },
  // { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/Nick Chmela Resume.docx', external: true },
  { name: 'Writing', href: '/posts' },
  { name: 'Contact', href: '/contact' },
]

export default function TopNav({ setRandomHue }: HeaderProps) {
  return (
    <div className="absolute 	w-full bg-transparent	">
      <div className="relative pt-6 pb-16 sm:pb-24 ">
        <Popover>
          <nav
            className="relative mx-auto flex w-full max-w-screen-xl items-center justify-between  px-6 sm:px-6 "
            aria-label="Global"
          >
            <div className=" flex flex-1 items-end ">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link href="/">
                  <a className="  text-2xl  font-semibold text-neutral-700 outline-offset-4">
                    Nick Chmela
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className=" focus-ring-inset inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:bg-neutral-600 ">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 ">
                {navigation.map((link) =>
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className=" text-md font-sans text-neutral-700 hover:text-neutral-600 outline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link key={link.name} href={link.href}>
                      <a className=" text-md font-sans text-neutral-700  hover:text-neutral-600 outline-offset-4">
                        {link.name}
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="hidden md:flex  justify-center space-x-6">
              <button
                title="Update color palette"
                aria-label="Update color palette"
                onClick={() => setRandomHue()}
                className="outline-offset-4"
              >
                <IoColorPalette className=" transition-colors	 inline-flex h-8 w-8 items-center fill-neutral-700 hover:fill-neutral-500 " />
              </button>

              <a
                href="https://www.linkedin.com/in/nick-chmela/"
                className="transition-colors inline-flex items-center text-neutral-700 hover:text-neutral-500 outline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Linked In</span>
                <FaLinkedinIn className="h-8 w-8" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/chmelan/"
                className="transition-colors inline-flex  items-center text-neutral-700 hover:text-neutral-500 outline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-8 w-8" aria-hidden="true" />
              </a>
            </div>
          </nav>

          {/* MOBILE HEADER ---------------------------------------------------------------------------------------------------------------------------------*/}

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="-translate-y-full"
            enterTo="translate-x-0"
            leave="duration-100 ease-in"
            leaveFrom=" translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Popover.Panel
              focus
              className="origin-top-center absolute inset-x-0 top-0 z-10 transform transition md:hidden"
            >
              <div className="overflow-hidden  bg-white pt-1 shadow-md ">
                <div className="flex items-center justify-between px-6 pt-4">
                  <div>
                    <Link href="/">
                      <a className="  text-2xl  font-semibold text-neutral-700">
                        Nick Chmela
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className=" focus-ring-inset inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-white ">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1 p-4 ">
                  {navigation.map((link) =>
                    link.external ? (
                      <Popover.Button>
                        <a
                          key={link.name}
                          href={link.href}
                          className="block  px-6 py-2 text-xl font-medium text-neutral-700 hover:bg-gray-100 hover:text-neutral-600 focus:bg-neutral-100"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.name}
                        </a>
                      </Popover.Button>
                    ) : (
                      <Popover.Button>
                        <Link key={link.name} href={link.href}>
                          <a className="block  px-6 py-2 text-xl  font-medium text-neutral-700 hover:bg-gray-100 hover:text-neutral-600">
                            {link.name}
                          </a>
                        </Link>
                      </Popover.Button>
                    )
                  )}
                  <div className="px-6 flex justify-end items-center space-x-6  pt-6 pb-2 border-t-neutral-200 border-t-[1px] w-full">
                    <Popover.Button>
                      <IoColorPalette
                        title="Update color palette"
                        aria-label="Update color palette"
                        onClick={() => setRandomHue()}
                        className="transition-colors  h-8 w-8  fill-neutral-600 hover:fill-neutral-500"
                      />
                    </Popover.Button>
                    <a
                      href="https://www.linkedin.com/in/nick-chmela/"
                      className="transition-colors  text-neutral-600 hover:text-neutral-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Linked In</span>
                      <FaLinkedinIn className="h-8 w-8" aria-hidden="true" />
                    </a>
                    <a
                      href="https://github.com/chmelan/"
                      className="transition-colors  text-neutral-600 hover:text-neutral-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">GitHub</span>
                      <FaGithub className="h-8 w-8" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}
