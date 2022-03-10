import { SiHackerrank, SiLeetcode } from "react-icons/si";

import GFG from "../../assets/Images/gfg.png";
import React from "react";
import { competitiveLinks } from "../../portfolio";

const CompetitiveLinks = () => {
	const getCompetitiveLogo = (link) => {
		const size = 50;
		const style = {
			color: link.backgroundColor,
			objectFit: "contain",
			margin: "5px 10px",
		};
		if (link.name === "HackerRank")
			return <SiHackerrank size={size} style={style} />;
		if (link.name === "GeeksForGeeks")
			return <img src={GFG} alt="" width="50px" style={style} />;
		if (link.name === "Leetcode")
			return <SiLeetcode size={size} style={style} />;
	};
	return (
		<div className="competitive">
			{competitiveLinks.map((link, index) => {
				return (
					<a
						key={index}
						href={link.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{getCompetitiveLogo(link)}
					</a>
				);
			})}
		</div>
	);
};

export default CompetitiveLinks;
