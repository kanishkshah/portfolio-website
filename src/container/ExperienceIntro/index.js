import "./index.scss";

import ExperienceImg from "./ExperienceImg";
import { Fade } from "react-reveal";
import React from "react";
import { useSelector } from "react-redux";

import { experience } from "../../portfolio";

const ExperienceIntro = () => {
	const theme = useSelector((state) => state.theme);

	return (
		<div className="experience">
			<Fade duration={2500} left distance="200px">
				<div className="experience__left" data-aos="fade-right" data-aos-once>
					<ExperienceImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2500} right distance="200px">
				<div className="experience__right" data-aos="fade-left" data-aos-once>
					<h1>Experience</h1>
					<div className="experience__description">
						{experience?.descriptions?.map((description, index) => {
							return (
								<p key={index} style={{ color: theme.secondaryText }}>
									{description}
								</p>
							);
						})}
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default ExperienceIntro;
