import type { NextPage } from 'next'

const Thanks: NextPage = () => {
  return (
    <div className="  gradient-background flex min-h-[80vh] w-full   flex-col  items-center justify-center gap-8 p-6">
      <h1 className="  text-8xl font-bold text-white md:text-9xl">
        Thank You!{' '}
      </h1>
      <p className=" text-3xl text-neutral-100 md:text-2xl ">
        I'll be in touch shortly with more info.
      </p>
    </div>
  )
}

export default Thanks
