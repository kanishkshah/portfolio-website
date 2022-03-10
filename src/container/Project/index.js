import "./index.scss";

import Button from "../../StyledComponents/button.style.js";
import { Fade } from "react-reveal";
import ProjectCards from "../../components/ProjectCards";
import React from "react";
import ViewMore from "../../components/ViewMore";
import { aboutMe } from "../../portfolio";
import { projects } from "../../portfolio";

<Fade duration={2000} bottom></Fade>;

const Project = ({ isHome }) => {
  React.useEffect(() => {
    !isHome && window.scrollTo(0, 0);
  }, [isHome]);

  return (
    <div className="project">
      <Fade duration={2000} top distance="100px">
        <h1 data-aos="fade-down" data-aos-once>
          Projects
        </h1>
      </Fade>
      <Fade duration={2000} fraction={0.1} bottom distance="200px">
        <div className="project__cards">
          {projects?.limit && isHome
            ? projects.projects
                .slice(0, projects?.limit)
                .map((project, index) => {
                  return <ProjectCards project={project} key={index} />;
                })
            : projects.projects.map((project, index) => {
                return <ProjectCards project={project} key={index} />;
              })}
          {}
        </div>
      </Fade>

      {!isHome && (
        <a
          href={aboutMe.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project__buttons"
        >
          <Button>More Projects</Button>
        </a>
      )}
      {isHome && <ViewMore to="projects" />}
    </div>
  );
};

export default Project;
