import React from 'react';
import classes from "./styles/Footer.module.scss";

import { SiFreelancer } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className={classes.footer}>
      <div className={classes.footer__content}>
          <span>© 2022. All rights reserved.</span>
          <div className={classes.footer__content__socials}>
            <a
              href="https://www.facebook.com/braislug1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/ciub-max"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://freelancehunt.com/freelancer/Liemax.html "
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFreelancer />
            </a>
          </div>
      </div>
    
  </footer>
  );
};

export default Footer;
