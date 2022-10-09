import "../../utils/Section.css";
import "./Footer.css";

import Button from "../../utils/Button/Button";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer-container section">
      <div className="footer-header">
        <p className="footer-text">Thank you for your time !!</p>
        <Button href="#a">C.V. &darr;</Button>
      </div>
      <hr className="footer-line" />
      <div className="footer-content">
        <div className="footer-nav">
          <a href="#skills-section">skills</a>
          <a href="#projects-section">projects</a>
          <a href="#contact-section">contact</a>
          <a href="#about-section">about</a>
        </div>
        <div className="footer-contact">
          <div>
            <i className="uil uil-phone"> +351 920409213</i>
          </div>
          <div>
            <i className="uil uil-envelope"> acharya.utsav.15@gmail.com</i>
          </div>
        </div>
        <div className="footer-social">
          <a href="./#">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="./#">
            <i className="uil uil-github"></i>
          </a>
          <a href="./#">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
        <div className="footer-copyright">
          Copyright &copy;
          <span className="footer-copyright--name"> Utsav Acharya</span> {date}
        </div>
      </div>
    </div>
  );
};

export default Footer;
