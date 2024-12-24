import React from "react";

// import styles
import classes from "./styles/Footer.module.scss";

// import react-icon
import { SiFreelancer, SiInstagram } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

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
            href="https://freelancehunt.com/freelancer/Liemax.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFreelancer />
          </a>
          <a
            href="https://www.instagram.com/liemacs/profilecard/?igsh=MWVuNTd4bndtNXFodw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
