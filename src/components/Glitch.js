import React from "react";

import classes from "./styles/Glitch.module.scss"
import classesBtn from "./styles/GlitchBtn.module.scss"

const Glitch = ({type, children}) => {
  return <h1 className={type === 'text' ? `${classes.Glitch}` : `${classesBtn.GlitchBtn}`} data-before={children}>{children}</h1>;
};

export default Glitch;
