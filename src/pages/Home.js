import Degrees from "../container/Degrees";
import InternshipExperience from "../container/InternshipExperience";
import Introduction from "../container/Introduction/Introduction";
import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import Project from "../container/Project";
import React from "react";
import SkillsContainer from "../components/SkillsContainer";
import WorkExp from "../container/WorkExp";

const Home = () => {
	const isHome = true;
	return (
		<div>
			<Layout page="Home">
				<Introduction isHome={isHome} />
				<Profession />
				<SkillsContainer isHome={isHome} />
				<WorkExp isHome={isHome} />
				<InternshipExperience isHome={isHome} />
				<Project isHome={isHome} limit={6} />
				<Degrees isHome={isHome} />
			</Layout>
		</div>
	);
};

export default Home;
