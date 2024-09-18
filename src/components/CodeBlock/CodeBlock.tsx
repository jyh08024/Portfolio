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
import { WelcomeComponents } from '../welcome/Welcome';

interface CodeBlcokProps {
  openTabList: string[];
  nowTab: string;
  titleAnimation: boolean;
  titleAnimationData: string[];
  normalTitle: string;
}

interface FileIcon {
  [key: string]: ReactElement;
}

const fileIcon: FileIcon = {
  'WELCOME.md': <MdNotes />,
  'ABOUT.ME': <FaReact color="#61dbfb" />,
};

const CodeBlock = ({ openTabList, nowTab, titleAnimation, titleAnimationData, normalTitle }: CodeBlcokProps) => {
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
		{
			nowTab !== 'WELCOME.md' && 
				<EditorLines>
					{new Array(100).fill('').map((_: string, index: number) => (
					<div className="line_item">{index + 1}</div>
				))}
          </EditorLines>
		}

		{
			nowTab == 'WELCOME.md' && <WelcomeComponents titleAnimation={titleAnimation} titleAnimationData={titleAnimationData} normalTitle={normalTitle} />
		}
        </EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
