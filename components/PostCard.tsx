import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Date from '../components/Date'

interface postCardProps {
  id: string
  date: any
  title: string
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
  description,
  featuredImage,
  featuredImageAlt,
}: postCardProps) {
  return (
    <article className=" grid grid-cols-5 items-center gap-8 rounded-xl  bg-neutral-900">
      <div className="relative col-span-2 aspect-square h-full border-r-4 border-white ">
        <Image
          src={featuredImage}
          alt="some pic"
          layout="fill"
          objectFit="cover"
          className="rounded-tl-xl shadow-lg lg:rounded-bl-xl"
        />
      </div>

      <div className=" col-span-3  flex flex-col  justify-between gap-8 p-4">
        <p className="text-gradient justify-self-start text-xl  font-bold uppercase text-neutral-600">
          <Date dateString={date} />
        </p>

        <h3 className="justify-self-start text-4xl font-bold text-white">
          {title}
        </h3>

        <div className="items end flex justify-between gap-4 justify-self-end">
          {/* Button */}
          <Link href={`/posts/${id}`}>
            <a className=" group flex items-center justify-center gap-2   text-lg font-semibold  text-white">
              Continue reading
              <span className=" transition group-hover:translate-x-1 group-active:translate-x-5">
                <FaArrowRight />
              </span>
            </a>
          </Link>
        </div>
        <p>
          {tags.map((tag: string, i: number, tags: string[]) => {
            return (
              <span key={tag} className="font-semibold text-neutral-500">
                {tag + ' '}
                {tags.length - 1 === i ? null : (
                  <span className="text-neutral-400">• </span>
                )}
              </span>
            )
          })}
        </p>
      </div>
    </article>
  )
}
