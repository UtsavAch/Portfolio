import { useState } from "react";
import Button from "../../utils/Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState("");
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", (e) => {
    const headerSection = document.getElementById("header-section");
    if (window.pageYOffset >= headerSection.clientHeight) {
      setSticky("navbar-container--sticky");
    } else if (window.pageYOffset < headerSection.clientHeight) {
      setSticky("");
    }
  });

  const navbarToggleHandler = () => {
    setShow((prevState) => !prevState);
  };

  const hideNavbarHandler = () => {
    setShow(false);
  };

  return (
    <div
      className={`navbar-container ${sticky} ${
        show ? "navbar-show" : "navbar-close"
      }`}
    >
      <a
        className="navbar-logo"
        href="#header-section"
        onClick={hideNavbarHandler}
      >
        U<span className="logo-letter">t</span>sav
      </a>
      <div className="navbar-links">
        <a
          className="navbar-link"
          href="#skills-section"
          onClick={hideNavbarHandler}
        >
          skills
        </a>
        <a
          className="navbar-link"
          href="#projects-section"
          onClick={hideNavbarHandler}
        >
          projects
        </a>
        <a
          className="navbar-link"
          href="#contact-section"
          onClick={hideNavbarHandler}
        >
          contact
        </a>
        <a
          className="navbar-link"
          href="#about-section"
          onClick={hideNavbarHandler}
        >
          about
        </a>
        <Button href="#a">C.V. &darr;</Button>
      </div>
      <div className="navbar-toggle" onClick={navbarToggleHandler}>
        {!show && <i className="uil uil-bars navbar-toggle--open"></i>}
        {show && <i className="uil uil-multiply navbar-toggle--close"></i>}
      </div>
    </div>
  );
};

export default Navbar;
