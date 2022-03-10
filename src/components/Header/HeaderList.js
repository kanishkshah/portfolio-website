import { Link, NavLink } from "react-router-dom";

import React from "react";

const HeaderList = ({ theme, onMouseEnter, onMouseOut }) => {
	return (
		<>
			<li>
				<NavLink
					to="/home"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
					className="header__nav"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/skills"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
					className="header__nav"
				>
					Skills
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/experience"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
					className="header__nav"
				>
					Experience
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/projects"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
					className="header__nav"
				>
					Projects
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/education"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
					className="header__nav"
				>
					Education
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
					className="header__nav"
				>
					About me
				</NavLink>
			</li>
		</>
	);
};

export default HeaderList;
