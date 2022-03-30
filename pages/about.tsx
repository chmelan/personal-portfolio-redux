import Image from 'next/image'
import FooterCTA from '../components/FooterCTA'

export default function About() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-6">
      <h1 className="  mb-4 text-5xl font-bold text-neutral-900">
        More about me
      </h1>

      <div className="grid pb-32 md:grid-cols-3">
        <div className="col-span-2 pt-4 md:pt-0 md:pr-4">
          <p className="pb-4 text-base leading-5 text-neutral-500 ">
            Before becoming a Web Developer, I spent eight years in the
            entertainment industry as an Audio Engineer. I worked from the
            ground up – from local venues to international tours like{' '}
            <span className="text-neutral-900">Sting </span>
            and <span className="text-neutral-900">Bon Jovi</span> –
            collaborating with crewmates and troubleshooting problems to make
            every show go on.
          </p>
          <p className="pb-4 text-base leading-5  text-neutral-500">
            As someone who loves solving problems, Web Development was a natural
            transition after COVID-19 ground the touring industry to a
            standstill. Not one to sit on my heels, I began to teach myself how
            to code through{' '}
            <a
              href="https://www.theodinproject.com/"
              className="text-neutral-900 hover:text-neutral-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project
            </a>
            . Shortly after, I took an internship as a Junior Developer at the
            motorcycle rental startup,{' '}
            <a
              href="https://www.riders-share.com/"
              className="text-neutral-900 hover:text-neutral-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ridershare
            </a>
            . After the internship ended, I took a job at{' '}
            <a
              href="https://www.sparrowwebsites.com/"
              className="text-neutral-900 hover:text-neutral-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sparrow Websites
            </a>
            , where I built and branded over 150 websites for entrepeneurs.
          </p>

          <p className="pb-4 text-base leading-5  text-neutral-500">
            I believe that the right solution isn’t always the easiest, and that
            obstacles exist to help us grow.
          </p>
        </div>
        <div className=" relative row-start-1 md:row-auto">
          <Image
            layout="fill"
            className="aspect square rounded-xl"
            src="/images/nick-chmela-software-developer-family-portrait.jpg"
            alt="Nick and his partner sit for a family portrait on thier stairs. Thier chihuahua-beagle, Dill, stares into the camera with big puppy dog eyes."
          />
        </div>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <li className="flex flex-col gap-4">
          <svg
            className="gradient-background h-20 w-20 rounded-xl fill-white p-2"
            xmlns="http://www.w3.org/2000/svg"
            width="900.000000pt"
            height="900.000000pt"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M275 8708 c-3 -7 -4 -1907 -3 -4223 l3 -4210 4209 -3 c3103 -1 4212 1 4222 9 12 10 14 691 14 4209 0 2309 -3 4205 -6 4214 -6 15 -387 16 -4220 16 -3363 0 -4216 -3 -4219 -12z m8083 -4208 c2 -3616 1 -3856 -15 -3867 -13 -10 -797 -13 -3842 -13 -2104 0 -3836 3 -3848 6 l-23 6 0 3857 c0 2122 3 3861 7 3864 3 4 1741 6 3862 5 l3856 -3 3 -3855z" />{' '}
              <path d="M2600 6985 c-249 -34 -504 -128 -680 -253 -76 -54 -200 -177 -248 -245 -65 -93 -134 -244 -163 -355 -39 -153 -41 -467 -4 -602 9 -30 36 -97 62 -149 97 -192 275 -333 583 -461 80 -33 363 -124 450 -145 41 -9 140 -37 220 -60 80 -24 161 -46 180 -50 42 -9 249 -97 306 -130 49 -29 136 -106 164 -146 61 -85 64 -264 7 -375 -20 -40 -101 -111 -147 -131 -226 -96 -555 -99 -900 -6 -230 61 -495 184 -693 320 -43 30 -86 53 -94 51 -17 -3 -21 -9 -56 -83 -13 -27 -59 -117 -102 -200 -121 -233 -155 -303 -155 -319 0 -35 261 -185 492 -282 94 -39 353 -123 433 -139 433 -89 763 -97 1120 -26 133 27 161 35 284 88 262 112 434 274 551 519 81 169 111 451 71 681 -22 134 -47 201 -112 308 -84 140 -227 267 -393 351 -50 25 -95 50 -101 55 -5 5 -16 9 -25 9 -8 0 -48 13 -88 30 -68 28 -201 72 -322 106 -30 9 -66 20 -79 26 -14 5 -43 13 -65 18 -37 7 -189 47 -321 84 -288 79 -455 176 -517 301 -29 57 -38 153 -23 238 16 94 48 150 117 211 111 97 228 128 474 127 162 -1 279 -15 384 -47 210 -63 413 -156 558 -258 l73 -51 17 23 c10 12 35 57 57 100 22 42 45 84 51 92 7 8 32 53 56 100 25 47 67 125 93 174 l49 90 -36 30 c-55 47 -245 146 -428 224 -277 117 -556 173 -855 171 -82 -1 -193 -7 -245 -14z" />{' '}
              <path d="M6245 6019 c-125 -9 -210 -29 -315 -74 -189 -81 -348 -204 -451 -349 -60 -87 -63 -80 -69 164 l-5 215 -302 3 -303 2 -5 -22 c-3 -13 -4 -894 -3 -1958 l3 -1935 339 -3 c243 -2 343 1 352 9 12 10 14 140 14 788 -1 633 2 777 13 779 7 1 35 -28 62 -65 63 -87 65 -90 159 -173 141 -125 296 -200 499 -240 121 -25 305 -26 415 -5 152 31 335 101 393 151 8 8 19 14 23 14 17 0 136 99 209 174 66 67 134 159 199 266 50 83 126 278 152 390 41 181 48 236 48 430 1 302 -43 490 -175 749 -152 300 -421 535 -732 640 -137 46 -330 65 -520 50z m150 -624 c76 -23 197 -85 245 -127 20 -18 50 -45 66 -59 90 -79 187 -251 223 -396 29 -111 29 -318 2 -430 -45 -183 -112 -311 -223 -425 -116 -119 -225 -177 -383 -203 -107 -18 -114 -18 -210 0 -142 26 -256 85 -379 196 -52 47 -141 159 -175 219 -66 116 -61 79 -61 453 0 330 1 342 22 386 81 169 281 334 478 392 101 30 285 27 395 -6z" />{' '}
            </g>
          </svg>

          <h3 className="text-2xl font-bold text-neutral-900">
            <a
              href="https://www.sparrowwebsites.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sparrow Websites
            </a>
          </h3>

          <p className="font-bold text-neutral-600">
            UX Developer • 2021 - Current
          </p>

          <p className="text-base  text-neutral-400  ">
            At Sparrow, I helped over 150 entrepreneurs and small businesses
            launch accessible, performant, and SEO-friendly websites. I also
            managed over 400 websites where I used tools like Google Lighthouse
            and Page Speed Insights to ensure clients continued to deliver a
            responsive experience as web standards change.
          </p>
        </li>
        <li className="flex flex-col gap-4">
          <svg
            className="gradient-background h-20 w-20 rounded-xl fill-white p-2"
            width="600"
            height="380"
            viewBox="0 0 600 380"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M228.855 0C245.409 0 261.167 3.41044 275.463 9.56703C250.75 31.2182 233.303 60.5648 227.5 94H118.5C105.343 94 94 105.343 94 118.5V379L0 285.093V118.333C0 52.9795 52.9795 0 118.333 0H228.855Z" />
            <path d="M371 143C365.376 176.17 348.314 205.347 323.994 227.044C338.123 233.178 353.662 236.587 369.973 236.587L482 236C495.157 236 505.49 247.253 505.49 260.41C505.49 273.567 495.157 285 482 285H309L403 378.397L482.028 379C547.382 379 600 325.764 600 260.41C600 195.057 547.354 143 482 143H371Z" />
            <path d="M487.5 0H369.5C303.695 0 251.299 53.4366 251.121 118.08C251.083 131.569 240.157 142.194 227.802 142.415L206.88 142.79C158.701 143.653 120.097 182.955 120.097 231.141C120.097 254.577 129.407 277.053 145.978 293.625L231.4 379H365.011L235.037 249.026C230.609 244.598 233.771 236.798 239.996 236.11C307.043 228.701 345.468 177.321 345.63 118.34C345.668 104.626 356.902 93.9073 369.455 93.9073H581.171L487.5 0Z" />
          </svg>

          <h3 className="text-2xl font-bold text-neutral-900">
            <a
              href="https://www.riders-share.com/"
              target="_blank"
              rel="noreferrer"
            >
              Riders Share
            </a>
          </h3>
          <p className="font-bold text-neutral-600">
            Junior Full Stack Developer • 2020 - 2021
          </p>
          <p className="text-base  text-neutral-400  ">
            I used React, MongoDB, and NodeJS to improve user experiences for
            the world’s largest peer-to-peer motorcycle rental company. Whether
            it was creating a photography guide to help owners make their
            listings look more professional, successfully integrating ESLint and
            Prettier into a three-year-old codebase, or using MongoDB’s
            aggregation pipelines to help our team make data-driven decisions, I
            was always proactively looking for ways to benefit the company.
          </p>
        </li>
        <li className="flex flex-col gap-4">
          <svg
            className="gradient-background h-20 w-20 rounded-xl fill-white p-2"
            xmlns="http://www.w3.org/2000/svg"
            width="900.000000pt"
            height="780.000000pt"
            viewBox="0 0 900.000000 780.000000"
          >
            <g
              transform="translate(0.000000,780.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M5354 7791 c9 -14 -17 -20 -126 -26 -137 -8 -430 -48 -578 -80 -36 -8 -78 -16 -95 -18 -16 -2 -52 -10 -80 -17 -27 -6 -77 -19 -110 -27 -191 -46 -484 -136 -635 -193 -30 -12 -66 -25 -80 -30 -66 -23 -293 -116 -339 -140 -9 -5 -45 -22 -81 -38 -89 -41 -203 -97 -275 -136 -162 -88 -174 -94 -240 -136 -22 -14 -47 -29 -55 -33 -8 -4 -28 -16 -45 -27 -16 -11 -36 -23 -44 -26 -12 -6 -112 -73 -276 -184 -107 -72 -416 -314 -474 -370 -9 -9 -50 -45 -91 -80 -98 -83 -420 -403 -487 -483 -29 -34 -68 -80 -88 -102 -69 -77 -159 -187 -232 -284 -98 -132 -271 -385 -303 -446 -6 -11 -19 -33 -30 -50 -11 -16 -24 -39 -30 -50 -6 -11 -26 -47 -45 -80 -61 -105 -189 -370 -235 -485 -11 -30 -28 -68 -36 -83 -8 -16 -14 -35 -14 -42 0 -8 -6 -29 -14 -47 -36 -85 -68 -187 -120 -380 -33 -125 -69 -327 -86 -483 -13 -128 -13 -533 0 -644 26 -213 65 -401 112 -536 5 -16 14 -43 18 -60 15 -53 41 -120 51 -130 5 -5 9 -15 9 -22 0 -12 45 -116 74 -173 209 -400 459 -698 813 -968 45 -34 85 -62 88 -62 4 0 24 -12 44 -27 40 -31 67 -48 96 -63 11 -6 34 -19 50 -30 50 -32 352 -180 369 -180 8 0 17 -4 21 -10 3 -5 20 -14 38 -19 38 -12 114 -38 142 -50 18 -7 43 -15 185 -57 167 -48 376 -88 620 -119 90 -11 219 -15 460 -15 337 0 504 11 695 45 44 9 91 15 105 15 14 0 59 7 100 16 41 8 109 22 150 31 133 27 331 77 465 118 22 6 67 20 100 30 33 9 71 22 85 27 14 6 39 14 55 18 17 5 55 18 85 30 30 12 69 26 85 30 29 8 74 25 125 47 14 6 45 19 70 28 25 10 61 24 80 33 19 8 49 20 65 27 29 11 58 24 135 58 51 22 352 167 370 177 8 5 51 27 95 50 44 23 96 51 115 62 19 11 55 31 80 45 25 13 59 33 75 44 17 10 39 23 50 29 11 6 34 19 50 30 17 11 37 23 45 27 8 4 43 26 78 50 35 24 66 43 69 43 3 0 22 14 43 30 21 17 41 30 45 30 3 0 33 20 64 44 32 25 83 62 114 83 186 128 496 392 709 606 259 259 528 587 698 852 17 27 139 229 157 260 31 55 194 387 213 435 12 30 28 69 35 85 24 54 43 109 76 210 17 55 37 116 44 135 13 35 31 106 45 170 4 19 12 55 18 80 15 60 37 181 58 315 24 158 25 665 0 815 -33 203 -81 408 -122 523 -26 70 -42 112 -59 157 -23 58 -140 296 -165 335 -11 17 -24 39 -30 50 -14 28 -37 62 -100 152 -125 178 -318 387 -475 514 -44 35 -82 66 -85 69 -13 14 -227 162 -251 174 -8 3 -27 15 -44 25 -39 26 -337 173 -392 194 -24 10 -62 24 -85 33 -24 9 -58 22 -76 30 -18 8 -39 14 -47 14 -8 0 -29 6 -47 14 -18 7 -58 20 -88 29 -30 8 -80 22 -110 30 -30 9 -66 18 -80 20 -14 3 -45 9 -70 15 -133 32 -374 69 -508 77 -99 6 -125 12 -116 26 3 5 -132 9 -321 9 -189 0 -324 -4 -321 -9z m35 -301 c-8 -11 -70 -48 -139 -83 -120 -62 -255 -131 -665 -342 -104 -54 -255 -132 -335 -173 -80 -41 -212 -109 -295 -152 -82 -43 -215 -111 -295 -152 -224 -115 -411 -213 -450 -236 -19 -11 -55 -32 -80 -45 -69 -38 -247 -145 -325 -197 -134 -88 -271 -189 -426 -315 -94 -76 -289 -267 -354 -347 -27 -33 -61 -73 -74 -87 -22 -24 -100 -136 -129 -184 -7 -12 -22 -35 -32 -52 -20 -32 -108 -209 -129 -260 -33 -79 -75 -226 -95 -335 -22 -116 -22 -446 0 -590 23 -153 41 -279 59 -415 30 -220 50 -326 90 -470 8 -27 16 -59 19 -70 2 -11 14 -45 26 -75 12 -30 25 -67 30 -83 15 -46 99 -208 145 -277 46 -68 172 -220 183 -220 4 0 25 -17 47 -37 97 -87 272 -173 440 -216 233 -60 528 -60 850 -1 143 27 277 57 385 88 117 34 168 49 200 61 82 29 107 37 135 45 17 5 55 18 85 30 30 12 66 25 80 30 14 4 36 12 50 18 14 5 45 18 70 27 25 10 60 24 78 31 17 8 47 20 65 27 17 8 50 22 72 31 22 10 54 24 70 31 48 21 148 65 290 130 33 15 79 35 103 46 23 10 61 28 85 38 23 11 68 31 100 45 31 14 83 38 115 52 31 14 75 34 97 44 22 10 67 30 100 45 63 28 129 58 180 80 17 7 59 27 95 43 36 16 85 39 110 50 25 11 72 32 105 47 33 15 78 35 100 45 22 10 67 30 100 45 126 57 163 73 290 130 17 7 59 27 95 43 36 16 85 39 110 50 25 11 72 32 105 47 33 15 78 35 100 45 22 10 67 30 100 45 33 15 78 35 100 45 22 10 67 30 100 45 33 15 78 35 100 45 22 10 67 30 100 45 33 15 78 35 100 45 22 10 67 30 100 45 33 15 78 35 100 45 22 10 65 30 96 44 77 36 92 35 84 -5 -12 -55 -109 -267 -199 -434 -75 -140 -127 -223 -286 -460 -233 -346 -697 -823 -1100 -1130 -36 -27 -72 -55 -80 -62 -76 -61 -340 -245 -412 -288 -9 -5 -54 -32 -100 -60 -116 -70 -121 -73 -143 -85 -11 -6 -47 -26 -80 -44 -138 -78 -365 -187 -520 -251 -49 -20 -103 -43 -120 -50 -16 -7 -47 -20 -68 -29 -21 -9 -44 -16 -52 -16 -9 0 -23 -4 -33 -10 -18 -10 -84 -35 -137 -50 -16 -5 -52 -16 -80 -24 -113 -34 -192 -57 -230 -65 -62 -13 -135 -31 -191 -47 -28 -8 -62 -14 -75 -14 -13 0 -53 -6 -89 -14 -141 -31 -422 -61 -677 -73 -142 -7 -488 17 -624 43 -42 8 -87 14 -100 14 -53 0 -301 63 -489 124 -147 48 -169 57 -360 151 -139 68 -146 71 -218 118 -24 15 -46 27 -49 27 -3 0 -22 13 -42 28 -20 16 -43 31 -51 34 -33 13 -211 164 -318 271 -219 216 -376 450 -507 752 -27 64 -64 170 -75 215 -5 19 -14 55 -20 80 -60 233 -71 329 -71 615 0 308 28 514 105 785 46 161 47 163 91 280 8 22 22 59 31 83 16 41 30 77 58 140 22 51 145 298 170 342 13 22 34 59 47 82 20 35 61 100 129 208 47 74 234 332 250 345 4 3 26 30 49 60 65 82 224 260 341 380 68 69 279 260 385 347 115 94 394 300 473 348 9 6 44 28 77 50 68 45 91 60 120 75 11 6 34 19 50 29 17 11 50 31 75 44 25 14 74 41 110 61 120 67 381 192 490 236 30 12 64 26 74 32 11 6 31 14 45 18 14 5 51 18 81 30 339 131 701 230 1040 284 195 31 270 40 465 51 110 7 208 13 219 13 16 2 17 0 5 -18z m865 -74 c28 -8 80 -22 116 -31 91 -24 159 -45 198 -61 18 -8 39 -14 47 -14 7 0 26 -6 42 -14 15 -8 48 -22 73 -32 101 -39 266 -118 340 -163 19 -11 42 -24 50 -28 8 -4 44 -27 80 -52 36 -24 85 -58 110 -75 104 -69 275 -228 389 -361 69 -82 181 -229 181 -240 0 -2 12 -23 28 -47 41 -65 48 -77 87 -158 132 -271 188 -460 230 -785 15 -118 21 -437 9 -469 -6 -15 -67 -47 -224 -119 -85 -38 -188 -86 -270 -124 -41 -19 -93 -43 -115 -53 -22 -10 -76 -35 -120 -55 -147 -68 -185 -85 -242 -111 -32 -14 -89 -41 -128 -59 -38 -18 -97 -45 -130 -60 -62 -28 -127 -58 -255 -118 -41 -19 -102 -47 -135 -62 -33 -15 -88 -40 -122 -56 -71 -33 -164 -76 -255 -118 -35 -16 -93 -43 -130 -60 -38 -17 -97 -44 -133 -61 -36 -16 -94 -43 -130 -60 -36 -16 -94 -43 -130 -60 -36 -16 -93 -43 -127 -59 -35 -16 -90 -41 -123 -56 -33 -15 -94 -43 -135 -62 -158 -74 -271 -125 -375 -168 -19 -8 -50 -21 -67 -29 -18 -7 -51 -20 -73 -29 -22 -8 -60 -23 -85 -32 -78 -30 -175 -64 -215 -75 -16 -5 -61 -18 -100 -30 -38 -11 -88 -24 -110 -29 -22 -5 -60 -13 -85 -19 -140 -33 -212 -43 -365 -48 -337 -12 -527 37 -725 187 -82 62 -112 93 -180 184 -56 76 -61 83 -106 175 -20 41 -43 87 -50 102 -8 14 -14 33 -14 42 0 8 -6 30 -14 48 -19 44 -63 200 -77 273 -4 22 -13 60 -19 85 -7 25 -19 72 -27 105 -8 33 -21 83 -29 111 -8 28 -14 59 -14 68 0 9 -6 38 -14 64 -17 59 -36 200 -36 273 0 176 64 393 163 554 93 150 287 359 447 480 36 27 67 52 70 55 12 13 275 191 300 203 8 4 29 16 45 27 17 11 37 23 45 27 8 4 42 23 75 42 83 48 144 81 415 218 129 66 348 178 485 248 264 135 585 298 1080 550 165 84 334 171 375 193 84 44 125 50 204 28z" />{' '}
            </g>
          </svg>
          <h3 className="text-2xl font-bold text-neutral-900">
            <a href="https://clairglobal.com/" target="_blank" rel="noreferrer">
              Clair Global
            </a>
          </h3>
          <p className="font-bold text-neutral-600">
            Monitor Systems Engineer • 2018 - 2021
          </p>

          <p className="text-base  text-neutral-400  ">
            At Clair Global, I worked with music tours including Sting, Bon
            Jovi, and Florence and the Machine to help bring reinforced audio to
            crowds of over 70,000 people at stadiums and arenas all over the
            world. I also had the opportunity to deliver seamless broadcast
            audio for clients like Apple and the NFL in a highly confidential
            setting.
          </p>
        </li>
      </ul>
    </div>
  )
}
