import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-6">
      <div className="grid md:grid-cols-2 ">
        {/* Left side */}
        <div className="flex max-w-xl flex-col gap-8 pt-4 md:pt-0 md:pr-4 ">
          <h1 className="  text-5xl font-bold text-neutral-900 ">
            Get in touch!
          </h1>
          <p className="text-xl text-neutral-500 ">
            If you&apos;re interested in grabbing coffee and talking shop (or
            want to hear some crazy stories from my touring days), feel free to
            contact me through the form, or hit me up through Linked In!
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
            <span className="text-2xl font-bold text-neutral-600">
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
            <span className="text-2xl font-bold text-neutral-600">
              github.com/chmelan/
            </span>
          </a>
        </div>
        {/* Right side */}
        <div>
          <form
            name="contact"
            action=""
            method="post"
            className="flex flex-col items-start justify-start "
          >
            <input type="hidden" name="form-name" value="contact" />
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-neutral-700 "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
              placeholder="name"
              required
            ></input>
            <label
              htmlFor="email"
              className="mt-4 block text-lg font-semibold text-neutral-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className=" block w-full rounded-md bg-neutral-200 py-3  px-4 text-neutral-800"
              placeholder="email"
              required
            ></input>
            <label
              htmlFor="phone"
              className="mt-4 block text-lg font-semibold text-neutral-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone "
              autoComplete="tel"
              className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
              placeholder="phone"
            ></input>
            <label
              htmlFor="message"
              className="mt-4 block text-lg font-semibold text-neutral-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="message"
              className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
              placeholder="message"
              required
            ></textarea>
            <button
              className="gradient-background mt-4 w-full rounded-lg outline-offset-4"
              type="submit"
            >
              <span className="  block -translate-x-1 -translate-y-1 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white transition-transform  hover:-translate-x-1.5 hover:-translate-y-1.5 active:-translate-x-0 active:-translate-y-0">
                Send message!
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
