import CertificationsHero from "../components/Fragments/CertificationsHero";
import Footer from "../components/Fragments/Footer";
import GitHubStats from "../components/Fragments/GitHubActivity";
import ProjectsHero from "../components/Fragments/ProjectsHero";
import ScrollToTopButton from "../components/Fragments/Scroll";
import SkillsHero from "../components/Fragments/SkillsHero";
import { useDarkMode } from "../components/Fragments/ToggleMode";
import HeroSection from "../components/Layouts/HeroSection";

export default function HomePages() {
  const { isDark } = useDarkMode();

  return (
    <div className={`overflow-hidden min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="h-screen -mt-28">
        <HeroSection/>
      </div>
      
      <div className={`transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <SkillsHero/>
        <GitHubStats/>
        <ProjectsHero/>
        <CertificationsHero/>
      </div>
      
      <ScrollToTopButton/>
      <Footer/>
    </div>
  );
}
