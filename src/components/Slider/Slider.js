import { useEffect, useState } from "react";
import logos from "../../store/slides";
import "../../utils/Section.css";
import "./Slider.css";

const Slider = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (page >= logos.length / 3 - 1) {
        setPage(0);
      } else {
        setPage(page + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [page]);

  const previousPageHandler = () => {
    if (page < 1) {
      setPage(logos.length / 3 - 1);
    } else {
      setPage((prevState) => prevState - 1);
    }
  };

  const nextPageHandler = () => {
    if (page >= logos.length / 3 - 1) {
      setPage(0);
    } else {
      setPage((prevState) => prevState + 1);
    }
  };

  return (
    <div id="skills-section" className="slider-container section">
      <div className="section-header">
        <h1 className="section-title">SKILLS</h1>
        <p className="section-subtitle">
          Some tools and technologies I am familiar with
        </p>
      </div>
      <div className="slider-content">
        <div className="slider-logos">
          <div
            className="slider-button slider-button--left"
            onClick={previousPageHandler}
          >
            <i className="uil uil-angle-left-b"></i>
          </div>
          {logos.slice(page * 3, page * 3 + 3).map((logo, index) => (
            <img key={index} src={logo} alt="Tools" className={`slider-logo`} />
          ))}
          <div
            className="slider-button slider-button--right"
            onClick={nextPageHandler}
          >
            <i className="uil uil-angle-right-b"></i>
          </div>
        </div>
        <div className="slider-page">
          {logos.slice(0, logos.length / 3).map((_, i) => (
            <div
              key={i}
              className={`slider-dot ${i === page && "slider-dot--show"}`}
              onClick={() => {
                setPage(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
