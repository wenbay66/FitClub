import React from "react";
import './Footer.css';
import GitLab from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';
import Instgram from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';

const Footer = () => {

  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitLab} alt="" />
          <img src={Instgram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
    </div>
  )
};

export default Footer;