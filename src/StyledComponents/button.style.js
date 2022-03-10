import styled from "styled-components";

const Button = styled.button`
	background-color: ${({ theme }) => theme.text};
	color: white;
	font-family: "Baloo Bhai 2", cursive;
	font-weight: 500;
	line-height: 1.1;
	width: max-content;
	padding: 13px 22px;
	margin: 10px 10px 10px 0;
	border-radius: 0 17px;
	outline: none;
	border: 1px solid ${({ theme }) => theme.text};
	font-size: 15px;
	cursor: pointer;
	letter-spacing: 2px;
	text-align: center;
	text-decoration: none;
	transition: box-shadow 0.2s ease-in;
	position: relative;
	&:hover {
		border-radius: 17px 0;
		/* background-color: ${({ theme }) => theme.jacketColor};
		border: 1px solid ${({ theme }) => theme.jacketColor}; */
		box-shadow: 5px 8px 8px lightgray;
		transition: all 0.5s ease-in-out;
	}
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		filter: blur(22px);
		transform: scale(0.9, 0.8) translateY(20px);
		z-index: -1;
		opacity: 0;
		transition: all 0.6s;
	}
	&:hover::before {
		opacity: 1;
	}
`;

export default Button;
