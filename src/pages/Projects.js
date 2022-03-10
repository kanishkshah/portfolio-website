import Layout from "../Layout/Layout";
import Project from "../container/Project";
import ProjectIntro from "../container/ProjectIntro";
import React from "react";

const Projects = () => {
	return (
		<Layout page="Projects">
			<ProjectIntro />
			<Project />
		</Layout>
	);
};

export default Projects;
