import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" bg-neutral-900 py-6">
      {/* Content */}
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-6">
        <h2 className=" text-3xl font-bold leading-normal  text-white md:text-5xl">
          Ready to make something fun together?
          <br />
          <Link href="/contact">
            <a className="text-gradient outline-none focus:underline decoration-white">
              Let's get in touch!
            </a>
          </Link>
          <br />
        </h2>

        <div className=" flex flex-col items-start md:flex-row md:justify-between">
          <div className="flex justify-center space-x-6 ">
            <a
              href="https://www.linkedin.com/in/nick-chmela/"
              className="text-white hover:text-neutral-700 outline-offset-4	"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Linked In</span>
              <FaLinkedinIn className="h-10 w-10" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/chmelan/"
              className="text-white hover:text-neutral-700 outline-offset-4	"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-10 w-10" aria-hidden="true" />
            </a>
            <Link href="/contact">
              <a className="outline-offset-4	">
                <span className="sr-only">Contact</span>
                <FaRegEnvelope
                  className="h-10 w-10 text-white hover:text-neutral-700 	"
                  aria-hidden="true"
                />
              </a>
            </Link>
          </div>

          <p className="text-center  text-sm text-neutral-400">
            &copy; 2022 Nick Chmela<span className="md:hidden"> | </span>
            <br className="hidden md:inline" />
            Made with ❤️ by me.
          </p>
        </div>
      </div>
    </footer>
  )
}
