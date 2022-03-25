import Skills from "../components/Skills";
import FooterCTA from "../components/FooterCTA";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <FeaturedProjects id="projects" />
      <HomeAbout />
      <Skills />
      <FooterCTA />
    </main>
  );
}
