import React, { useState} from "react";
import Preview from "./Preview";

import classes from "./styles/Popup.module.scss";

import { AiFillLayout } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaTimesCircle } from "react-icons/fa";

const Popup = ({ item, active, setActive }) => {
  const [layout, setLayout] = useState(0);

  const [conf, setConf] = useState({
    data: item.html,
    language: "html",
  });

  return (
    <div  className={classes.popup}>
      <div className={classes.tabs}>
        <div className={classes.tabs__menu}>
          <ul className={classes.tabs__menu__item}>
            <li
              className={layout === 0 ? `${classes.active}` : null}
              onClick={() => setLayout(0)}
            >
              <AiFillLayout />
              <span>layout</span>
            </li>
            <li
              className={layout === 1 ? `${classes.active}` : null}
              onClick={() => (
                setLayout(1), setConf({ data: item.html, language: "html" })
              )}
            >
              <AiFillHtml5 />
              <span>html</span>
            </li>
            {item.css.length !== 1 && (
              <li
                className={layout === 2 ? `${classes.active}` : null}
                onClick={() => (
                  setLayout(2), setConf({ data: item.css, language: "css" })
                )}
              >
                <DiCss3Full />
                <span>css</span>
              </li>
            )}
            {item.js.length !== 1 && (
              <li
                className={layout === 3 ? `${classes.active}` : null}
                onClick={() => (
                  setLayout(3),
                  setConf({ data: item.js, language: "javascript" })
                )}
              >
                <SiJavascript />
                <span>Java Script</span>
              </li>
            )}
            {item.git !== "" && (
              <li onClick={() => window.open(item.git, "_blank")}>
                <AiFillGithub />
                <span>git hub</span>
              </li>
            )}
          </ul>
          <FaTimesCircle
            className={classes.close}
            onClick={() => setActive(false)}
          />
        </div>
        <div className={classes.tabs__content}>
          {layout == 0 && <iframe src={item.url} frameBorder="0"></iframe>}
          {(layout == 1 || layout == 2 || layout == 3) && (
            <Preview  conf={conf} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
