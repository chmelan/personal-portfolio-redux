import type { NextPage } from 'next'

import HomeHero from '../components/HomeHero'

// import Skills from '../components/Skills'
// import FooterCTA from '../components/FooterCTA'

import HomeAbout from '../components/HomeAbout'
// import FeaturedProjects from '../components/FeaturedProjects'

const Home: NextPage = () => {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      {/* <FeaturedProjects id="projects" />
     
      <Skills />
      <FooterCTA /> */}
    </main>
  )
}

export default Home
