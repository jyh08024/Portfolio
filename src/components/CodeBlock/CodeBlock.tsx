import React, { useRef } from "react";
import {
  CodeBluckStyle,
  Bluck,
  BlockHeader,
  FileBar,
  FileItem,
  EditorContainer,
  EditorLines,
  EditorContent,
} from "./styled";
import { IoMdClose } from "react-icons/io";
import { enabledTabs } from "../../config/tabs";
import useLineCount from "../../hooks/useLineCount";

interface CodeBlcokProps {
  openTabList: string[];
  nowTab: string;
  setNowTab: any;
  setOpenTab: React.Dispatch<React.SetStateAction<string[]>>;
}

const CodeBlock = ({
  openTabList,
  nowTab,
  setNowTab,
  setOpenTab,
}: CodeBlcokProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  const currentTab = enabledTabs.find((tab) => tab.name === nowTab);
  const lineCount = useLineCount(containerRef, contentRef, linesRef, [nowTab]);

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
            {openTabList.map((tabName: string) => {
              const tab = enabledTabs.find((item) => item.name === tabName);

              return (
                <FileItem
                  key={tabName}
                  data-nowTab={tabName === nowTab}
                  onClick={() => {
                    setNowTab(tabName);
                  }}
                >
                  {tab?.icon}
                  <p>{tab?.fileName ?? tabName}</p>
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
              );
            })}
          </div>
        </FileBar>

        <EditorContainer ref={containerRef}>
          {currentTab?.showLineNumbers ? (
            <>
              <EditorLines ref={linesRef}>
                {Array.from({ length: lineCount }, (_, index) => (
                  <div className="line_item" key={index}>
                    {index + 1}
                  </div>
                ))}
              </EditorLines>
              <EditorContent ref={contentRef}>
                {currentTab.component}
              </EditorContent>
            </>
          ) : (
            currentTab?.component
          )}
        </EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
