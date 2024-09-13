import styled from 'styled-components';

interface MyDivProps {
	'data-nowTab'?: boolean; // 혹은 필요에 따라 string, number 등
  }

export const CodeBluckStyle = styled.div`
  /* padding: 3rem; */
  width: calc(100vw - 18%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: linear-gradient(135deg, #f4f5fc 0%, #c3cfe2 100%); */
`;

export const Bluck = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  /* border-radius: 8px; */
`;

export const BlockHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 1.6rem;
  background: #434041;
  /* border-radius: 8px; */
  display: flex;
  align-items: center;
  /*border-left: 1px solid #f4f5fc20;*/
  border-right: 1px solid #f4f5fc20;

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 6px;
  }

  .red_dot {
    background: #f5655b;
  }

  .orange_dot {
    background: #febf00;
  }

  .green_dot {
    background: #43c645;
  }
`;

export const FileBar = styled.div`
  width: 100%;
  overflow: auto;
  background: #444;

  .file_list {
    width: auto;
    display: flex;
  }
`;

export const FileItem = styled.div<MyDivProps>`
  min-width: 100px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  background: #333;

  border-bottom: ${props => props['data-nowTab'] == true ? '1px solid #febf00' : ''};

  p {
    margin-left: 8px;
    margin-right: 20px;
    color: #febf00;
  }
`;

export const EditorContainer = styled.div`
	height: calc(100% - 70px - 52px);
	overflow: auto;
`;

export const EditorLines = styled.div`
	width: 5%;
	.line_item {
		width: 100%;
		text-align: center;
		/*padding: .2rem 2.4rem;*/
		font-size: 1.2rem;
		color: #ffffff50;
		margin: .4rem 0;
	}
`;
