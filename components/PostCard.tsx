import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Date from '../components/Date'

interface postCardProps {
  id: string
  date: any
  title: string
  icon: string
  tags: string[]
  description: string
  featuredImage: string
  featuredImageAlt: string
}

export default function PostCard({
  id,
  date,
  title,
  tags,
  icon,
  description,
  featuredImage,
  featuredImageAlt,
}: postCardProps) {
  return (
    <article className="gradient-background  rounded-lg  outline-offset-4 ">
      <Link href={`/posts/${id}`}>
        <a className=" flex h-full  -translate-x-1 -translate-y-1 flex-col gap-2 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white ">
          <div className="flex  gap-4 border-b-2 border-neutral-700 pb-2">
            <p className=" gradient-background flex items-center justify-center  rounded-xl  fill-white p-2 text-center text-3xl md:h-20 md:w-20 md:text-5xl">
              {icon}
            </p>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-neutral-500">
                <Date dateString={date} />
              </p>

              <h3 className="text-xl font-bold text-white md:text-3xl">
                {title}
              </h3>
            </div>
          </div>
          <p className="  text-left text-base font-normal text-neutral-300 ">
            {description}
          </p>{' '}
          <div className="grid grid-cols-2">
            <ul>
              {tags.map((tag: string, i: number, tags: string[]) => {
                return (
                  <li
                    key={tag}
                    className=" inline rounded-full bg-neutral-800 px-2 py-1 text-sm font-normal text-neutral-300"
                  >
                    {tag}
                  </li>
                )
              })}
            </ul>
            <Link href={`/posts/${id}`}>
              <a className=" group flex items-center justify-end gap-2    text-base font-semibold  text-neutral-300">
                Read More
                <span className=" transition group-hover:translate-x-1 group-active:translate-x-5">
                  <FaArrowRight />
                </span>
              </a>
            </Link>
          </div>
        </a>
      </Link>
    </article>
  )
}
