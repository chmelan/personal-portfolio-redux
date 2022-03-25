import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" flex items-center bg-neutral-900 pt-28 pb-6">
      {/* Content */}
      <div className="mx-auto w-full max-w-screen-xl px-6">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://www.linkedin.com/in/nick-chmela/"
            className="text-white hover:text-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Linked In</span>
            <FaLinkedinIn className="h-10 w-10" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/chmelan/"
            className="text-white hover:text-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-10 w-10" aria-hidden="true" />
          </a>
          <Link href="/contact">
            <a>
              <span className="sr-only">Contact</span>
              <FaRegEnvelope
                className="h-10 w-10 text-white hover:text-neutral-700"
                aria-hidden="true"
              />
            </a>
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center  text-slate-400">
            &copy; 2022 Nick Chmela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
