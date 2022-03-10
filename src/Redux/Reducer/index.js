import { themes } from "../../theme.js";

const initial_state = { theme: themes[0] };

const themeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case "CHANGE_THEME":
			return action.payload;
		default:
			return state;
	}
};

export default themeReducer;
