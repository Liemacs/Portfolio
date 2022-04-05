import React from "react";
import { Typewriter } from "react-simple-typewriter";


const DynamicText = ({children}) => {
  return (
    <Typewriter
      loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      words={children}
    />
  );
};

export default DynamicText;
