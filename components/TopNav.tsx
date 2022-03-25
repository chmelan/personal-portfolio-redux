import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { IoColorPalette } from 'react-icons/io5'

type HeaderProps = {
  setRandomHue: () => void
}

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/Nick Chmela Resume.pdf', external: true },
  { name: 'Contact', href: '/contact' },
]

export default function TopNav({ setRandomHue }: HeaderProps) {
  return (
    <div className="absolute z-50	w-full bg-transparent	">
      <div className="relative pt-6 pb-16 sm:pb-24 ">
        <Popover>
          <nav
            className="relative mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 sm:px-6 "
            aria-label="Global"
          >
            <div className="flex flex-1 items-end">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link href="/">
                  <a className="text-2xl  font-semibold  text-neutral-700">
                    Nick Chmela
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className=" focus-ring-inset inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-white ">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                {navigation.map((link) =>
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className=" text-md font-sans text-neutral-700 hover:text-neutral-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link key={link.name} href={link.href}>
                      <a className=" text-md font-sans text-neutral-700  hover:text-neutral-600">
                        {link.name}
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="hidden md:flex">
              <button
                title="Update color palette"
                aria-label="Update color palette"
                onClick={() => setRandomHue()}
              >
                <IoColorPalette className="inline-flex h-8 w-8 items-center fill-neutral-700 hover:animate-pulse " />
              </button>
            </div>
          </nav>

          {/* MOBILE HEADER ---------------------------------------------------------------------------------------------------------------------------------*/}

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="z-75 absolute inset-x-0 top-0 z-10 origin-top-right transform p-1 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg border border-slate-700 bg-white pt-1 shadow-md">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Link href="/">
                      <a className=" font-serif text-4xl font-semibold  text-neutral-700">
                        nc
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="  inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100  ">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((link) =>
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-gray-100 hover:text-neutral-600"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link key={link.name} href={link.href}>
                        <a className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-gray-100 hover:text-neutral-600">
                          {link.name}
                        </a>
                      </Link>
                    )
                  )}

                  <Popover.Button>
                    <IoColorPalette
                      title="Update color palette"
                      aria-label="Update color palette"
                      onClick={() => setRandomHue()}
                      className="inline-flex h-8 w-8 items-center fill-neutral-700 hover:animate-pulse "
                    />
                  </Popover.Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}
