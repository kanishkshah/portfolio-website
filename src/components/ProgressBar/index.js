import React from "react";
import styled from "styled-components";

const ProgressBar = ({ bgColor, progress }) => {
	const [value, setValue] = React.useState(0);
	React.useEffect(() => {
		setTimeout(() => {
			setValue(progress);
		}, 800);
	}, [progress]);

	const ProgressContainer = styled.div`
		height: 20px;
		width: 100%;
		background-color: #e0e0de;
		border-radius: 50px;
		margin: 10px;
	`;
	const ProgressFiller = styled.div`
		height: 100%;
		width: ${value};
		background-color: ${bgColor};
		border-radius: inherit;
		text-align: right;
		transition: all 10s ease-in-out;
	`;

	return (
		<ProgressContainer>
			<ProgressFiller></ProgressFiller>
		</ProgressContainer>
	);
};

export default ProgressBar;
