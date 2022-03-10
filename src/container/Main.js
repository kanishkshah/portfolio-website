import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutMe from "../pages/AboutMe";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import React from "react";
import Skills from "../pages/Skills";

const Main = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/skills" render={() => <Skills />} />
					<Route exact path="/experience" render={() => <Experience />} />
					<Route exact path="/projects" render={() => <Projects />} />
					<Route exact path="/education" render={() => <Education />} />
					<Route exact path="/about" render={() => <AboutMe />} />
					<Route exact path="/home" render={() => <Home />} />
					<Route exact path="/" render={() => <Home />} />
				</Switch>
			</Router>
		</div>
	);
};

export default Main;
