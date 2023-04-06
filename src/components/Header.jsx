import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./header.scss";

import React from "react";

const Header = () => {
	return (
		<div className='header'>
			<a href='https://www.github.com/navabgaznabi'>
				<AiFillGithub
					style={{ height: "50px", width: "50px", padding: "10px" }}
				/>
			</a>
			<a href='https://www.linkedin.com/in/navabgaznabi'>
				<AiFillLinkedin
					style={{ height: "50px", width: "50px", padding: "10px" }}
				/>
			</a>
		</div>
	);
};

export default Header;
