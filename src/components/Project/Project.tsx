import {
  ProjectImage,
  ProjectInfo,
  ProjectItem,
  ProjectList,
  ProjectStyle,
} from "./styled";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getProjectLink, projects, toAssetUrl } from "../../data/project";

const Project = () => {
  return (
    <ProjectStyle>
      <div className="title">
        <b>PROJECT</b>
      </div>

      <ProjectList>
        {projects.map((project) => {
          const projectLink = getProjectLink(project);

          return (
            <ProjectItem key={project.id}>
              <ProjectImage>
                <img
                  src={toAssetUrl(project.image)}
                  alt="project_image"
                  style={{ objectPosition: project.imagePosition }}
                />
              </ProjectImage>
              <ProjectInfo>
                <div>
                  <p>{project.period}</p>
                  <h2 className="project_title">{project.title}</h2>
                  <p className="project_type">{project.type}</p>
                  <div className="project_explain">
                    {project.descriptions.map((description) => (
                      <p key={description}>{description}</p>
                    ))}
                  </div>
                </div>

                {project.sections.map((section) => (
                  <div className="info_container" key={section.title}>
                    <p>{section.title}</p>
                    <ul className="project_role">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="project_skill">
                  {project.skills.map((skill) => (
                    <div key={skill}>{skill}</div>
                  ))}
                </div>

                <div className="link_list">
                  <div className={projectLink ? "redirect" : "redirect disa"}>
                    <a
                      href={projectLink ?? "#"}
                      target={projectLink ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      <p>프로젝트 바로가기</p>
                    </a>
                  </div>

                  {project.github && (
                    <div className="github">
                      <a href={project.github}>
                        <FaGithub />
                        <p>Github</p>
                      </a>
                    </div>
                  )}
                </div>
              </ProjectInfo>
            </ProjectItem>
          );
        })}
      </ProjectList>
    </ProjectStyle>
  );
};

export default Project;
