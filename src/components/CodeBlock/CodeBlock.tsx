import React, { ReactElement } from 'react';
import {
  CodeBluckStyle,
  Bluck,
  BlockHeader,
  FileBar,
  FileItem,
  EditorContainer,
  EditorLines,
} from './styled';
import { FaReact } from 'react-icons/fa';
import { MdNotes } from 'react-icons/md';
import { IconType } from 'react-icons';

interface CodeBlcokProps {
  openTabList: string[];
  nowTab: string;
}

interface FileIcon {
  [key: string]: ReactElement;
}

const fileIcon: FileIcon = {
  'WELCOME.md': <MdNotes />,
  'ABOUT.ME': <FaReact color="#61dbfb" />,
};

const CodeBlock = ({ openTabList, nowTab }: CodeBlcokProps) => {
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
              <FileItem data-nowTab={tabName === nowTab}>
                {fileIcon[tabName]}
                <p>{tabName}</p>
              </FileItem>
            ))}
            <FileItem>
              <FaReact color="#61dbfb" data-nowTab={false} />
              <p>About.Me</p>
            </FileItem>
          </div>
        </FileBar>

        <EditorContainer>
          <EditorLines>
            {new Array(100).fill('').map((_: string, index: number) => (
              <div className="line_item">{index + 1}</div>
            ))}
          </EditorLines>
        </EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
