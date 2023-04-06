import React from "react";
import "./skill-section.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFiletypeScss } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { DiMysql, DiCss3 } from "react-icons/di";

const SkillSection = () => {
	return (
		<section className='skill-wrapper'>
			<div className='heading'>
				<h2>SKILLS</h2>
			</div>
			<div className='skills-container'>
				<ul className='ul-skill-container abs-centre'>
					<li>
						<AiFillHtml5
							style={{ height: "6rem", width: "6rem" }}
						/>
						<p>HTML5</p>
					</li>
					<li>
						<DiCss3 style={{ height: "6rem", width: "6rem" }} />
						<p>CSS3</p>
					</li>
					<li>
						<BsFiletypeScss
							style={{ height: "6rem", width: "6rem" }}
						/>
						<p>SCSS</p>
					</li>
					<li>
						<FaReact style={{ height: "6rem", width: "6rem" }} />
						<p>React</p>
					</li>
					<li>
						<SiJavascript
							style={{ height: "6rem", width: "6rem" }}
						/>
						<p>JavaScript</p>
					</li>
					<li>
						<FaNodeJs style={{ height: "6rem", width: "6rem" }} />
						<p>Node</p>
					</li>
					<li>
						<SiMongodb style={{ height: "6rem", width: "6rem" }} />
						<p>MongoDB</p>
					</li>
					<li>
						<DiMysql style={{ height: "6rem", width: "6rem" }} />
						<p>MySQL</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default SkillSection;
