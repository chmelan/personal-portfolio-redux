import Head from 'next/head'
import { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import PostCard from '../components/PostCard'

interface postCardProps {
  id: string
  icon: string
  date: any
  title: string
  tags: string[]
  description: string
  featuredImage: string
  featuredImageAlt: string
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Posts({ allPostsData }: any) {
  return (
    <>
      <Head>
        <title>Posts | {siteTitle}</title>
      </Head>

      <div className="display mx-auto mb-48 flex w-full max-w-screen-xl flex-col items-center gap-8 px-6">
        <section className="flex max-w-2xl flex-col gap-6 lg:text-center">
          <h1 className="text-gradient text-xl font-bold md:text-2xl  ">
            BLOG POSTS
          </h1>
          <p className="text-4xl font-bold text-neutral-900 md:text-6xl ">
            Come and learn something new!
          </p>
        </section>

        <section className="flex w-full max-w-screen-md flex-col gap-8">
          {allPostsData.map(
            ({
              id,
              date,
              title,
              tags,
              icon,
              description,
              featuredImage,
              featuredImageAlt,
            }: postCardProps) => (
              <PostCard
                key={id}
                id={id}
                title={title}
                date={date}
                tags={tags}
                icon={icon}
                description={description}
                featuredImage={featuredImage}
                featuredImageAlt={featuredImageAlt}
              />
            )
          )}
        </section>
      </div>
      {/* <FooterCTA /> */}
    </>
  )
}
