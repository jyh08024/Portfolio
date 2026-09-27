import { Fragment } from "react";
import { CareerItem, CareerList, CareerStyle } from "./styled";
import { careers, CareerProject } from "../../data/career";

const renderProjects = (projects: CareerProject[]) =>
  projects.map((project) => (
    <Fragment key={project.title}>
      <div className="resultItem">
        <div>
          <p className="result">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </p>
        </div>
        {project.period && (
          <div>
            <p className="period">{project.period}</p>
          </div>
        )}
        {project.descriptions?.map((description) => (
          <div key={description}>
            <p className="result_ex">{description}</p>
          </div>
        ))}
        {project.tasks?.map((task) => (
          <div key={task}>
            <p className="result_ex">- {task}</p>
          </div>
        ))}
        {project.stacks?.map((stack) => (
          <div key={stack}>
            <p className="result_ex">기술스택: {stack}</p>
          </div>
        ))}
      </div>

      <div></div>
    </Fragment>
  ));

const Career = () => {
  return (
    <CareerStyle>
      <div className="career_header">
        <p className="title">
          <b>경력사항 (CAREER)</b>
        </p>
      </div>
      <div className="career_header"></div>
      <CareerList>
        {careers.map((career, index) => (
          <CareerItem key={career.name}>
            {index > 0 && <div></div>}
            <div>
              <p className="period">{career.period}</p>
            </div>
            <div>
              <p className="company">
                {career.link ? (
                  <a href={career.link} target="_blank" rel="noreferrer">
                    {career.name}
                  </a>
                ) : (
                  career.name
                )}
              </p>
            </div>
            <div>
              <p className="position">{career.position}</p>
            </div>
            <div>
              <p className="explain">{career.description}</p>
            </div>

            {renderProjects(career.projects)}
          </CareerItem>
        ))}
      </CareerList>
    </CareerStyle>
  );
};

export default Career;
