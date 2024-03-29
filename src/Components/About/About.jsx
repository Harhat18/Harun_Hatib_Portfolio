import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
// import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hi, I am <span className="about__name">Harun Hatiboglu</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right"></p>
        <div className="about__contact center">
          <a
            href="https://github.com/Harhat18"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:harunhatib18@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+905468570541"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/harun-hatib"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            s
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1GA1vsJKo3qiinjv4lUI7Uyd2rpxy2OIU/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />

      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
