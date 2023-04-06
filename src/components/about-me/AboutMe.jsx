import React from "react";
import AboutMeTextSelector from "../about-me-text/AboutMeTextSelector";
import "./about-me.scss";

const AboutMe = () => {
	return (
		<section className='about-me-wrapper'>
			<div className='heading'>
				<h2>ABOUT ME</h2>
			</div>
			<div className='about-container'>
				<div className='about-me-img-container'>
					<div className='profile-img'>
						<img
							src='https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg'
							alt='my-img'
						/>
					</div>
					<div className='stack-img'>
						<img src='\img\mern-stack.png' alt='asl' />
					</div>
				</div>
				<div className='about-me-txt-container'>
					<div className='colorful-dots'>
						<span className='dots'></span>
						<span className='dots'></span>
						<span className='dots'></span>
					</div>
					<AboutMeTextSelector />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
