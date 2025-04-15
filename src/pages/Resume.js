import React, { useState, useEffect, useLayoutEffect } from "react";

// import components
import { Glitch, DynamicText, Card } from "../components";

// import SMTP mailer
import emailjs from "@emailjs/browser";

// import slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import styles
import classes from "./stylePages/Resume.module.scss";

// import react-icon
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiVmware,
} from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { MdVolunteerActivism } from "react-icons/md";
import { FaFire, FaBrain } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Data from "../assets/projects.js";

// import my CV
import cv from "./../assets/cv.pdf";

const Resume = () => {
  const [items] = useState(Data);

  const [size, setSize] = useState({ width: undefined });
  const [itemData, setItemData] = useState(items[1]);
  const [active, setActive] = useState(false);

  const list = items.map((item, index) => (
    <Card
      item={item}
      setItemData={setItemData}
      setActive={setActive}
      key={`${item.id}_${index}`}
    />
  ));

  size.width = window.innerWidth;

  // write the screen width change
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("Se trimite email...");
    emailjs
      .send(
        "service_lzzkplc",
        "template_pmic82h",
        { message: "Cineva a vizionat CV-ul" },
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
  }, [])

  return (
    <div className={classes.resume}>
      <div className={classes.resume__section}>
        <h1 className={classes.resume__section__title}>Ciubari Maxim</h1>
        <span className={classes.resume__section__typeWriter}>
          <DynamicText>
            {[
              "I love my job.",
              "Smile, you have found the right candidate.",
              "Passionate about coding and creating solutions.",
              "Ready to tackle challenges with a positive mindset.",
              "Innovation and efficiency are my priorities.",
              "Driven to deliver high-quality results.",
              "Teamwork makes the dream work!",
              "Always learning, always growing.",
              "Let’s build something amazing together.",
              "Your success is my mission.",
            ]}
          </DynamicText>
        </span>
      </div>
      <div className={classes.resume__about}>
        <h4>About</h4>
        <div className={classes.resume__about__content}>
          <div className={classes.resume__about__content__img}>
            <img src={require("./../assets/img/avatar.jpeg")} alt="avatar" />
          </div>
          <div className={classes.resume__about__content__info}>
            <p>
              "Full Stack Developer specialized in Laravel, with experience in
              building scalable and efficient web applications. Skilled in
              backend development and frontend technologies. Proficient in
              optimizing processes and solving complex problems, committed to
              project success and delivering solutions that add value to the
              team and organization."
            </p>
            <div className={classes.resume__about__content__info__data}>
              <div>
                <span>Age:</span>
                <p>24</p>
              </div>
              <div>
                <span>Phone:</span>
                <p>+373 60 53 1017</p>
              </div>
              <div>
                <span>Position:</span>
                <p>Full Stack Developer</p>
              </div>
              <div>
                <span>Email:</span>
                <p>ciubari@mail.ru</p>
              </div>
            </div>
            <a
              className={classes.link}
              href={cv}
              download="CV_Ciubari_Maxim.pdf"
            >
              <Glitch type="btn">Download CV</Glitch>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.resume__skills}>
        <h4>Coding skills</h4>
        <div className={classes.resume__skills__box}>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>PHP(Laravel)</h3>
              <span>60%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_60}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>HTML/CSS</h3>
              <span>90%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_90}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>SCSS/SASS</h3>
              <span>90%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_90}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>GSAP</h3>
              <span>20%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_20}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Java Script</h3>
              <span>40%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_40}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Vue.js</h3>
              <span>40%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_40}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>React</h3>
              <span>40%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_40}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>MSSQL/MySQL</h3>
              <span>70%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_70}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Docker</h3>
              <span>40%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_40}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Shell/Bash</h3>
              <span>50%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_50}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Java</h3>
              <span>30%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_30}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Linux/Rocky/Ubuntu</h3>
              <span>50%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_50}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Yaml</h3>
              <span>50%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_50}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>SAST/DAST/Depend</h3>
              <span>50%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_50}`}
              ></div>
            </div>
          </div>
          <div className={classes.resume__skills__box__skillBar}>
            <div>
              <h3>Gitlab/Github</h3>
              <span>80%</span>
            </div>
            <div className={classes.resume__skills__box__skillBar__container}>
              <div
                className={`${classes.resume__skills__box__skillBar__container__value} ${classes.value_80}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.resume__projects}>
        <h4>Portfolio</h4>
        <div className={classes.cards}>{list}</div>
      </div>
      <div className={classes.resume__activity}>
        <div className={classes.resume__activity__groups}>
          <h4>EXPERIENCE</h4>
          <div className={classes.resume__activity__groups__data}>
            <div>
              <h5>01.03.2024 - Present</h5>
              <h6>Preon Mode - Full Stack developer</h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                • Full-stack development using React, Laravel, Vue.js, MySQL,
                and JavaScript.
                <br />
                • Responsible for architecture, scalability and code quality of
                web projects.
                <br />
                • Integrating client-specific solutions, API connections, and
                third-party tools (e.g. JetStream, Postman).
                <br />
                • Website design (UI/UX) and deployment on modern hosting
                platforms.
                <br />
                • Performance optimization and best practices in modern web
                development.
                <br />• Leading technical planning and execution for Preon
                Mode's digital direction.
              </h6>
            </div>
            <div>
              <h5>25.10.2021 - 18.01.2025</h5>
              <h6>Edifecs - DevOps Developer</h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                • Unix Systems Administration: Linux, Rocky, Ubuntu.<br></br>•
                Process Automation: Using YAML. <br></br>• CI/CD Solutions
                Implementation.<br></br>• Container Management: Creating and
                managing Docker containers.<br></br>• Virtual Machine
                Configuration: VMware vRealize Automation 8 (vRA8).<br></br>•
                Shell/Bash Scripting: Creating and implementing scripts for
                various OS.<br></br>• Version Control Tools: Git, SVN.<br></br>•
                Security Tools: SAST, DAST, and Dependency Scanners.
              </h6>
            </div>
            <div>
              <h5>19.08.2020 - 22.10.2021</h5>
              <h6>Content Manager - Enter</h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                • Testing website updates. <br></br>• Bug reports in the
                management tool like Bitrix24.<br></br>• Working in Adobe
                Photoshop.<br></br>• Adding new products to the sites (Photo in
                .png, info about product, video).<br></br>• Working with 1C.
              </h6>
            </div>
          </div>
        </div>
        <div className={classes.resume__activity__groups}>
          <h4>EDUCATION</h4>
          <div className={classes.resume__activity__groups__data}>
            <div>
              <h5>2020 - 2022</h5>
              <h6>Software Engineer</h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                IT Academy Step
              </h6>
            </div>
            <div>
              <h5>2022</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/learning/certificates/fa130164c6ed902f7f1630510deb231b434b7d4e5aeb4c7456ad1317d3b3c049?trk=share_certificate"
              >
                SQL Essential Training <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Linkedin Learning
              </h6>
            </div>
            <div>
              <h5>2022</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/learning/certificates/33ed0f5fe611aeb8c1895276bf8de475d871675635d05d3f30bfaebdb9a57fb5?trk=share_certificate"
              >
                XML Essential Training <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Linkedin Learning
              </h6>
            </div>
            <div>
              <h5>2021</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/learning/certificates/172ac536a5f31541cdff3923cbb8d720e9c0a74376a07c87bb62c9c70aa894b7?u=2046028"
              >
                Gradle Training <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Linkedin Learning
              </h6>
            </div>
            <div>
              <h5>2021</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/learning/certificates/7fac68ff21f70380cfebaedfeea18faeca5356d6d5c6cbd2c27bd7a20ce20081?trk=share_certificate"
              >
                Groovy Training <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Linkedin Learning
              </h6>
            </div>
            <div>
              <h5>2021</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/learning/certificates/e934428524d9968ad208b4ecf6aa901fda48daf3bfd788f2b8d6c504c3eb8fbe?u=2046028"
              >
                Continuous Delivery with GitLab <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Linkedin Learning
              </h6>
            </div>
            <div>
              <h5>2021</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/learning/certificates/0d8f944e68f29fec0a4710339d44f8e8ef1be925f44303c233c51c01ea376ddd?u=2046028"
              >
                GitLab Training <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Linkedin Learning
              </h6>
            </div>
            <div>
              <h5>2021</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1km_1y67tuS6VT6IdhGIhtW8q9xZjoMqP/view"
              >
                IT Essentials Cisco <FiExternalLink size="10" />
              </a>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                IT Academy Step
              </h6>
            </div>
          </div>
        </div>
        <div className={classes.resume__activity__groups}>
          <h4>Volunteering </h4>
          <div className={classes.resume__activity__groups__data}>
            <div>
              <h5>2012 - Present</h5>
              <h6>Lider</h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                National Scout Association of Moldova
              </h6>
            </div>
            <div>
              <h5>2019 - 2020</h5>
              <h6>
                Coordonator - RVC <br /> (Republican Volunteer Center)
              </h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Useful Drawing - This is my own project, which I created
                together with my colleagues, aimed for children from families at
                risk, to spend time after school usefully and to create new
                skills in the field of art, even to find new friends.
              </h6>
            </div>
            <div>
              <h5>2017 - 2019</h5>
              <h6>
                Volunteer - RVC <br /> (Republican Volunteer Center)
              </h6>
              <h6
                className={classes.resume__activity__groups__data__description}
              >
                Sun Rice - Training and development of skills necessary for
                personal autonomy and practical one, among children with
                disabilities, aged between 5 and 10 years, from recovery
                centers, for their social inclusion.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.resume__apps}>
        <h4>Applications</h4>
        <Slider
          slidesToShow={size.width < 650 ? (size.width < 375 ? 1 : 2) : 3}
          autoplaySpeed={0}
          autoplay
          infinite
          className={classes.resume__apps__carousel}
          cssEase="ease-in-out"
          speed={2000}
        >
          <div
            className={`${classes.resume__apps__carousel__item} ${classes.degr_50}`}
          >
            <span>
              <SiAdobephotoshop size="60" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className={`${classes.resume__apps__carousel__item} ${classes.degr_80}`}
          >
            <span>
              <CgFigma size="60" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className={`${classes.resume__apps__carousel__item} ${classes.degr_40}`}
          >
            <span>
              <SiAdobeillustrator size="60" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className={`${classes.resume__apps__carousel__item} ${classes.degr_50}`}
          >
            <span>
              <SiAdobexd size="60" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className={`${classes.resume__apps__carousel__item} ${classes.degr_80}`}
          >
            <span>
              <FaGitlab size="60" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className={`${classes.resume__apps__carousel__item} ${classes.degr_50}`}
          >
            <span>
              <SiVmware size="60" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
        </Slider>
      </div>
      <div className={classes.resume__interests}>
        <h4>interests</h4>
        <div className={classes.resume__interests__content}>
          <div className={classes.resume__interests__content__item}>
            <h3>
              <MdVolunteerActivism size="30px" className={classes.iconStyle} />
              Volunteering
            </h3>
            <p>
              Sometimes it makes me happy when I can make someone else smile.
            </p>
          </div>
          <div className={classes.resume__interests__content__item}>
            <h3>
              <FaFire size="30px" className={classes.iconStyle} />
              Camping
            </h3>
            <p>
              I love to spend time at the fire with my friends, to play guitar
              songs and tell various stories from the past.
            </p>
          </div>
          <div className={classes.resume__interests__content__item}>
            <h3>
              <FaBrain size="30px" className={classes.iconStyle} />
              Learn new things
            </h3>
            <p>
              "Pump your brains" - I am fascinated by new things, especially in
              the world of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
