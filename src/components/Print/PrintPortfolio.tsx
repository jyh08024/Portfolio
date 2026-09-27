import { Fragment, useEffect } from "react";
import { PrintGlobalStyle, Sheet, Toolbar } from "./styled";
import PrintImage from "./PrintImage";
import { profile } from "../../data/profile";
import { careers } from "../../data/career";
import { projects, toAssetUrl } from "../../data/project";
import { activities } from "../../data/activity";

// 인쇄물에는 로컬 주소 대신 항상 배포된 사이트 주소를 표시
const getGalleryUrl = (projectId: string) =>
  `${profile.siteUrl}?gallery=${projectId}`;

// 웹 화면용으로 줄 단위로 나눠 둔 문장을 인쇄용으로 이어 붙임
const joinLines = (lines: string[] = []) => lines.join(" ");

const PrintPortfolio = () => {
  useEffect(() => {
    const prevTitle = document.title;
    // PDF로 저장할 때 기본 파일명으로 사용됨
    document.title = `${profile.name}_포트폴리오`;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <PrintGlobalStyle />

      <Toolbar>
        <button type="button" onClick={() => window.print()}>
          인쇄 / PDF로 저장
        </button>
        <a href={`${process.env.PUBLIC_URL}/`}>사이트로 돌아가기</a>
        <p>인쇄 설정에서 "배경 그래픽"을 켜면 강조 색상까지 함께 저장됩니다.</p>
      </Toolbar>

      <Sheet>
        <header className="profile">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <div className="summary">
            {profile.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="contact">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            {profile.links.map((link) => (
              <a key={link.url} href={link.url}>
                {link.label}: {link.url}
              </a>
            ))}
          </div>
        </header>

        <section className="section">
          <h2 className="section_title">CAREER</h2>
          {careers.map((career) => (
            <article className="company" key={career.name}>
              <div className="company_head">
                <h3>
                  {career.name} <span className="meta">{career.position}</span>
                </h3>
                <span className="meta">{career.period}</span>
              </div>
              <p className="company_desc">{career.description}</p>

              {career.projects.map((project) => (
                <div className="career_project" key={project.title}>
                  <div className="career_project_head">
                    <h4>
                      {project.link ? (
                        <a href={project.link}>{project.title}</a>
                      ) : (
                        project.title
                      )}
                    </h4>
                    {project.period && (
                      <span className="meta">{project.period}</span>
                    )}
                  </div>
                  {project.link && (
                    <p className="stack">
                      Service: <a href={project.link}>{project.link}</a>
                    </p>
                  )}
                  {project.descriptions && (
                    <p className="desc">{joinLines(project.descriptions)}</p>
                  )}
                  {project.tasks && (
                    <ul className="bullet">
                      {project.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  )}
                  {project.stacks?.map((stack) => (
                    <p className="stack" key={stack}>
                      기술스택: {stack}
                    </p>
                  ))}
                </div>
              ))}
            </article>
          ))}
        </section>

        <section className="section page_break">
          <h2 className="section_title">PROJECT</h2>
          {projects.map((project) => (
            <Fragment key={project.id}>
              <article className="project">
                <div className="project_image">
                  <PrintImage
                    src={toAssetUrl(project.image)}
                    alt={project.title}
                    maxWidth={800}
                    maxHeightRatio={1}
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
                <div className="project_info">
                  <span className="meta">{project.period}</span>
                  <h3>{project.title}</h3>
                  <p className="type">{project.type}</p>
                  <p className="desc">{joinLines(project.descriptions)}</p>

                  {project.sections.map((section) => (
                    <div className="project_section" key={section.title}>
                      <h5>{section.title}</h5>
                      <ul className="bullet">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="skills">
                    {project.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  {(project.link || project.gallery || project.github) && (
                    <div className="links">
                      {project.link && (
                        <p>
                          Link: <a href={project.link}>{project.link}</a>
                        </p>
                      )}
                      {project.gallery && (
                        <p>
                          Gallery:{" "}
                          <a href={getGalleryUrl(project.id)}>
                            {getGalleryUrl(project.id)}
                          </a>
                        </p>
                      )}
                      {project.github && (
                        <p>
                          GitHub: <a href={project.github}>{project.github}</a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </article>

              {project.gallery && (
                <div
                  className={`project_gallery ${
                    project.galleryType === "mobile" ? "mobile" : "web"
                  }`}
                >
                  <h4 className="gallery_title">{project.title} · 화면</h4>
                  <div className="gallery_grid">
                    {project.gallery.map((image) => (
                      <figure className="gallery_item" key={image.src}>
                        <div className="gallery_thumb">
                          <PrintImage
                            src={toAssetUrl(image.src)}
                            alt={image.caption}
                            {...(project.galleryType === "mobile"
                              ? { maxWidth: 360 }
                              : { maxWidth: 900, maxHeightRatio: 0.7 })}
                          />
                        </div>
                        <figcaption>
                          <strong>{image.caption}</strong>
                          {image.siteName && (
                            <span className="site_name">{image.siteName}</span>
                          )}
                          {image.features && (
                            <ul className="bullet">
                              {image.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                          )}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </section>

        <section className="section page_break">
          <h2 className="section_title">ACTIVITY</h2>
          {activities.map((category) => (
            <div className="activity_category" key={category.name}>
              <h3>{category.name}</h3>
              {category.items.map((item) => (
                <div className="activity_item" key={item.title}>
                  <div className="activity_head">
                    <h4>
                      {item.link ? (
                        <a href={item.link}>{item.title}</a>
                      ) : (
                        item.title
                      )}
                    </h4>
                    <span className="meta">{item.date}</span>
                  </div>
                  <p>{joinLines(item.descriptions)}</p>
                </div>
              ))}
            </div>
          ))}
        </section>
      </Sheet>
    </>
  );
};

export default PrintPortfolio;
