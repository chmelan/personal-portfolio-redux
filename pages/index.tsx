import type { NextPage } from 'next'

import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import Skills from '../components/Skills'
// import FooterCTA from '../components/FooterCTA'

import FeaturedProjects from '../components/FeaturedProjects'

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />
      <FeaturedProjects id="projects" />
      <HomeAbout />
      <Skills />
      {/* <FooterCTA /> */}
    </>
  )
}

export default Home
