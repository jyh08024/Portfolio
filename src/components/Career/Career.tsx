import { Fragment } from "react";
import { CareerItem, CareerList, CareerStyle } from "./styled";

type CareerProject = {
  title: string;
  link?: string;
  period?: string;
  descriptions?: string[];
  tasks?: string[];
  stacks?: string[];
};

const encoredProjects: CareerProject[] = [
  {
    title: "RE100 컨설팅 플랫폼 - iris energy 개발",
    period: "2026.01 ~ present (FE) / 2026.08 ~ present (BE)",
    descriptions: [
      "재생에너지 전력 거래(PPA/REC) 계약관리, 정산, 모니터링을 위한 워크플로우를 제공해",
      "해당 업무의 비용을 최소화 하는 SaaS 서비스의 개발을 진행하고 있습니다.",
    ],
    tasks: [
      "프로젝트 초기 세팅",
      "권한 관리 체계 및 기능 화면 및 API 개발",
      "계약 - 정산 페이지 화면개발",
      "스마트빌 연동 세금계산서 화면 개발, 위탁동의 API·발행방식 판정 로직 개발",
      "Jenkins를 활용한 배포체계 구축",
      "Docker를 활용한 로컬 및 공유 테스트 환경 구축",
      "AI를 적극 활용하여 테스트와 비즈니스 로직 작성에 소요되는 시간을 단축",
      "디자인 시스템 라이브러리 패키징 및 적용",
      "크로스 클라이언트 HTML 이메일 템플릿(정산 안내·승인·반려, 멤버 초대)",
      "MFA, 이메일 링크로 들어오면 로그인·MFA를 거쳐 원래 페이지로 보내주는 처리",
    ],
    stacks: [
      "FE: Vite, React, TypeScript, Less CSS, Zustand, React Router, OpenLayers(VWorld), Kakao Local API",
      "BE: MySQL, Java, Spring",
    ],
  },
  {
    title: "KPX 비대면 전자봉인체계 대시보드",
    period: "2026.03 ~ 2026.04",
    descriptions: [
      "KPX(전력거래소) 비대면 전자봉인 모니터링 대시보드를 약 2주간 1인 개발 및 시연 진행하였습니다.",
    ],
    tasks: [
      "16개 발전소 봉인 장비-모뎀 상태 알람, 시간대별 발전량 등 모니터링 정보 표시",
      "MSW 목업으로 먼저 개발한 뒤 환경변수로 실서버 전환",
      "알람 목록·봉인 상태 이력·미터 로그 화면",
    ],
    stacks: [
      "React 19, TypeScript, Vite 6, TanStack Query v5, Jotai, Highcharts 12, Radix, Tailwind",
    ],
  },
  {
    title: "재생e 입찰제도 대응 전력입찰 시스템 프론트엔드 개발 및 유지보수",
    descriptions: ["프론트엔드 개발 및 유지보수를 담당하였습니다."],
    tasks: [
      "입찰 옵션 설정, 거래시간, 마감 로직 구현, 시간 감지로 자동 새로고침",
      "허용 발전, 입찰 오차 관련 패널티 발생 이벤트 구현",
      "SMP&REC 예측값 차트 구현",
      "배치관리: diff로 파라미터 변경 비교, JSON 포맷팅, 로그 페이징·다운로드",
      "시간 감지 로직을 분리해 리렌더링 횟수 감소 및 최적화",
      "메뉴 권한 적용, 페이지별 API 서비스 모듈 분리",
    ],
    stacks: ["Redux Toolkit, Umi, HighCharts, Xlsx, Ant Design"],
  },
  {
    title: "SKHY RE100 PPA 시스템 구축",
    period: "2025.05 ~ 2025.12",
    descriptions: ["SK 하이닉스 대상 RE100 PPA 시스템 구축 프로젝트에 참여하였습니다."],
    tasks: [
      "고객 요구사항에 맞추어 기획 참여 및 문서화 작업",
      "React와 고객사 자체 라이브러리 활용한 프론트엔드 개발",
      "발전사업자 데이터와 전기사용자 데이터를 활용한 RE100 현황 모니터링 기능 개발",
      "계약-정산-모니터링으로 이어지는 로직 구현",
      "프로젝트 프론트엔드 배포 및 형상관리 세팅",
      "기획 문서, 보고서, 산출물 제작과 인수인계 문서 제작",
    ],
    stacks: ["Vite, React, TypeScript"],
  },
  {
    title: "RTU config 모니터링 시스템 개발",
    period: "2025.01 ~ 2025.12",
    descriptions: [
      "자사 RTU 장비의 설정을 세팅하고 모니터링 시스템을 제공하는 시스템을 구축하였습니다.",
    ],
    tasks: [
      "설비의 데이터 수집과 관련한 설정을 웹으로 컨트롤 가능하도록 구현",
      "실시간 데이터 모니터링 및 시각화 기능 제공",
      "실시간으로 데이터 수집, 전송 기능의 모니터링 수행 기능 개발",
      "자동으로 빌드와 배포 수행하도록 Github Actions 세팅",
      "React Flow(@xyflow/react) 단선도(SLD): 커스텀 노드·엣지",
      "출력제어(인버터) 화면, i18n(한/영), OS 설정을 따르는 다크모드",
      "공통 UI 컴포넌트 직접 구현(CustomSelect / DatePicker / Modal / Button)",
    ],
    stacks: ["Vite, React, TypeScript, React Flow, Nginx"],
  },
  {
    title: "한국중부발전 전력중계플랫폼 개발",
    link: "https://vppinfo.komipo.co.kr/",
    period: "2023.04 ~ 2025.05",
    descriptions: [
      "한국중부발전에서 운영중인 재생에너지관리플랫폼 중 하나인 전력중계플랫폼의 개발에 투입되어",
      "발전기 관리 페이지의 개발, 대시보드 개발 지원을 하였고 유지보수까지 담당하였습니다.",
    ],
    tasks: ["정산, 세금계산서 관련 기능 담당", "웹 접근성 개선 작업"],
  },
  {
    title: "대시보드 화면 최적화 작업 진행",
    period: "2024.06",
    descriptions: ["대시보드 로딩이 느리다는 사용자 요청을 받아 최적화를 진행하였습니다."],
    tasks: [
      "중복 useSelector·API 호출 제거(상태 끌어올리기)",
      "타이머·시계 컴포넌트 분리로 리렌더 감소",
      "Chrome DevTools(Network·Performance·Memory)로 전후 측정 → API 호출 70회 → 약 50% 감소, 메모리 약 20% 감소",
    ],
  },
  {
    title: "Mqtt 실시간 알림기능 구현",
    period: "2023.03 ~ 2023.05",
    descriptions: ["MqttClient를 구현해 실시간 알림기능을 제작하였습니다."],
    tasks: ["MQTT over WebSocket으로 공지 토픽 구독 → 팝업 알림"],
    stacks: ["Mqtt, MqttClient"],
  },
  {
    title: "iDERMS V1(jQuery) -> V2(React + TypeScript) 리팩토링",
    period: "2022.12 ~ 2024.12",
    descriptions: [
      "jQuery 기반 V1의 기능·비즈니스 로직을 분석해 React + TypeScript 기반 V2로 재구현하였습니다.",
    ],
  },
  {
    title: "iDERMS 웹 서비스 다국어 지원 기능",
    period: "2022.09 ~ 2022.10",
    descriptions: [
      "고등학교 채용연계 현장실습 기간동안 Umi.js를 활용, 한국어-영어 언어 선택 기능을 제공하였습니다.",
    ],
  },
];

const freelanceProjects: CareerProject[] = [
  {
    title: "L사 사내 웹서비스 개발",
    tasks: [
      "사이트 내 애니메이션의 전반을 담당 (로딩, 스크롤, 비주얼, 요소의 인터렉션 등)",
      "메인 랜딩 페이지 개발",
      "프로모션 관련 서브 페이지 개발(3개 이상)",
      "일부 API 연동 작업 진행",
      "운영 서버에 배포 작업 진행",
    ],
    stacks: ["HTML, CSS, JavaScript, PHP, CodeIgniter, Git"],
  },
];

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
        <CareerItem>
          <div>
            <p className="period">2022.11 ~ present</p>
          </div>
          <div>
            <p className="company">
              <a href="https://encoredtech.com/ko" target="_blank" rel="noreferrer">
                (주)인코어드테크놀로지스
              </a>
            </p>
          </div>
          <div>
            <p className="position">서비스개발 - 매니저 (정규직)</p>
          </div>
          <div>
            <p className="explain">
              신재생에너지 도메인에서 2023년부터 화면개발을 해왔고 2026년부터
              백엔드 개발 또한 병행중입니다.
            </p>
          </div>

          {renderProjects(encoredProjects)}
        </CareerItem>

        <CareerItem>
          <div></div>
          <div>
            <p className="period">2022.11 ~ 2023.01</p>
          </div>
          <div>
            <p className="company">L사 사내 웹서비스 개발 업무</p>
          </div>
          <div>
            <p className="position">프리랜서</p>
          </div>
          <div>
            <p className="explain">
              대기업 L사 사내 웹서비스 개발 외주 업무로, 재직 초기에
              병행하였습니다.
            </p>
          </div>

          {renderProjects(freelanceProjects)}
        </CareerItem>
      </CareerList>
    </CareerStyle>
  );
};

export default Career;
