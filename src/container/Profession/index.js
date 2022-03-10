import "./index.scss";

import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import React from "react";
import { skills } from "../../portfolio";
import { useSelector } from "react-redux";

const Profession = () => {
	const theme = useSelector((state) => state.theme);
	return (
		<div className="profession">
			<Fade duration={2500} left distance="200px">
				<div className="profession__left">
					<FullStackImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2500} right distance="200px">
				<div className="profession__right">
					<h1 className="profession__heading">What I DO?</h1>

					<ul className="profession__descriptions">
						{skills?.descriptions?.map((description, index) => {
							return (
								<li
									key={index}
									style={{ color: theme.secondaryText }}
									className="profession__description"
								>
									{description}
								</li>
							);
						})}
					</ul>
				</div>
			</Fade>
		</div>
	);
};

export default Profession;
