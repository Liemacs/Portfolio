import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import DynamicText from "../components/DynamicText";
import Glitch from "../components/Glitch";
import classes from "./stylePages/Contacts.module.scss";

import { AiFillPhone } from "react-icons/ai";
import { SiMaildotru } from "react-icons/si";
import { FaPaperPlane } from "react-icons/fa";

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
    };
  })(),
  true
);

const Contacts = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [send, setSend] = useState(false);

  const toggleSend = () => {
    setSend(!send);
  };

  useEffect(() => {
    if (send === true) {
      const timer = setTimeout(() => {
        document.getElementById("iconStyle").style.display = "none";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [send]);

  useEffect(() => {
    document.getElementById("name").classList.remove("inputText");
    setIsValid(false);
  }, [inputName]);

  useEffect(() => {
    document.getElementById("email").classList.remove("inputText");
    setIsValid(false);
  }, [inputEmail]);

  const checkTextInput = () => {
    if (inputName === "" && inputEmail === "") {
      document.getElementById("name").classList.add("inputText");
      document.getElementById("email").classList.add("inputText");
      return setIsValid(true);
    } else if (inputName === "") {
      document.getElementById("email").classList.remove("inputText");
      document.getElementById("name").classList.add("inputText");
      return setIsValid(true);
    } else if (
      (inputEmail === "" && !inputEmail.includes("@")) ||
      !inputEmail.includes("@")
    ) {
      document.getElementById("name").classList.remove("inputText");
      document.getElementById("email").classList.add("inputText");
      return setIsValid(true);
    } else {
      toggleSend();
      setTimeout(() => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("sendBtn").disabled = true;
      }, 10);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzzkplc",
        "template_pmic82h",
        form.current,
        "w69Y_igKHkkPHsLUe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.contacts}>
      <div className={classes.contacts__section}>
        <h1 className={classes.contacts__section__title}>Contacts</h1>
        <span className={classes.contacts__section__typeWriter}>
          <DynamicText>
            {[
              "I am available for Freelance hire.",
              "Develop together with you.",
            ]}
          </DynamicText>
        </span>
      </div>
      <div className={classes.contacts__info}>
        <h4>contacts info</h4>
        <div className={classes.contacts__info__box}>
          <div className={classes.contacts__info__box__data}>
            <p>
              <AiFillPhone size="35px" className={classes.iconStyle} />
              Phone
            </p>
            +373 (60) 53 10 17
          </div>
          <div className={classes.contacts__info__box__data}>
            <p>
              <SiMaildotru size="35px" className={classes.iconStyle} />
              Email
            </p>
            ciubari@mail.ru
          </div>
        </div>
      </div>

      <form className={classes.contacts__form} ref={form} onSubmit={sendEmail}>
        <h4>hire me</h4>
        <input
          type="text"
          autoComplete="off"
          id="name"
          name="user_name"
          placeholder="Name"
          readOnly={send ? true : false}
          required
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="email"
          autoComplete="off"
          id="email"
          name="user_email"
          placeholder="Email"
          readOnly={send ? true : false}
          required
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Message"
          readOnly={send ? true : false}
        ></textarea>
        {isValid && (
          <span>
            One or more fields have an error. Please check and try again.
          </span>
        )}
        <button
          className={send ? classes.clicked : ""}
          id="sendBtn"
          onClick={() => {
            checkTextInput();
          }}
        >
          <Glitch type="btn">Send Message</Glitch>
          <FaPaperPlane
            size="18"
            className={classes.iconStyle}
            id="iconStyle"
          />
        </button>
      </form>
    </div>
  );
};

export default Contacts;
