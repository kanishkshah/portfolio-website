import "./index.scss";

import {
  AiFillGithub,
  AiFillHome,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";

import Button from "../../StyledComponents/button.style.js";
import { Fade } from "react-reveal";
import React from "react";
import SocialMedia from "../../components/SocialMedia";
import { useSelector } from "react-redux";

import { aboutMe } from "../../portfolio";

const Contact = ({ isFooter }) => {
  const {
    profilePhoto,
    email,
    phone,
    address,
    resumeLink,
    openForOpportunity,
    message,
    portfolio_repository,
  } = aboutMe;

  const theme = useSelector((state) => state.theme);
  return (
    // <Fade duration={2000} bottom>
    <div className="contact">
      <Fade duration={2000} left distance="200px">
        <div className="contact__image" data-aos="zoom-in" data-aos-once>
          <img
            src={profilePhoto}
            alt=""
            style={{ border: `9px solid ${theme.text}` }}
          />
        </div>
      </Fade>
      <Fade duration={2500} right distance="200px">
        <div className="contact__details" data-aos="zoom-in" data-aos-once>
          <h1>Contact Me!</h1>
          <p>{message}</p>
          <div className="contact__contact">
            <div className="contact__email">
              <AiTwotoneMail />
              <a href={`mailto: ${email}`}>
                <p>{email}</p>
              </a>
            </div>
            <div className="contact__phone">
              <AiFillPhone />
              <a href={`tel: ${phone}`}>
                <p>{phone}</p>
              </a>
            </div>
          </div>
          <div className="contact__address">
            <AiFillHome className="contact__logo" />
            <p>{address}</p>
          </div>
          <div className="contact__open">
            <p>
              Open For Opportunity:{" "}
              <span style={{ fontWeight: "bold" }}>{openForOpportunity}</span>
            </p>
          </div>
          <SocialMedia />
          {!isFooter && (
            <div className="contact__buttons">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <Button>See My Resume</Button>
              </a>
              <a
                href={portfolio_repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button id="contact__button">
                  <AiFillGithub className="contact__github" />{" "}
                  <span>Source Code</span>
                </Button>
              </a>
            </div>
          )}
        </div>
      </Fade>
    </div>
    // </Fade>
  );
};

export default Contact;
