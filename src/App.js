import { GlobalStyles } from "./globalcss";
import Main from "./container/Main";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
function App() {
	const theme = useSelector((state) => state.theme);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="App">
				<Main />
			</div>
		</ThemeProvider>
	);
}

export default App;
