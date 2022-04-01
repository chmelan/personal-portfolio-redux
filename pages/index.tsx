import type { NextPage } from 'next'
import { getSortedPostsData } from '../lib/posts'

import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import FeaturedPosts from '../components/FeaturedPosts'
import Skills from '../components/Skills'

import FeaturedProjects from '../components/FeaturedProjects'

interface postDataType {
  id: string
  date: any
  title: string
  tags: string[]
  description: string
  featuredImage: string
  featuredImageAlt: string
}

export async function getStaticProps() {
  const postsData = getSortedPostsData(6)
  return {
    props: {
      postsData,
    },
  }
}

const Home: NextPage = ({ postsData }: any) => {
  return (
    <>
      <HomeHero />
      <FeaturedProjects id="projects" />
      <HomeAbout />
      <Skills />
      <FeaturedPosts postData={postsData} />
    </>
  )
}

export default Home
