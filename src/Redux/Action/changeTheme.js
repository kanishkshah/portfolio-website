const changeTheme = (newTheme) => {
	return {
		type: "CHANGE_THEME",
		payload: newTheme,
	};
};

export default changeTheme;
