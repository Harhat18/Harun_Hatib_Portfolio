import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">Made By Harun Hatiboglu</h3>
          </div>
          <div className="copyright">
            <span>Copyright @2023.All Rights Reserved. </span>
          </div>
        </a>
      </div>
    </>
  );
};
