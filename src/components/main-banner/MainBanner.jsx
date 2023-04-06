import React from "react";
import "./main-banner.scss";
import Typer from "../animation/typing-text-animation/Typer";
import { AiOutlineLaptop } from "react-icons/ai";
import { useState } from "react";
import { Toggle } from "../animation/toggle-animation/Toggle";

const MainBanner = () => {
	const [theme, setTheme] = useState("dark");

	const texts = [
		"Software Engineer",
		"Full-Stack Developer",
		"Front-End Developer",
		"Back-End Developer",
	];

	const toggleTheme = () => {
		var theTheme = theme === "dark" ? "light" : "dark";
		setTheme(theTheme);
		document.documentElement.setAttribute("data-theme", theme);
	};

	return (
		<div className='main-banner abs-centre-ver'>
			<div className='lapi-block'>
				<AiOutlineLaptop style={{ height: "170px", width: "170px" }} />
			</div>
			<h1 className='name-block'>Navab Gaznabi </h1>
			<div className='desi-block'>
				<Typer dataText={texts} />
			</div>
			<div className='toggle-block'>
				<Toggle toggled={true} onClick={toggleTheme} />
			</div>
		</div>
	);
};

export default MainBanner;
