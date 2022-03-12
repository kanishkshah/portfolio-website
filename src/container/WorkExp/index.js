import "./index.scss";

import ExperienceCard from "../../components/ExperienceCard";
import { Fade } from "react-reveal";
import React from "react";
import { experience } from "../../portfolio";

const WorkExp = ({ isHome }) => {
	React.useEffect(() => {
		!isHome && window.scrollTo(0, 0);
	}, [isHome]);

	return (
		<div className="internship">
			

			<div className="internship__cards">
				{experience.works?.map((work, index) => {
					return (
						<Fade duration={2000} bottom key={index}>
							<ExperienceCard work={work} />
						</Fade>
					);
				})}
			</div>
			{isHome} 
		</div>
	);
};

export default WorkExp;
