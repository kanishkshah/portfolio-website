import "./index.scss";

import { Link } from "react-router-dom";
import React from "react";
import { Slide } from "react-reveal";

const ViewMore = ({ to }) => {
	return (
		<Slide right>
			<div
				className="view"
				data-aos="fade-down"
				data-aos-once
				data-aos-offset="100"
			>
				<Link to={`/${to}`} className="view__link">
					View More &gt;&gt;&gt;
				</Link>
			</div>
		</Slide>
	);
};

export default ViewMore;
