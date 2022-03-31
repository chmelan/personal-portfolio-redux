import Layout from '../../components/Layout'
import Date from '../../components/Date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="mx-auto flex w-full max-w-screen-md flex-col  gap-8 p-6 text-center">
        <div className="text-gradient  text-xl  font-bold text-neutral-500">
          <Date dateString={postData.date} />
        </div>{' '}
        <h1 className="  text-4xl font-bold text-neutral-900">
          {postData.title}
        </h1>
        <p>
          {postData.tags.map((tag: string, i: number, tags: string[]) => {
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
        <div
          className="prose self-center pt-32 text-left"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  )
}
