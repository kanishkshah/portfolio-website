import React from "react";
import "./Waves.scss";
import { useSelector } from "react-redux";

const Waves = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="waves"
      >
        <path
          fill={theme.headerColor}
          fill-opacity="0.5"
          d="M0,128L60,117.3C120,107,240,85,360,117.3C480,149,600,235,720,266.7C840,299,960,277,1080,250.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Waves;
