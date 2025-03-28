import {
  ProjectImage,
  ProjectInfo,
  ProjectItem,
  ProjectList,
  ProjectStyle,
} from "./styled";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <ProjectStyle>
      <div className="title">
        <b>PROJECT</b>
      </div>

      <ProjectList>
        <ProjectItem>
          <ProjectImage>
            <img
              src="/Portfolio/assets/image/project/portfolio.png"
              alt="project_image"
            />
          </ProjectImage>
          <ProjectInfo>
            <div>
              <p>2024.09 ~ 2024.10</p>
              <h2 className="project_title">개인 포트폴리오</h2>
              <p className="project_type">개인 프로젝트</p>
              <div className="project_explain">
                <p>개인 포트폴리오 사이트로 사용하기 위해 개발한 프로젝트</p>
                <p>오픈소스 템플릿으로 사용 가능하도록 리팩토링 중</p>
              </div>
            </div>

            <div className="info_container">
              <p>주요기능</p>
              <ul className="project_role">
                <li>React, TypeScript를 사용해 개발</li>
                <li>반응형 웹을 지원</li>
              </ul>
            </div>

            <div className="project_skill">
              <div>React</div>
              <div>TypeScript</div>
              <div>Styled-Components</div>
              <div>SCSS</div>
            </div>

            <div className="link_list">
              <div className="redirect disa">
                <a href="#">
                  <FaExternalLinkAlt />
                  <p>프로젝트 바로가기</p>
                </a>
              </div>

              <div className="github">
                <a href="https://github.com/jyh08024/my_portfolio">
                  <FaGithub />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </ProjectInfo>
        </ProjectItem>

        <ProjectItem>
          <ProjectImage>
            <img
              src="/Portfolio/assets/image/project/planwith/home_normal.png"
              alt="project_image"
            />
          </ProjectImage>
          <ProjectInfo>
            <div>
              <p>2024.06 ~ 2024.08</p>
              <h2 className="project_title">플랜위드 (PlanWith)</h2>
              <p className="project_type">팀 프로젝트 (2인)</p>
              <div className="project_explain">
                <p>
                  귀여운 마스코트 캐릭터와 함께 하는 일정 관리 할 일 기록 앱
                </p>
              </div>
            </div>

            <div className="info_container">
              <p>주요기능</p>
              <ul className="project_role">
                <li>Google Sign in 라이브러리를 활용한 구글 로그인 연동</li>
                <li>
                  일정 추가, 표기, 기간 알림, 달력을 통한 날짜 별 일정 확인
                </li>
                <li>일정 완료로 얻은 리워드로 마스코트 캐릭터 육성</li>
                <li>구글 애드센스 연동을 통한 광고 표기</li>
              </ul>
            </div>

            <div className="info_container">
              <p>담당 기능</p>
              <ul className="project_role">
                <li>백엔드 API 개발, 프론트엔드 개발을 담당하였습니다.</li>
                <li>
                  백엔드: 할 일 CRUD API, 구글 로그인 연동 , 백로그 API 개발
                </li>
                <li>
                  프론트: 메인화면, 할 일 상세 페이지, 알람 화면, 튜토리얼 화면,
                  달력 페이지 일부 API 연동 작업 담당
                </li>
              </ul>
            </div>

            <div className="project_skill">
              <div>Dart</div>
              <div>Flutter</div>
              <div>Node.js</div>
              <div>NestJS</div>
              <div>MongoDB</div>
            </div>

            <div className="link_list">
              <div className="redirect disa">
                <a href="#">
                  <FaExternalLinkAlt />
                  <p>프로젝트 바로가기</p>
                </a>
              </div>

              <div className="github">
                <a href="https://github.com/playerdecuple/postpone_twice">
                  <FaGithub />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </ProjectInfo>
        </ProjectItem>
      </ProjectList>
    </ProjectStyle>
  );
};

export default Project;
