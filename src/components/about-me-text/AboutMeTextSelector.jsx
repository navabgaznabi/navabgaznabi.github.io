import React from "react";
import "./about-me-text-selector.scss";

const textLength = [
	"My name is anvab gaznabi",
	"my nidadsdsdddddbjhnlsdcjsvbsdufvuyd",
	"👋 I'm Davina Griss. Fictional person for preview purposes I am working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from  Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
];
const AboutMeTextSelector = () => {
	// const [text, setText] = useState(textLength[2]);
	// const handleInputChange = (e) => {
	// 	const { value } = e.target;
	// 	setText(textLength[value]);
	// };
	return (
		<div className='abt-text-holder'>
			<h3>Hi :)</h3>
			<p className='about-text'>{textLength[2]}</p>
		</div>
	);
};

export default AboutMeTextSelector;
