import "./index.scss";

import DegreeCard from "../../components/DegreeCard";
import { Fade } from "react-reveal";
import React from "react";
import ViewMore from "../../components/ViewMore";
import { education } from "../../portfolio";

const Degrees = ({ isHome }) => {
	React.useEffect(() => {
		!isHome && window.scrollTo(0, 0);
	}, [isHome]);

	return (
		<div className="degree">
			<Fade duration={2000} top distance="100px">
				<h1 data-aos="fade-down" data-aos-once>
					Degrees
				</h1>
			</Fade>

			<div className="degree__cards">
				{education.map((degree, index) => {
					return (
						<Fade key={index} duration={2000} bottom>
							<DegreeCard degree={degree} />
						</Fade>
					);
				})}
			</div>
			{isHome && <ViewMore to="education" />}
		</div>
	);
};

export default Degrees;
