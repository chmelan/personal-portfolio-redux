import Head from 'next/head'
import { siteTitle } from '../components/Layout'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | {siteTitle}</title>
      </Head>

      <div className="mx-auto w-full max-w-screen-xl px-6 pb-32">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left side */}
          <div className="flex max-w-xl flex-col gap-8 pt-4 md:pt-0 md:pr-4 ">
            <h1 className="  text-4xl font-bold text-neutral-900 md:text-5xl ">
              Get in touch!
            </h1>
            <p className="text-xl text-neutral-500 ">
              If you&apos;re interested in grabbing coffee and talking shop (or
              want to hear some crazy stories from my touring days), feel free
              to contact me through the form, or hit me up through Linked In!
            </p>
            {/* contact links */}

            <a
              href="https://www.linkedin.com/in/nick-chmela/"
              className="flex items-center gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="gradient-background h-10 w-10  rounded-xl p-2 text-white"
                aria-hidden="true"
              />
              <span className=" text-xl font-bold text-neutral-600 md:text-2xl">
                /in/nick-chmela/
              </span>
            </a>
            <a
              href="https://github.com/chmelan/"
              className="flex items-center gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="gradient-background h-10 w-10  rounded-xl p-2 text-white"
                aria-hidden="true"
              />
              <span className=" text-xl font-bold text-neutral-600 md:text-2xl">
                github.com/chmelan/
              </span>
            </a>
          </div>
          {/* Right side */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
