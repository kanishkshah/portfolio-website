import "./index.scss";

import {
	AiFillGithub,
	AiFillInstagram,
	AiOutlineGoogle,
	AiOutlineTwitter,
} from "react-icons/ai";

import { GrFacebookOption } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
	&:hover > * {
		background-color: #000 !important;
		transition: 0.3s ease-in;
	}
`;
const SocialMedia = () => {
	const getSocialMediaComponent = (media) => {
		const size = 40;

		const style = {
			fill: "white",
			backgroundColor: media.backgroundColor,
			padding: "5px",
			borderRadius: "50%",
			margin: "5px",
		};

		if (media.name === "Github")
			return <AiFillGithub size={size} style={style} />;
		if (media.name === "LinkedIn")
			return <TiSocialLinkedin size={size} style={style} />;
		if (media.name === "Facebook")
			return <GrFacebookOption size={size} style={style} />;
		if (media.name === "Instagram")
			return <AiFillInstagram size={size} style={style} />;
		if (media.name === "Twitter")
			return <AiOutlineTwitter size={size} style={style} />;
		if (media.name === "Gmail")
			return <AiOutlineGoogle size={size} style={style} />;
		if (media.name === "Telephone") return <MdCall size={size} style={style} />;
	};

	return (
		<div className="socialmedia">
			{socialMediaLinks?.map((media, index) => {
				return (
					<a
						key={index}
						href={media.link}
						target={media.name === "Telephone" ? "_self" : "_blank"}
						rel="noopener noreferrer"
						className="socialmedia__links"
					>
						<IconWrapper>{getSocialMediaComponent(media)}</IconWrapper>
					</a>
				);
			})}
		</div>
	);
};

export default SocialMedia;
