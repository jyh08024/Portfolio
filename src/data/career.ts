export interface CareerSection {
  title: string; // 작업 묶음 제목
  items: string[];
}

export type CareerProject = {
  title: string;
  link?: string;
  period?: string;
  descriptions?: string[];
  tasks?: string[]; // 소제목 없이 나열하는 작업
  sections?: CareerSection[]; // 소제목별로 묶은 작업
  stacks?: string[];
};

const encoredProjects: CareerProject[] = [
  {
    title: "iris energy - 재생에너지 거래 플랫폼",
    link: "https://ppa.iris-energy.co.kr/",
    period: "2026.01 ~ present",
    descriptions: [
      "발전사업자와 전기사용자가 직접 맺는 재생에너지 계약(PPA/REC)부터 공급자의 거래 중개,",
      "에너지 모니터링과 RE100 ESG 관리가 가능한 워크플로우를 제공하는 SaaS 서비스의 개발을 담당하고 있습니다.",
      "2026.01 ~ 프론트엔드 개발 담당 / 2026.07 ~ 백엔드 개발 병행",
    ],
    sections: [
      {
        title: "계약 → 정산 → 세금계산서 발행 워크플로우 구현",
        items: [
          "발전사업자-전기사용자 간 PPA 계약부터 월 정산 → 세금계산서 발행까지 흐름을 구축, 별도 수작업 없이 정산 진행 중",
          "세금계산서 위탁발행 로직 구현, 스마트빌 연동과 발행방식 판단 로직 구현(백엔드, 프론트엔드)",
          "정산, 세금계산서 금액 수정 시 이력을 남겨 고객이 직접 확인과 추적 가능",
          "프로젝트 개시부터 참여해 6개월 만에 실고객 정산 운영 개시",
        ],
      },
      {
        title: "역할기반 권한관리와 라우팅",
        items: [
          "조직 단위 권한 API-DB 설계와 화면의 라우팅을 함께 설계",
          "고객사 별, 유저 별 기능과 메뉴 제공을 별도 코드 수정 없이 DB 설정만으로 반영",
        ],
      },
      {
        title: "디자인 시스템 패키징, 리스킨",
        items: [
          "사내 신규 서비스 디자인 시스템을 Vite lib 빌드, peer deps를 정리하여 설치만으로 사용 가능하도록 라이브러리 패키징 진행",
          "Claude Code를 활용하여 20+ 화면을 2주 안에 리스킨 및 테스트 진행",
          "CLAUDE.md 규칙 정의와 교차검증 hook으로 단기간의 QA로 운영 적용",
        ],
      },
      {
        title: "배포 · 테스트 환경 구축",
        items: [
          "Docker, Jenkins를 활용한 Spring API, React 빌드 · 배포 파이프라인 구축",
          "프론트엔드 배포 스크립트 작성",
          "Docker를 활용한 로컬 테스트 환경과 공유 환경을 구축하여 팀원과 동일한 환경에서 검증",
        ],
      },
    ],
    stacks: [
      "FE: Vite, React 18, TypeScript, Less",
      "BE: Spring Boot, Java, MySQL, JPA",
    ],
  },
  {
    title: "KPX 비대면 전자봉인 모니터링 대시보드",
    period: "2026.03 ~ 2026.04",
    descriptions: [
      "한국전력거래소(KPX)의 전자봉인(계량기 봉인 상태를 원격 확인) 모니터링 대시보드.",
      "발전소 16곳의 봉인 장비-모뎀 상태 알람과 시간대별 발전소 정보를 표출하며, 프로젝트 종료까지 유지보수를 지원하였습니다.",
    ],
    sections: [
      {
        title: "알람, 봉인 상태 이력 · 데이터 로그 화면",
        items: ["설계-구현-시연까지 약 2주 1인 개발 완료"],
      },
      {
        title: "목업 개발 구조",
        items: [
          "목업을 우선 개발해 고객에게 시연하여 백엔드 완성 전 추가 요구사항을 먼저 반영하였고, 이후 빠르게 운영으로 전환",
        ],
      },
      {
        title: "AI 개발 워크플로우",
        items: [
          "계획(Plan) → 구현 → 보고서 교차검증 워크플로우를 처음 적용하여 작업하였고, 이후 iris energy로 확장",
        ],
      },
      {
        title: "장비 설치 현장 사진 조회",
        items: [
          "이미지 최적화를 통해 로딩 속도 개선",
          "이미지 리사이즈 및 포맷 변경(PNG → WebP)",
          "이미지를 조회하는 모달 오픈 시에만 이미지를 조회하도록 지연 로딩 기능 추가",
        ],
      },
    ],
    stacks: [
      "Vite, React 19, TypeScript, TanStack Query v5, Radix UI, Tailwind",
    ],
  },
  {
    title: "iDERMS 전력입찰 시스템",
    descriptions: [
      "재생에너지 발전자원 관리 플랫폼 iDERMS의 재생에너지 입찰제도(발전사업자가 하루전 · 실시간 시장에 발전량을 입찰, 판매하는 제도)에",
      "대응하는 입찰 제출과 결과 모니터링 서비스를 제공합니다.",
    ],
    sections: [
      {
        title: "입찰 제출, 결과 화면",
        items: [
          "입찰 설정, 거래 시간 마감 로직, 거래 시간 감지와 자동 업데이트 로직 구현",
          "컴포넌트 분리를 통해 하루전-실시간 입찰 두 페이지에서 컴포넌트 재사용 및 리렌더링 최소화",
          "입찰 오차, 과발전 등의 이벤트 표시로 사용자가 입찰량을 조절할 수 있도록 지원",
          "2023년부터 현재까지 입찰제도 변화에 맞춰 유지보수 및 고도화 진행",
        ],
      },
      {
        title: "발전량인도(실시간입찰 모니터링)",
        items: [
          "분 단위로 바뀌는 입찰과 발전 현황을 실시간으로 조회 가능한 모니터링 페이지",
          "분 단위 갱신 데이터를 IndexedDB에 캐시하여 새로고침, 재접속 시 서버 재요청 없이 이전 조회 데이터 복원",
          "캐시 키가 매 호출마다 바뀌어 제대로 동작하지 못한 HTTP 캐시를 IndexedDB 캐시로 교체, 40초 이상의 재접속 시간을 20초 내외로 단축",
        ],
      },
      {
        title: "배치관리",
        items: [
          "입찰 데이터를 생성하는 배치를 서버에 업로드하는 번거로운 과정을 줄이기 위해 배치 관리 화면을 제작, 50개 이상의 배치를 화면에서 관리",
        ],
      },
    ],
    stacks: ["React 16, TypeScript, Umi 3, Redux Toolkit, Ant Design"],
  },
  {
    title: "SK하이닉스 RE100 PPA 시스템",
    period: "2025.05 ~ 2025.12",
    descriptions: [
      "SK하이닉스의 RE100 이행을 위한 PPA(전력구매계약) 시스템.",
      "발전사업자-전기사용자 데이터를 연결해 RE100 현황 모니터링과 계약-정산 기능을 제공합니다.",
    ],
    sections: [
      {
        title: "RE100 현황 모니터링과 계약, 정산 기능 개발",
        items: [
          "발전 데이터와 전기 사용 데이터를 연결한 RE100 현황 모니터링 기능 개발",
          "계약정보 기준 정산과 이행 관리 기능 제공",
          "고객사 자체 UI 라이브러리를 사용, 기존 서비스들과 동일한 UI 유지",
        ],
      },
      {
        title: "기획 - 납품",
        items: [
          "고객 요구 사항을 화면 기획서로 문서화, 기타 개발 범위 확정에 참여",
          "프론트엔드 배포 및 형상관리 세팅",
          "기획 문서, 보고서, 산출물, 인수인계 문서를 제작해 기한 내 납품 및 인수인계 완료",
        ],
      },
    ],
    stacks: ["Vite, React 18, TypeScript"],
  },
  {
    title: "RTU 원격 설정, 모니터링 시스템",
    period: "2025.01 ~ 2025.12",
    descriptions: [
      "자사 RTU(데이터 수집 · 전송 원격 단말)의 데이터 수집 설정을 웹에서 제어하고 수집 · 전송 상태를 모니터링하는 시스템입니다.",
      "2025.01 ~ 2025.05 1인 개발 / 2025.06 ~ 2025.12 원격 개발 지원",
    ],
    sections: [
      {
        title: "데이터 수집 설정 기능 개발",
        items: [
          "터미널에서 편집기로 작성하던 설정 파일을 웹에서 편집, 적용, 테스트할 수 있게 하여 설정 작업을 화면으로 대체",
          "수집, 전송 상태 확인과 시작 · 중지 등 터미널에서 명령어로 하던 작업을 모니터링 화면에서 수행",
        ],
      },
      {
        title: "발전 설비 구성 계통도",
        items: [
          "RTU가 설치된 발전소의 설비 구성을 React Flow(@xyflow/react) 기반 계통도로 그려 설비 레이아웃을 언제나 조회 가능하게 구현",
        ],
      },
      {
        title: "공통 UI 컴포넌트 직접 개발",
        items: [
          "장비 내 구동 환경을 고려하여 의존성과 번들 크기를 줄이도록 UI 컴포넌트를 직접 개발",
          "한/영 i18n, OS 설정에 따른 다크모드 지원",
        ],
      },
      {
        title: "빌드 - 배포 설계",
        items: [
          "GitHub Actions를 통해 자동 빌드 후 결과물을 장비에서 직접 적용하는 구조 설계",
          "장비 내 정적 파일 서빙 환경 직접 설정(nginx)",
        ],
      },
    ],
    stacks: ["Vite, React, TypeScript, Zustand, GitHub Actions"],
  },
  {
    title: "한국중부발전 전력중계플랫폼",
    link: "https://vppinfo.komipo.co.kr/",
    period: "2023.04 ~ 2025.05",
    descriptions: [
      "한국중부발전이 운영하는 전력중계플랫폼(소규모 발전소를 모아 하나의 발전소처럼 전력을 거래하는 플랫폼).",
      "발전사업자용 발전기 관리, 정산 화면 개발에 투입되어 개발 완료 후 유지보수 및 배포까지 지원하였습니다.",
    ],
    sections: [
      {
        title: "정산, 세금계산서 관련 기능 담당",
        items: [
          "정산서 승인 → 발행, 입금 상태 관리와 정산서 PDF 제작 및 다운로드 구현",
          "전자세금계산서 발행 대행 서비스(스마트빌) 연동 오류코드별 안내 메시지 추가와 각종 에러 원인을 사용자에게 제공",
        ],
      },
      {
        title: "발전기 관리, 사업 신청 기능",
        items: [
          "발전기 등록, 목록, 편집, 사업 참여 신청 및 발전기 설비 유형별 추가 대응",
          "대시보드 개발 지원",
        ],
      },
      {
        title: "웹 접근성 개선",
        items: [
          "공공기관 접근성 기준에 맞춰 폼 label 연결, 이미지 대체 텍스트, 키보드 포커스 순서 등 보완",
        ],
      },
    ],
  },
  {
    title: "iDERMS 플랫폼 운영",
    period: "2022.11 ~ present",
    sections: [
      {
        title: "대시보드 성능 최적화 (2024.06)",
        items: [
          "로딩이 느리다는 사용자 요청을 받아 최적화 진행",
          "중복 useSelector와 API 호출 제거, Redux 분리로 서버 통신 횟수 감소",
          "타이머, 시계 등 컴포넌트 공통화로 리렌더 감소와 재사용성 향상",
          "Chrome DevTools로 전후 측정, API 호출 50% 감소(74회 → 36회), 메모리 점유율 약 20% 감소(최초 접속 기준)",
        ],
      },
      {
        title: "MQTT 서버 푸시 알림 제작 (2023.03 ~ 2023.05)",
        items: ["MQTT over WebSocket 공지 토픽을 구독해 팝업 표출"],
      },
      {
        title: "플랫폼 V2 전환 (2022.12 ~ 2024.12)",
        items: [
          "jQuery 기반 V1의 기능, 비즈니스 로직을 분석하여 React, TypeScript 기반 V2로 재구현",
        ],
      },
      {
        title: "다국어 지원(i18n) (2022.09 ~ 2022.10)",
        items: ["현장실습 기간 중 한/영 언어 선택 기능 제공"],
      },
    ],
  },
];

export interface CareerCompany {
  name: string;
  link?: string;
  period: string;
  position: string;
  description: string;
  projects: CareerProject[];
}

export const careers: CareerCompany[] = [
  {
    name: "(주)인코어드테크놀로지스",
    link: "https://encoredtech.com/ko",
    period: "2022.11 ~ present",
    position: "서비스개발 - 매니저 (정규직)",
    description:
      "신재생에너지 도메인에서 다양한 분야의 팀원들과 협업하여 2023년부터 화면개발을 해왔고 2026년부터 백엔드 개발 또한 병행중입니다.",
    projects: encoredProjects,
  },
];
