import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
	// 스크롤바 전체(넓이 지정)
	::-webkit-scrollbar {
		width: 8px;
    height: 8px;
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
    src: url('/Portfolio/assets/fonts/BlackHanSans-Regular.ttf');
  }

	@font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src: url('/Portfolio/assets/fonts/Pretendard-Thin.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url('/Portfolio/assets/fonts/Pretendard-ExtraLight.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url('/Portfolio/assets/fonts/Pretendard-Light.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url('/Portfolio/assets/fonts/Pretendard-Regular.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url('/Portfolio/assets/fonts/Pretendard-Medium.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url('/Portfolio/assets/fonts/Pretendard-SemiBold.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url('/Portfolio/assets/fonts/Pretendard-Bold.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src: url('/Portfolio/assets/fonts/Pretendard-ExtraBold.otf');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    src: url('/Portfolio/assets/fonts/Pretendard-Black.otf');
  }

  @font-face {
    font-family: "Menlo";
    src: url('/Portfolio/assets/fonts/Menlo-Regular.ttf');
  }

  /* @font-face {
    font-family: "Monaco";
    src: url('/Portfolio/assets/fonts/Monaco-Linux.ttf');
  } */

  //웹 기본 스타일 초기화
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "Menlo", "Pretendard", "Microsoft Phagspa";

    outline: none;
    word-break: break-all;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  html, body {
    font-size: 16px;
    font-family: "Menlo", "Pretendard", "Microsoft Phagspa";
    letter-spacing: -1px;
  }

  .wrap {
	width: 100%;
	max-width: 100vw;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
  }

  .title {
		font-size: 1.6rem;
    	margin: 0.4rem 0;
		color: #febf00;
  }

  @media only screen and (max-width: 1600px) {
	html, body {
		font-size: 15px;
	}
  }

  @media only screen and (max-width: 1440px) {
	html, body {
		font-size: 14px;
	}
  }

  @media only screen and (max-width: 1300px) {
	html, body {
		font-size: 12px;
	}
  }
`;
