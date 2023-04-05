import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiMaterialui,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ecommerce</h2>
                <p>
                  I created an ecommerce website using mern stack that is
                  scalable and future. I have used React for frontend & redux
                  for state management, Node JS & Express for backend with
                  MongoDB as database.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://mern-ecommerce-store.herokuapp.com/#container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Harhat18/mern_e-commerce_2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Memories</h2>
                <p>
                  I created a Full Stack MERN Project from start to finish.The
                  App is called "Memories" and it is a simple social media MERN
                  application that allows users to post interesting events that
                  happened in their lives.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://memories-harhat.netlify.app/posts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Harhat18/project_mern_memories-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>ShareFile</h2>
                <p>
                  This is a file sharing project where you can upload a file and
                  share the link with your friend or directly mail the link to
                  anyone from the app.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTypescript />
                </div>
                <div>
                  <a
                    href="https://github.com/Harhat18/sharefile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Github Finder</h2>
                <p>
                  GithubFinder with React Hooks allows user to search for an
                  user on github. Allowing them to view some details like name,
                  avatar, location, bio and repositories list.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://github.com/Harhat18/project_mern_memories-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={img5} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>WatchMe</h2>
                <p>I created movie app showing popular movie.</p>
                <div>
                  <FaReact />
                  <SiNextdotjs />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://watchme-ruby.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Harhat18/watchme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
