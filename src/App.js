import Header from "./components/Header";
import AboutMe from "./components/about-me/AboutMe";
import Experience from "./components/experience-section/Experience.jsx";
import Footer from "./components/footer-section/Footer";
import MainBanner from "./components/main-banner/MainBanner";
import ProjectSection from "./components/projects-section/ProjectSection";
import SkillSection from "./components/skill-section/SkillSection";

function App() {
	return (
		<div className='content-wrapper'>
			<Header />
			<MainBanner />
			<AboutMe />
			<ProjectSection />
			<SkillSection />
			<Experience />
			<Footer />
		</div>
	);
}

export default App;
