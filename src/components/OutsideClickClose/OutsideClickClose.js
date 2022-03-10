import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";

function useOutsideAlerter(ref, setOpen) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, setOpen]);
}

function OutsideClickClose(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props.setOpen);

	return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideClickClose.propTypes = {
	children: PropTypes.element.isRequired,
};

export default OutsideClickClose;
