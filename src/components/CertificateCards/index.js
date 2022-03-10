import "./index.scss";

import Card from "@material-ui/core/Card";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector } from "react-redux";

const CertificateCard = ({ certificate }) => {
	const { name, author, link, image } = certificate;
	const theme = useSelector((state) => state.theme);
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			style={{ textDecoration: "none" }}
			data-aos="fade-up"
			data-aos-once
		>
			<Tooltip
				title={"View Certificate"}
				arrow
				enterDelay={250}
				leaveDelay={300}
				placement="top"
			>
				<Card style={{ color: theme.text }} className="certificateCards">
					<div className="image">
						<img src={image} alt="" />
					</div>
					<div className="text" style={{ backgroundColor: theme.headerColor }}>
						<h3>{name}</h3>
						<p>- {author}</p>
					</div>
				</Card>
			</Tooltip>
		</a>
	);
};

export default CertificateCard;
