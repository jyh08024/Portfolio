import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
	// 스크롤바 전체(넓이 지정)
	::-webkit-scrollbar {
		width: 8px;
	}
	// 스크롤바 표시
	::-webkit-scrollbar-thumb {
		background: #febf00;
		border-radius: 8px;
	}
	// 스크롤바 배경
	::-webkit-scrollbar-track {
		background: #f4f5fc;
	}

  @font-face {
    font-family: "BlackHanSans";
    src: url('/assets/fonts/BlackHanSans-Regular.ttf');
  }

	@font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src: url('/assets/fonts/Pretendard-Thin.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url('/assets/fonts/Pretendard-ExtraLight.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url('/assets/fonts/Pretendard-Light.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url('/assets/fonts/Pretendard-Regular.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url('/assets/fonts/Pretendard-Medium.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url('/assets/fonts/Pretendard-SemiBold.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url('/assets/fonts/Pretendard-Bold.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src: url('/assets/fonts/Pretendard-ExtraBold.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    src: url('/assets/fonts/Pretendard-Black.otf');
  }

  //웹 기본 스타일 초기화
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Pretendard;

    outline: none;
    word-break: break-all;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  html, body {
    font-size: 16px;
    font-family: "Pretendard", "Microsoft Phagspa";
    letter-spacing: -1px;
  }

  .wrap {
	width: 100%;
	max-width: 100vw;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
  }
`;
