import { useRef } from "react";
import "./AboutItem.css";

const AboutItem = (props) => {
  const aboutItemRef = useRef();

  const hideItemHandler = () => {
    const aboutItems = [...document.getElementsByClassName("about-item")];
    aboutItems.forEach((item) => {
      item.className = "about-item about-item--hide";
    });
    if (aboutItemRef.current.className === "about-item") {
      aboutItemRef.current.className = "about-item about-item--hide";
    } else if (
      aboutItemRef.current.className === "about-item about-item--hide"
    ) {
      aboutItemRef.current.className = "about-item";
    }
  };

  return (
    <div
      ref={aboutItemRef}
      className="about-item about-item--hide"
      onClick={hideItemHandler}
    >
      <div className="about-item--question---container">
        <div className="about-item--index">{props.index})</div>
        <div className="about-item--question">{props.question}</div>
        <i className="about-item--icon uil uil-angle-down"></i>
      </div>
      <div className="about-item--answer">{props.answer}</div>
    </div>
  );
};

export default AboutItem;
