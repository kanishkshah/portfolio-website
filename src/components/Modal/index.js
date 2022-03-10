import "./index.scss";

import React, { useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import { FaCircle } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import changeTheme from "../../Redux/Action/changeTheme";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../theme";
import { useDispatch } from "react-redux";

const useHoverStyles = makeStyles({
	themes: {
		"&:hover, &:focus": {
			backgroundColor: ({ headerColor }) => headerColor,
			transition: "0.3s all ease-in-out",
		},
	},
});
const Modal = ({ theme, show, onClose }) => {
	const headerColor = theme.headerColor;
	const classes = useHoverStyles({ headerColor });

	const closeOnEscapeKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 27) onClose();
	};

	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	});

	const dispatch = useDispatch();
	const handleChangeTheme = (theme) => {
		dispatch(changeTheme({ theme: theme }));
		onClose();
	};

	return (
		<CSSTransition in={show} unmountOnExit timeout={{ enter: 100, exit: 300 }}>
			<div className={`modal ${show ? "modal__show" : ""}`} onClick={onClose}>
				<div
					className="modal__content"
					style={{ backgroundColor: theme.body }}
					onClick={(e) => e.stopPropagation()}
				>
					<button className="modal__close">
						<GrFormClose
							size={30}
							onClick={onClose}
							style={{ color: theme.text }}
						/>
					</button>
					<div
						className="modal__header"
						style={{ backgroundColor: theme.headerColor }}
					>
						<p>Change Theme</p>
					</div>
					<div className="modal__body">
						{themes.map((themeOption, index) => {
							return (
								<div
									className={classes.themes}
									key={index}
									onClick={() => handleChangeTheme(themeOption)}
								>
									<FaCircle
										style={{
											color: themeOption.display,
										}}
										size={40}
									/>
									<span className="modal__name">{themeOption.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default Modal;
