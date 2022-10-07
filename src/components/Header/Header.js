import Button from "../../utils/Button/Button";
import "../../utils/Section.css";
import "./Header.css";

const Header = () => {
  return (
    <div id="header-section" className="header-container">
      <div className="header-intro">
        <div className="header-intro--title">Hello! I am Utsav</div>
        <p className="header-intro--paragraph">
          I am a self taught web developer in Portugal looking for an entry
          level job. My experience lies mainly on html, css, JavaScript,
          node.js, mongoDB and React.
        </p>
        <Button href="#">Contact Me</Button>
      </div>
      <div className="header-image">
        <img
          className="header-image--profile"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
          alt="Profile"
        />
      </div>
      <div className="header-circle header-circle--medium"></div>
      <div className="header-circle header-circle--small"></div>
      <div className="learn-more">Scroll down &darr;</div>
    </div>
  );
};

export default Header;
