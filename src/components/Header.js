import React, { useEffect, useState } from "react";

// import links
import { Link } from "react-router-dom";

// import styles
import classes from "./styles/Header.module.scss";

// import react-icon
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { SiFreelancer } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    heigt: undefined,
  });

  // setting the initial value for the window size when it opens
  size.width = window.innerWidth;

  // setting the value for the window size when it changes
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // hidden menu when window size is larger 768
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  // hidden/show menu
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          cmax
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Resume" onClick={menuToggleHandler}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="Contacts" onClick={menuToggleHandler}>
                Contacts
              </Link>
            </li>
          </ul>
          <div className={classes.header__content__socials}>
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
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
