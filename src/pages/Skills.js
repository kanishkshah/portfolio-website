import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import Proficiency from "../container/Proficiency";
import React from "react";
import SkillsContainer from "../components/SkillsContainer";

const Skills = () => {
	return (
		<Layout page="Skills">
			<Profession />
			<SkillsContainer />
			<Proficiency />
		</Layout>
	);
};

export default Skills;
