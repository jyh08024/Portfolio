export interface ProjectSection {
  title: string;
  items: string[];
}

export interface GalleryImage {
  src: string; // public 폴더 기준 경로
  caption: string;
  siteName?: string; // 과제로 제작한 사이트 이름
  features?: string[]; // 과제에 포함된 주요 기능
}

export interface ProjectData {
  id: string; // 갤러리 페이지 주소(?gallery=id)에 사용
  title: string;
  period: string;
  type: string;
  image: string; // public 폴더 기준 경로
  imagePosition?: string; // 대표 이미지 object-position (기본값: left)
  descriptions: string[];
  sections: ProjectSection[];
  skills: string[];
  link?: string; // 없고 gallery도 없으면 "프로젝트 바로가기" 버튼 비활성화
  gallery?: GalleryImage[]; // 있으면 "프로젝트 바로가기"가 갤러리 페이지로 연결
  galleryType?: "web" | "mobile"; // mobile: 세로 앱 화면을 자르지 않고 표시 (기본값: web)
  github?: string;
}

// public 폴더 경로를 실제 URL로 변환 (한글 파일명 인코딩 포함)
export const toAssetUrl = (path: string) =>
  encodeURI(`${process.env.PUBLIC_URL}/${path}`);

export const getGalleryPath = (project: ProjectData) =>
  `${process.env.PUBLIC_URL}/?gallery=${project.id}`;

// "프로젝트 바로가기" 버튼이 연결될 주소
export const getProjectLink = (project: ProjectData) =>
  project.link ?? (project.gallery ? getGalleryPath(project) : undefined);

export const projects: ProjectData[] = [
  {
    id: "portfolio",
    title: "개인 포트폴리오",
    period: "2024.09 ~ 2024.10",
    type: "개인 프로젝트",
    image: "assets/image/project/portfolio.png",
    descriptions: [
      "개인 포트폴리오 사이트로 사용하기 위해 개발한 프로젝트",
      "오픈소스 템플릿으로 사용 가능하도록 리팩토링 중",
    ],
    sections: [
      {
        title: "주요기능",
        items: ["React, TypeScript를 사용해 개발", "반응형 웹을 지원"],
      },
    ],
    skills: ["React", "TypeScript", "Styled-Components", "SCSS"],
    github: "https://github.com/jyh08024/my_portfolio",
  },
  {
    id: "planwith",
    title: "플랜위드 (PlanWith)",
    period: "2024.06 ~ 2024.08",
    type: "팀 프로젝트 (2인)",
    image: "assets/image/project/planwith/home_normal.png",
    descriptions: [
      "귀여운 마스코트 캐릭터와 함께 하는 일정 관리 할 일 기록 앱",
    ],
    sections: [
      {
        title: "주요기능",
        items: [
          "Google Sign in 라이브러리를 활용한 구글 로그인 연동",
          "일정 추가, 표기, 기간 알림, 달력을 통한 날짜 별 일정 확인",
          "일정 완료로 얻은 리워드로 마스코트 캐릭터 육성",
          "구글 애드센스 연동을 통한 광고 표기",
        ],
      },
      {
        title: "담당 기능",
        items: [
          "백엔드 API 개발, 프론트엔드 개발을 담당하였습니다.",
          "백엔드: 할 일 CRUD API, 구글 로그인 연동 , 백로그 API 개발",
          "프론트: 메인화면, 할 일 상세 페이지, 알람 화면, 튜토리얼 화면, 달력 페이지 일부 API 연동 작업 담당",
        ],
      },
    ],
    skills: ["Dart", "Flutter", "Node.js", "NestJS", "MongoDB"],
    galleryType: "mobile",
    gallery: [
      {
        src: "assets/image/project/planwith/home_normal.png",
        caption: "홈 화면",
      },
      {
        src: "assets/image/project/planwith/tutorial_1.png",
        caption: "튜토리얼 1 - 새로운 할 일 만들기",
      },
      {
        src: "assets/image/project/planwith/tutorial_2.png",
        caption: "튜토리얼 2 - 일정 정보 입력",
      },
      {
        src: "assets/image/project/planwith/tutorial_3.png",
        caption: "튜토리얼 3 - 반복 · 아이콘 설정 후 등록",
      },
      {
        src: "assets/image/project/planwith/tutorial_4.png",
        caption: "튜토리얼 4 - 홈 화면에 등록된 일정",
      },
    ],
    github: "https://github.com/playerdecuple/postpone_twice",
  },
  {
    id: "skills-competition",
    title: "기능경기대회 결과물",
    period: "2020.03 ~ 2022.11",
    type: "개인 프로젝트 (기능경기대회)",
    image: "assets/image/project/기능대회/22_전국.png",
    imagePosition: "center top",
    descriptions: [
      "고등학교 재학 중 웹디자인 및 개발 직종 기능경기대회를 준비하며",
      "주어진 과제에 맞게 제작한 웹사이트 결과물 모음",
    ],
    sections: [
      {
        title: "주요 내용",
        items: [
          "주어진 주제에 맞게 웹사이트를 기획, 디자인, 개발",
          "과제별 메인 · 서브 페이지 레이아웃, 인터랙션, 반응형 구현",
          "2021 전국대회 우수상(4위) · 팀챌린지 대상, 2022 경기도대회 금메달(1위) · 전국대회 동메달(3위) 입상",
        ],
      },
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    gallery: [
      {
        src: "assets/image/project/기능대회/22_전국.png",
        caption: "2022 전국대회",
        siteName: "경남 민간정원",
        features: [
          "360도 파노라마 이미지뷰어",
          "실시간 예약 시스템",
          "커뮤니티 시스템 제작",
        ],
      },
      {
        src: "assets/image/project/기능대회/22_지방_메인.jpg",
        caption: "2022 지방대회 - 메인",
        siteName: "힘내라 경남!",
        features: [
          "카드 뒤집기 게임",
          "REST API를 사용한 구동",
          "REST 방식의 API 플랫폼 제공",
        ],
      },
      {
        src: "assets/image/project/기능대회/22_지방_서브.jpg",
        caption: "2022 지방대회 - 서브",
        siteName: "힘내라 경남! - 구매후기",
      },
      {
        src: "assets/image/project/기능대회/22_전남_메인.png",
        caption: "2022 전남 과제 - 메인",
        siteName: "GyeongNam Garden",
        features: [
          "360도 파노라마 이미지뷰어",
          "Radar 차트 구현",
          "커뮤니티 시스템 제작",
        ],
      },
      {
        src: "assets/image/project/기능대회/22_전남_서브.png",
        caption: "2022 전남 과제 - 서브",
        siteName: "GyeongNam Garden - 정원 정보",
      },
      {
        src: "assets/image/project/기능대회/22_충북.png",
        caption: "2022 충북 과제",
        siteName: "이한메미술관",
        features: ["퍼즐게임", "커뮤니티 시스템 제작"],
      },
      {
        src: "assets/image/project/기능대회/21_지방.png",
        caption: "2021 지방대회",
        siteName: "무형문화재관리원",
        features: ["공공 API 활용", "데이터 관리 플랫폼"],
      },
      {
        src: "assets/image/project/기능대회/20_부산.png",
        caption: "2020 부산 과제",
        siteName: "전북중소기업채용박람회",
        features: [
          "채용 플랫폼 제작 과제",
          "회사 유저와 구직자 유저 별 기능 구현",
        ],
      },
    ],
    github: "https://github.com/jyh08024/web-project",
  },
];
