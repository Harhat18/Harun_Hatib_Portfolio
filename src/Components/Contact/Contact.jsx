import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/harun-hatib"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Harhat18"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>

            <a
              href="mailto:harunhatib18@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+905468570541" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
            <a
              href="https://wa.me/905468570541"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>harunhatib18@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+905468570541</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
