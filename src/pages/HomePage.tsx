import FinalHero from "../components/FinalHero";
import Hero from "../components/Hero";
import HomeContact from "../components/HomeContact";
import HomeLeadership from "../components/HomeLeadership";
import HomeMemories from "../components/HomeMemories";
import HomePrograms from "../components/HomePrograms";
import HomeTestimonials from "../components/HomeTestimonials";
import SubHero from "../components/SubHero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SubHero />
      <HomePrograms />
      <HomeMemories />
      <HomeLeadership />
      <HomeTestimonials />
      <FinalHero />
      <HomeContact />
    </>
  );
};

export default HomePage;
