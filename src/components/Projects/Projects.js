import ProjectItem from "./ProjectItem";
import projects from "../../store/projects";
import "../../utils/Section.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects-section" className="projects-container section">
      <div className="section-header">
        <h1 className="section-title">PROJECTS</h1>
        <p className="section-subtitle">
          You can have a look at some of my latest projects
        </p>
      </div>
      <div className="projects-content">
        {projects.map((item, index) => (
          <ProjectItem
            key={index}
            index={index + 1}
            title={item.title}
            description={item.description}
            code={item.code}
            visit={item.visit}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
