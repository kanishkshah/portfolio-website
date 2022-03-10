import "./index.scss";

import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { IoColorPalette } from "react-icons/io5";
import Modal from "../Modal";
import { useSelector } from "react-redux";

// import { FaPaintBrush } from "react-icons/fa";




const ChangeTheme = () => {
	const theme = useSelector((state) => state.theme);
	const [show, setShow] = useState(false);
	show ? disableBodyScroll(document) : enableBodyScroll(document);

	return (
		<div>
			<div
				className="themeChanger"
				onClick={() => {
					setShow(true);
				}}
			>
				{/* <FaPaintBrush
						style={{
							color: theme.text,
						}}
						size={40}
					/> */}
				<IoColorPalette
					style={{
						color: theme.text,
					}}
					size={55}
				/>
			</div>
			<Modal theme={theme} show={show} onClose={() => setShow(false)} />
		</div>
	);
};

export default ChangeTheme;
