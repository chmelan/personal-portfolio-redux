import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'
import PostCard from '../components/PostCard'

interface postCardProps {
  id: string
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
        <title>{siteTitle}</title>
      </Head>

      <div className="display mx-auto mb-48 flex w-full max-w-screen-xl flex-col items-center gap-8 px-6">
        <section className="flex max-w-2xl flex-col gap-6 lg:text-center">
          <h1 className="text-gradient text-2xl font-bold  text-neutral-500">
            BLOG POSTS
          </h1>
          <p className=" text-6xl font-bold text-neutral-900 ">
            Come and learn something new!
          </p>
        </section>

        <section className="flex max-w-screen-lg flex-col gap-8">
          {allPostsData.map(
            ({
              id,
              date,
              title,
              tags,
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
