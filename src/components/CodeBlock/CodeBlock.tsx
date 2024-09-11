import React from 'react';
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
import { MdNotes } from "react-icons/md";

const CodeBlock = () => {
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
			<FileItem data-nowTab={true}>
              <MdNotes />
              <p>Welcome.md</p>
            </FileItem>
            <FileItem>
              <FaReact color="#61dbfb" data-nowTab={false} />
              <p>About.Me</p>
            </FileItem>
          </div>
        </FileBar>

        <EditorContainer>
			<EditorLines>
				{
					new Array(100).fill('').map((_: string, index: number) => 
						<div className="line_item">
					{index + 1}
				</div>
				)
				}
			</EditorLines>
		</EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
