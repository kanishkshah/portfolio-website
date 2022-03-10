import Certification from "../container/Certification";
import Degrees from "../container/Degrees";
import EducationIntro from "../container/EducationIntro";
import Layout from "../Layout/Layout";
import React from "react";

const Education = () => {
	return (
		<Layout page="Education">
			<EducationIntro />
			<Degrees />
			<Certification />
		</Layout>
	);
};

export default Education;
