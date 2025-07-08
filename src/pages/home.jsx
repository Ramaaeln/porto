import CertificationsHero from "../components/Fragments/CertificationsHero";
import GitHubStats from "../components/Fragments/GitHubActivity";
import ProjectsHero from "../components/Fragments/ProjectsHero";
import ScrollToTopButton from "../components/Fragments/Scroll";
import SkillsHero from "../components/Fragments/SkillsHero";
import HeroSection from "../components/Layouts/HeroSection";
import AboutPages from "./about";

export default function HomePages() {
    return (
      <div className="overflow-hidden">
      <div className="h-screen -mt-28">
        <HeroSection/>
      </div>
      <div className="">
        <SkillsHero/>
        <GitHubStats/>
        <ProjectsHero/>
        <CertificationsHero/>
      </div>
      <ScrollToTopButton/>
      </div>
    );
  }
  