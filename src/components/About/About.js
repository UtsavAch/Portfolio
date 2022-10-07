import AboutItem from "./AboutItem";
import aboutMe from "../../store/about";
import "../../utils/Section.css";
import "./About.css";

const About = () => {
  return (
    <div id="about-section" className="about-container section">
      <div className="section-header">
        <h1 className="section-title">ABOUT ME</h1>
        <p className="section-subtitle">Know little bit more about me</p>
      </div>
      <div className="about-content--container">
        <div className="about-content">
          {aboutMe.map((item, index) => (
            <AboutItem
              key={index}
              index={index + 1}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
