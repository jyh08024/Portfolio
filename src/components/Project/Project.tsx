import {
  ProjectImage,
  ProjectInfo,
  ProjectItem,
  ProjectList,
  ProjectStyle,
} from "./styled";

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
              src="/assets/image/project/planwith/home_normal.png"
              alt="project_image"
            />
          </ProjectImage>
          <ProjectInfo>
            <p>2024.06 ~ 2024.08</p>
            <h2 className="project_title">플랜위드 (PlanWith)</h2>
            <p className="project_type">팀 프로젝트 (2인)</p>

            <div className="project_explain">
              <p>귀여운 마스코트 캐릭터와 함께 하는 일정 관리 할 일 기록 앱</p>
            </div>

            <ul className="project_role">
              <li>백엔드 API 개발, 프론트엔드 개발을 담당하였습니다.</li>
              <li>백엔드 업무: 할 일 CURD API, 백로그 API 개발</li>
              <li>
                프론트 업무: 메인화면, 할 일 상세 페이지, 알람 화면, 튜토리얼
                화면 담당
              </li>
            </ul>

            <div className="project_skill">
              <div>Dart-Flutter</div>
            </div>
          </ProjectInfo>
        </ProjectItem>
      </ProjectList>
    </ProjectStyle>
  );
};

export default Project;
