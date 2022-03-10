import "./index.scss";

import { Fade } from "react-reveal";
import ProgressBar from "../../components/ProgressBar";
import React from "react";
import { skills } from "../../portfolio";
import { useSelector } from "react-redux";

const Proficiency = () => {
	const theme = useSelector((state) => state.theme);
	return (
		<div className="proficiency">
			<Fade duration={2500} top distance="100px">
				<h5 data-aos="fade-down" data-aos-once>
					Proficiency
				</h5>
			</Fade>
			<div className="proficiency__container">
				{skills?.proficiency?.map((skill, index) => {
					return (
						<Fade duration={2500} bottom distance="200px">
							<div
								key={index}
								className="proficiency__progressDiv"
								data-aos="fade-up"
								data-aos-once
							>
								<p>{skill.skills}</p>
								<ProgressBar
									bgColor={theme.text}
									progress={skill.proficiency}
								/>
							</div>
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default Proficiency;
