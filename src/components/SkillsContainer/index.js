import "./index.scss";

import {
  DiGit,
  DiPython,
  DiDjango,
} from "react-icons/di";
import {
  SiTensorflow,
  SiPytorch,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
  SiFlask,
  SiOpencv,
  SiOpenaigym,
  SiJava,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

import { Fade } from "react-reveal";
import React from "react";
import SkillImg from "./SkillImg";
import ViewMore from "../ViewMore";
import { skills } from "../../portfolio";
import { useSelector } from "react-redux";
import { AiOutlineGithub } from "react-icons/ai";

const getSkillLogo = (skill) => {
  const size = 50;
  const style = {
    color: skill?.style?.color,
  };
  if (skill.name === "Python") return <DiPython size={size} style={style} />;
  if (skill.name === "Java") return <SiJava size={size} style={style} />;
  if (skill.name === "Cpp") return <SiCplusplus size={size} style={style} />;
  if (skill.name === "Git") return <DiGit size={size} style={style} />; //+10
  if (skill.name === "Github") return <AiOutlineGithub size = {size} style = {style} />;
  if (skill.name === "Javascript") return <SiJavascript size={size} style={style} />; //-10
  if (skill.name === "Tensorflow") return <SiTensorflow size={size} style={style} />;
  if (skill.name === "Pytorch") return <SiPytorch size={size} style={style} />;
  if (skill.name === "Numpy") return <SiNumpy size={size} style={style} />;
  if (skill.name === "Pandas") return <SiPandas size={size} style={style} />;
  if (skill.name === "Keras") return <SiKeras size={size} style={style} />;
  if (skill.name === "Sklearn") return <SiScikitlearn size={size} style={style} />;
  if (skill.name === "Django") return <DiDjango size={size} style={style} />;
  if (skill.name === "Flask") return <SiFlask size={size} style={style} />;
  if (skill.name === "OpenCV") return <SiOpencv size={size} style={style} />;
  if (skill.name === "OpenAI Gym") return <SiOpenaigym size={size} style={style} />; //-5
  if (skill.name === "MySQL") return <SiMysql size={size} style={style} />;
};

const SkillsContainer = ({ isHome }) => {
  const theme = useSelector((state) => state.theme);

  React.useEffect(() => {
    !isHome && window.scrollTo(0, 0);
  }, [isHome]);

  return (
    <div className="skill">
      <Fade duration={2500} left distance="150px">
        <div className="skill__left" data-aos="fade-right" data-aos-once>
          <SkillImg theme={theme} />
        </div>
      </Fade>
      <Fade duration={2500} right distance="150px">
        <div className="skill__right" data-aos="fade-left" data-aos-once>
          <h5>Tech Stack</h5>
          <div className="skill__container">
            {skills?.skills?.map((skill, index) => {
              return (
                <div className="skill__logos" key={index}>
                  <span className="skill__logo">{getSkillLogo(skill)}</span>
                  <small>{skill.name}</small>
                </div>
              );
            })}
          </div>
          {isHome && <ViewMore to="skills" />}
        </div>
      </Fade>
    </div>
  );
};

export default SkillsContainer;
