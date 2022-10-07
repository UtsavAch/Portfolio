import "./ProjectItem.css";

const ProjectItem = (props) => {
  return (
    <div
      className={`project-item ${
        props.index % 2 === 0 && "project-item--even"
      }`}
    >
      <div className="project-item--content">
        <div className="project-title">{props.title}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-links">
          <a href={props.code} className="project-link">
            code <i className="uil uil-github-alt"></i>
          </a>
          <a href={props.visit} className="project-link">
            visit <i className="uil uil-eye"></i>
          </a>
        </div>
        <div className="project-index">{props.index}</div>
      </div>
      <div className="project-item--image">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default ProjectItem;
