import { ReactElement } from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import { VscJson } from "react-icons/vsc";

import { WelcomeComponents } from "../components/welcome/Welcome";
import AboutMe from "../components/About/About";
import Introduce from "../components/Introduce/Introduce";
import Skills from "../components/Skills/Skills";
import Career from "../components/Career/Career";
import Project from "../components/Project/Project";
import Activity from "../components/Activity/Activity";

export const copyrightName = "장영훈";

// WELCOME 탭 타이틀 애니메이션
export const welcomeConfig = {
  titleAnimation: true,
  titleAnimationData: [
    "React, TypeScript",
    "Dart, Flutter",
    "PHP, MySQL",
    "Node.js, Nest.js",
  ],
  normalTitle: "저는 프론트엔드 개발자 장영훈입니다.",
};

export interface TabConfig {
  name: string; // 탭 식별자 (사이드 메뉴 표시명)
  fileName: string; // 상단 파일 탭에 표시되는 이름
  icon: ReactElement;
  component: ReactElement;
  showLineNumbers: boolean; // 에디터 줄번호 표시 여부
  inNavigation: boolean; // 사이드 메뉴 노출 여부
  enabled: boolean; // false면 탭 전체 비활성화
}

// 배열 순서대로 사이드 메뉴와 파일 탭에 표시됩니다.
export const tabs: TabConfig[] = [
  {
    name: "WELCOME",
    fileName: "WELCOME.MD",
    icon: <MdNotes />,
    component: <WelcomeComponents {...welcomeConfig} />,
    showLineNumbers: false,
    inNavigation: false,
    enabled: true,
  },
  {
    name: "ABOUT ME",
    fileName: "ABOUT.ME",
    icon: <FaReact color="#61dbfb" />,
    component: <AboutMe />,
    showLineNumbers: true,
    inNavigation: true,
    enabled: true,
  },
  {
    name: "INTRODUCE",
    fileName: "INTRODUCE.MD",
    icon: <MdNotes />,
    component: <Introduce />,
    showLineNumbers: true,
    inNavigation: true,
    enabled: false, // 자기소개 탭 임시 비활성화
  },
  {
    name: "SKILLS",
    fileName: "SKILLS.JSON",
    icon: <VscJson color="#febf00" />,
    component: <Skills />,
    showLineNumbers: true,
    inNavigation: true,
    enabled: true,
  },
  {
    name: "CAREER",
    fileName: "CAREER.HTML",
    icon: <FaHtml5 color="#ff5100" />,
    component: <Career />,
    showLineNumbers: true,
    inNavigation: true,
    enabled: true,
  },
  {
    name: "PROJECT",
    fileName: "PROJECT.JSON",
    icon: <VscJson color="#febf00" />,
    component: <Project />,
    showLineNumbers: false,
    inNavigation: true,
    enabled: true,
  },
  {
    name: "ACTIVITY",
    fileName: "ACTIVITY.LOG",
    icon: <MdNotes />,
    component: <Activity />,
    showLineNumbers: true,
    inNavigation: true,
    enabled: true,
  },
];

export const enabledTabs = tabs.filter((tab) => tab.enabled);

export const navigationTabs = enabledTabs
  .filter((tab) => tab.inNavigation)
  .map((tab) => tab.name);

export const defaultTab = "WELCOME";
