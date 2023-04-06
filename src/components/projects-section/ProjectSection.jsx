import React from "react";

import "./project-section.scss";
import UncontrolledCarousel from "../react-carousel/UncontrolledCarousel";

// const projectsArray = [
// 	{
// 		imgUrl: "https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg",
// 		title: "",
// 	},
// 	{
// 		imgUrl: "https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg",
// 		title: "",
// 	},
// 	{
// 		imgUrl: "https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg",
// 		title: "",
// 	},
// 	{
// 		imgUrl: "https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg",
// 		title: "",
// 	},
// 	{
// 		imgUrl: "https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg",
// 		title: "",
// 	},
// 	{
// 		imgUrl: "https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg",
// 		title: "",
// 	},
// ];
const ProjectSection = () => {
	return (
		<section className='projects-container'>
			<div className='heading'>
				<h2>PROJECTS</h2>
			</div>
			<div className='projects-wrapper abs-centre'>
				<UncontrolledCarousel />
			</div>
		</section>
	);
};

export default ProjectSection;
