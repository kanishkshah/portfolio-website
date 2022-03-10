import "./Introduction.scss";

import Button from "../../StyledComponents/button.style.js";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { Link } from "react-router-dom";
import React from "react";
import SocialMedia from "../../components/SocialMedia/";
import { greeting } from "../../portfolio";
import { useSelector } from "react-redux";

const Introduction = () => {
  const { title, subTitle, resumeLink, profilePhoto } = greeting;
  const theme = useSelector((state) => state.theme);
  return (
    <Fade duration={2000} bottom>
      <div className="introduction" data-aos="fade-up" data-aos-once>
        <div className="introduction__text">
          <div className="introduction__image">
            <img
              src={profilePhoto}
              alt=""
              style={{ border: `9px solid ${theme.text}` }}
            />
          </div>
          <h1>{title}</h1>
          <p style={{ color: theme.secondaryText }}>{subTitle}</p>
          <SocialMedia />
          <div className="buttons">
            <Link to="/about">
              <Button>Contact me</Button>
            </Link>

            <a href={resumeLink} target="_blank" rel="noreferrer">
              <Button>Resume</Button>
            </a>
          </div>
        </div>
        <div className="introduction__img">
          <FeelingProud theme={theme} />
        </div>
      </div>
    </Fade>
  );
};

export default Introduction;
