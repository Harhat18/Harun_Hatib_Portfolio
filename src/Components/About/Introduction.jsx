import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_logo.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              I am full-stack developer interested in coding, talented in
              developing complex solutions, creating responsive designs, and
              possessing strong creative thinking skills, high energy and
              integrity. I have the ability to effectively develop algorithms,
              interact positively, and communicate appropriately with team
              members.I quickly grasp new technologies and concepts to develop
              innovative and creative solutions to problems. Always ı am willing
              to learn various technologies, tools and libraries. I am
              particularly interested in Front End/Web Development, HTML, CSS,
              JS and React and in Backend/Web Development, Node.JS, Express,
              MongoDB and React. I am lifelong student and excited to learn and
              improve.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
