import React from "react";
import Glitch from "../components/Glitch";
import DynamicText from "../components/DynamicText";

import classes from "./stylePages/NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={classes.notFound}>
        <Glitch type='text'>{404}</Glitch>
        <span className={classes.notFound__typeWriter}>
          <DynamicText>
            {["Oops! That page can’t be found."]}
          </DynamicText>
        </span>
    </div>
  );
};

export default NotFoundPage;
