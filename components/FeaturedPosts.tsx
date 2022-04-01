import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Date from '../components/Date'
interface postDataType {
  id: string
  date: any
  title: string
  tags: string[]
  description: string
  featuredImage: string
  featuredImageAlt: string
}
interface FeaturedPostsProps {
  postData: postDataType[]
}
export default function FeaturedPosts({ postData }: FeaturedPostsProps) {
  return (
    <section className="flex items-center bg-neutral-900 py-28 ">
      {/* Content */}
      <div className="mx-auto w-full max-w-screen-xl px-7 ">
        <div className="grid  gap-8 md:grid-cols-12 ">
          <div className=" col-span-6 flex flex-col gap-6">
            <h2 className="text-gradient-no-hover text-2xl font-bold  text-neutral-500">
              BLOG POSTS
            </h2>
            <p className=" text-6xl font-bold text-white ">Recent thoughts</p>
            <div className="flex">
              <Link href="/posts">
                <a className="gradient-background mt-4 rounded-lg  outline-offset-4 ">
                  <span className="  block -translate-x-1 -translate-y-1 rounded-lg bg-white py-4 px-6 text-lg font-bold text-neutral-900 transition-transform  hover:-translate-x-1.5 hover:-translate-y-1.5 active:-translate-x-0 active:-translate-y-0">
                    View all posts
                  </span>
                </a>
              </Link>
            </div>
          </div>
          {/* posts */}
          <article className="col-span-6">
            {postData.map((post) => (
              <article>
                <a key={post.id}>
                  <div className=" col-span-3  flex flex-col  justify-between gap-4 p-4 pt-12">
                    <p className="justify-self-start text-lg font-semibold  uppercase text-neutral-400 text-neutral-600">
                      <Date dateString={post.date} />
                    </p>
                    <h3 className="justify-self-start text-3xl font-bold text-white">
                      {post.title}
                    </h3>
                    <div className="items end flex justify-between gap-4 justify-self-end">
                      {/* Button */}
                      <Link href={`/posts/${post.id}`}>
                        <a className=" group flex items-center justify-center gap-2   pt-4 text-lg  font-medium text-neutral-200">
                          Continue reading
                          <span className=" transition group-hover:translate-x-1 group-active:translate-x-5">
                            <FaArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                    <hr className="border-neutral-700" />
                  </div>
                </a>
              </article>
            ))}
          </article>
        </div>
        <hr className="mt-24 border-2 border-neutral-800" />
      </div>
    </section>
  )
}
