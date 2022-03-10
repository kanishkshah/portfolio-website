import "./Header.scss";

import { Bounce, Slide } from "react-reveal";
import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderList from "./HeaderList";
import { Link } from "react-router-dom";
import OutsideClickClose from "../OutsideClickClose/OutsideClickClose";
import { useSelector } from "react-redux";

const Header = ({ isAboutPage }) => {
  const theme = useSelector((state) => state.theme);
  const [open, setOpen] = useState(false); //For hamburger
  const [size, setSize] = useState(window.innerWidth); //For responding to the size change (Media Query)
  const isMobileTablet = 800; //Width for mobiles or tablet

  const onMouseEnter = (e, color) => {
    e.target.style.backgroundColor = color;
  };

  const onMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  const checkSize = () => {
    setSize(window.innerWidth);
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const styleForAboutPage = {
    width: "100vw",
  };

  return (
    <OutsideClickClose setOpen={setOpen}>
      <header
        style={isAboutPage ? styleForAboutPage : {}}
        className={!open ? "header" : "header__mobile"}
      >
        {!open && (
          <Link to="/home">
            <h1 to={Link} tag={Link} className="header__logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span
                className="logo-name"
                style={{
                  color: theme.text,
                  fontFamily: "Agustina Regular",
                  margin: "2px 5px",
                }}
              >
                Kanishk Shah
              </span>
              <span style={{ color: theme.text }}> /&gt;</span>
            </h1>
          </Link>
        )}
        {size > isMobileTablet ? (
          <ul
            className="header__menu"
            style={{ backgroundColor: theme.body, paddingLeft: "0" }}
          >
            <HeaderList
              theme={theme}
              onMouseEnter={onMouseEnter}
              onMouseOut={onMouseOut}
            />
          </ul>
        ) : (
          <div className="header__menu_hamburger">
            <div className="header__hamLogo">
              {open === false ? (
                <GiHamburgerMenu
                  className="hamburger"
                  size={30}
                  onClick={handleOpen}
                />
              ) : (
                <Bounce left delay={500}>
                  <AiOutlineClose
                    className="hamburger"
                    size={30}
                    onClick={handleOpen}
                  />
                </Bounce>
              )}
            </div>

            {open === true ? (
              <ul
                className="header__menu_mobile"
                style={{ backgroundColor: theme.body }}
              >
                <Slide top>
                  <HeaderList
                    theme={theme}
                    onMouseEnter={onMouseEnter}
                    onMouseOut={onMouseOut}
                  />
                </Slide>
              </ul>
            ) : (
              ""
            )}
          </div>
        )}
      </header>
    </OutsideClickClose>
  );
};

export default Header;
