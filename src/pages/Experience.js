import ExperienceIntro from "../container/ExperienceIntro";
import InternshipExperience from "../container/InternshipExperience";
import Layout from "../Layout/Layout";
import React from "react";
import WorkExp from "../container/WorkExp";

const Experience = () => {
	return (
		<Layout page="Experience">
			<ExperienceIntro />
			<WorkExp />
			<InternshipExperience />
		</Layout>
	);
};

export default Experience;
