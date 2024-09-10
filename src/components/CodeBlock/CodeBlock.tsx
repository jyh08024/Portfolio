import React from 'react';
import {
  CodeBluckStyle,
  Bluck,
  BlockHeader,
  FileBar,
  FileItem,
  EditorContainer,
} from './styled';
import { FaReact } from 'react-icons/fa';

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
            <FileItem>
              <FaReact color="#61dbfb" />
              <p>About Me</p>
            </FileItem>
          </div>
        </FileBar>

        <EditorContainer></EditorContainer>
      </Bluck>
    </CodeBluckStyle>
  );
};

export default CodeBlock;
