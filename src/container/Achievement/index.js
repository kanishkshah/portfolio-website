import "./index.scss";

import AchievementImg from "./AchievementImg";
import { Fade } from "react-reveal";
import React from "react";
import { useSelector } from "react-redux";

import { achievements } from "../../portfolio";

const Achievements = () => {
	const theme = useSelector((state) => state.theme);

	return (
		<div className="achievement" distance="200px">
			<Fade duration={2500} left>
				<div className="achievement__left" data-aos="zoom-in-up" data-aos-once>
					<AchievementImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2500} right distance="200px">
				<div
					className="achievement__right"
					data-aos="zoom-in-down"
					data-aos-once
				>
					<h1>Achievements and Extra Curriculars</h1>
					<ul>
						{achievements.map((achievement, index) => {
							return <li key={index}>{achievement}</li>;
						})}
					</ul>
				</div>
			</Fade>
		</div>
	);
};
export default Achievements;
