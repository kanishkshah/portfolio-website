import "./index.scss";

import { Fade } from "react-reveal";
import ProjectImg from "./ProjectsImg";
import React from "react";
import { useSelector } from "react-redux";

import { projects } from "../../portfolio";

const ProjectIntro = () => {
	const theme = useSelector((state) => state.theme);
	return (
		<div className="projectintro">
			<Fade duration={2500} left distance="200px">
				<div className="projectintro__left" data-aos="fade-right" data-aos-once>
					<ProjectImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2500} right distance="200px">
				<div className="projectintro__right" data-aos="fade-left" data-aos-once>
					<h1>Projects</h1>
					<p style={{ color: theme.secondaryText }}>{projects.description}</p>
				</div>
			</Fade>
		</div>
	);
};

export default ProjectIntro;
