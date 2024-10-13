import React, { ReactElement, useEffect } from "react";
import {
  CodeBluckStyle,
  Bluck,
  BlockHeader,
  FileBar,
  FileItem,
  EditorContainer,
  EditorLines,
} from "./styled";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import { VscJson } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { WelcomeComponents } from "../welcome/Welcome";

import AboutMe from "../About/About";
import Skills from "../Skills/Skills";
import Career from "../Career/Career";
import Project from "../Project/Project";
import Activity from "../Activity/Activity";

interface CodeBlcokProps {
  openTabList: string[];
  nowTab: string;
  titleAnimation: boolean;
  titleAnimationData: string[];
  normalTitle: string;
  setNowTab: any;
  setOpenTab: React.Dispatch<React.SetStateAction<string[]>>;
}

interface FileIcon {
  [key: string]: ReactElement;
}

const fileIcon: FileIcon = {
  WELCOME: <MdNotes />,
  "ABOUT ME": <FaReact color="#61dbfb" />,
  SKILLS: <VscJson color="#febf00" />,
  PROJECT: <VscJson color="#febf00" />,
  ACTIVITY: <MdNotes />,
  CAREER: <FaHtml5 color="#ff5100" />,
};

interface ExtensionName {
  [key: string]: String;
}

interface CodeLines {
  [key: string]: number;
}

const extensionName: ExtensionName = {
  WELCOME: ".MD",
  "ABOUT ME": "ABOUT.ME",
  SKILLS: ".JSON",
  PROJECT: ".JSON",
  ACTIVITY: ".LOG",
  CAREER: ".HTML",
};

const CodeBlock = ({
  openTabList,
  nowTab,
  titleAnimation,
  titleAnimationData,
  normalTitle,
  setNowTab,
  setOpenTab,
}: CodeBlcokProps) => {
  const tabComponents: any = {
    WELCOME: (
      <WelcomeComponents
        titleAnimation={titleAnimation}
        titleAnimationData={titleAnimationData}
        normalTitle={normalTitle}
      />
    ),
    "ABOUT ME": <AboutMe />,
    SKILLS: <Skills />,
    PROJECT: <Project />,
    ACTIVITY: <Activity />,
    CAREER: <Career></Career>,
  };

  const codeLines: CodeLines = {
    WELCOME: 0,
    "ABOUT ME": 21,
    SKILLS: 0,
    PROJECT: 22,
    ACTIVITY: 36,
    CAREER: 36,
  };

  return (
    <CodeBluckStyle>
      <Bluck>
        <BlockHeader>
          <div className="red_dot"></div>
          <div className="orange_dot"></div>
          <div className="green_dot"></div>
        </BlockHeader>

        <FileBar>
          <div className="file_list">
            {openTabList.map((tabName: string) => (
              <FileItem
                key={tabName}
                data-nowTab={tabName === nowTab}
                onClick={() => {
                  setNowTab(tabName);
                }}
              >
                {fileIcon[tabName]}
                <p>
                  {tabName == "ABOUT ME"
                    ? extensionName?.[tabName]
                    : tabName + extensionName?.[tabName]}
                </p>
                {/*{nowTab == tabName && tabName !== "WELCOME" && (
                  <div
				  	onClick={() => {
                      const deletedArr = openTabList?.filter(
                        (tab: string) => tab !== tabName
                      );
                      setNowTab(deletedArr?.[0] || "");
                      setOpenTab(deletedArr);
                    }}
                  >
                    <IoMdClose />
                  </div>
                )}*/}
              </FileItem>
            ))}
          </div>
        </FileBar>

        <EditorContainer>
          {!["WELCOME", "PROJECT"].includes(nowTab) && (
            <EditorLines>
              {new Array(codeLines?.[nowTab] || 22)
                .fill("")
                .map((_: string, index: number) => (
                  <div className="line_item">{index + 1}</div>
                ))}
            </EditorLines>
          )}

          {tabComponents?.[nowTab]}
        </EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
