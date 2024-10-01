import React, { ReactElement } from "react";
import {
  CodeBluckStyle,
  Bluck,
  BlockHeader,
  FileBar,
  FileItem,
  EditorContainer,
  EditorLines,
} from "./styled";
import { FaReact } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import { VscJson } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { WelcomeComponents } from "../welcome/Welcome";

import AboutMe from "../About/About";
import Skills from "../Skills/Skills";

interface CodeBlcokProps {
  openTabList: string[];
  nowTab: string;
  titleAnimation: boolean;
  titleAnimationData: string[];
  normalTitle: string;
  setNowTab: React.Dispatch<React.SetStateAction<string>>;
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
  //  CONTACT: <IoMdClose color="#ff5100" />,
};

interface ExtensionName {
  [key: string]: String;
}

const extensionName: ExtensionName = {
  WELCOME: ".MD",
  "ABOUT ME": "ABOUT.ME",
  SKILLS: ".JSON",
  PROJECT: ".JSON",
  ACTIVITY: ".LOG",
  CONTACT: ".HTML",
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
    "ABOUT ME": <AboutMe />,
    SKILLS: <Skills />,
    PROJECT: <></>,
    ACTIVITY: <></>,
    CONTACT: <></>,
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
                {nowTab == tabName && tabName !== "WELCOME" && (
                  <div
                    onClick={() => {
                      const deletedArr = openTabList?.filter(
                        (tab: string) => tab !== tabName
                      );
                      setOpenTab(deletedArr);
                      setNowTab(deletedArr?.[0] || "");
                    }}
                  >
                    <IoMdClose />
                  </div>
                )}
              </FileItem>
            ))}
          </div>
        </FileBar>

        <EditorContainer>
          {nowTab !== "WELCOME" && (
            <EditorLines>
              {new Array(22).fill("").map((_: string, index: number) => (
                <div className="line_item">{index + 1}</div>
              ))}
            </EditorLines>
          )}

          {nowTab == "WELCOME" && (
            <WelcomeComponents
              titleAnimation={titleAnimation}
              titleAnimationData={titleAnimationData}
              normalTitle={normalTitle}
            />
          )}

          {tabComponents?.[nowTab]}
        </EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
