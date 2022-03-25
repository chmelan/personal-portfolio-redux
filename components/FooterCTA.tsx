import { Link } from "react-router-dom";

export default function Example() {
  return (
    <div className=" flex items-center py-28 ">
      {/* Content */}
      <aside className="p-12 pt-48 sm:p-16 sm:pt-64 gradient-background rounded-xl max-w-screen-xl mx-auto w-full ">
        <div className="sm:items-end sm:justify-between sm:flex">
          <div className="max-w-xl">
            <h2 className="md:text-5xl font-serif font-semibold text-white text-4xl">
              Let's make something fun together!
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 mt-4 text-gray-800 bg-white rounded-lg shadow-lg hover:opacity-75 sm:mt-0 sm:ml-8"
            aria-label="Contact Me!"
            title="Contact Me!"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </aside>

      {/* <div className="max-w-screen-xl mx-auto w-full px-6">
        <div className="max-w-2xl ">
          <h1 className=" font-serif text-5xl font-semibold text-white mb-4">
            Let's make something fun together!
          </h1>
          <p className="text-2xl text-slate-400 font-semibold mb-4">
            Whether you have a fun project idea, are currently hiring, or want
            to send me your favorite sphagetti recipe, I'd love to chat.
            <br /> Hit me up through my
            <Link to="/contact" className="text-gradient  underline">
              {" "}
              contact{" "}
            </Link>
            form and I'll be in touch shortly
          </p>
        </div>
      </div> */}
    </div>
  );
}
