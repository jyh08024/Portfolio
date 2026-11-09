export interface SkillGroup {
  key: string; // JSON 키로 표시되는 이름
  main: string[]; // 주력으로 사용하는 기술 (채워진 칩)
  used: string[]; // 사용 경험이 있는 기술 (테두리 칩)
}

export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    main: ["React", "TypeScript"],
    used: ["JavaScript", "HTML", "CSS", "LESS", "jQuery", "Redux Toolkit"],
  },
  {
    key: "backend",
    main: [],
    used: ["Java", "Spring", "MySQL", "Node.js", "NestJS", "PHP"],
  },
];
