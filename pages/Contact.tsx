import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className=" py-48">
      <div className="max-w-screen-xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 ">
          {/* Left side */}
          <div className="md:pt-0 md:pr-4 pt-4 max-w-xl flex flex-col gap-8 ">
            <h1 className="  text-5xl font-bold text-neutral-900 ">
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
                className="w-10 h-10 text-white  gradient-background p-2 rounded-xl"
                aria-hidden="true"
              />
              <span className="text-neutral-600 font-bold text-2xl">
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
                className="w-10 h-10 text-white  gradient-background p-2 rounded-xl"
                aria-hidden="true"
              />
              <span className="text-neutral-600 font-bold text-2xl">
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
              className="flex flex-col justify-start items-start "
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
                className=" bg-neutral-200 py-3 px-4 block w-full text-neutral-800 rounded-md"
                placeholder="name"
                required
              ></input>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-neutral-700 mt-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className=" bg-neutral-200 py-3 px-4 block w-full  text-neutral-800 rounded-md"
                placeholder="email"
                required
              ></input>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-neutral-700 mt-4"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone "
                autoComplete="tel"
                className=" bg-neutral-200 py-3 px-4 block w-full text-neutral-800 rounded-md"
                placeholder="phone"
              ></input>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-neutral-700 mt-4"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="message"
                className=" bg-neutral-200 py-3 px-4 block w-full text-neutral-800 rounded-md"
                placeholder="message"
                required
              ></textarea>
              <button
                className="gradient-background rounded-lg outline-offset-4 w-full mt-4"
                type="submit"
              >
                <span className="  py-4 px-6 bg-neutral-900 text-lg rounded-lg font-semibold block text-white transition-transform -translate-x-1 -translate-y-1  active:-translate-x-0 active:-translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5">
                  Send message!
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
