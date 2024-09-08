import styled from 'styled-components';

export const AboutStyle = styled.div`
	padding: 3rem;
	width: calc(100vw - 18%);
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(135deg, #f4f5fc 0%, #c3cfe2 100%);
`;

export const CodeBlock = styled.div`
	width: 100%;
	height: 100%;
	background: #333;
	border-radius: 8px;
`;

export const BlockHeader = styled.div`
	width: 100%;
	padding: 2rem;
	background: #434041;
	border-radius: 8px 0px;
	display: flex;
	align-items: center;

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
		background: #f6bd3b;
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

export const FileItem = styled.div`
	min-width: 100px;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #ffffff;
	background: #333;

	p {
		margin-left: 8px;
		margin-right: 20px;
	}
`;