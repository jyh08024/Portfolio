import styled, { keyframes } from "styled-components";

export const WelcomeStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 0 7rem 7rem;
`;

export const WelcomeTitle = styled.div`
  color: #f4f5fc;
`;

export const typeFade = keyframes`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const TypingArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;

  @media screen and (max-width: 960px) {
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-size: 3rem;
    color: #fff;
    margin: 0 8px;

    &:nth-child(1) {
      margin: 0 8px 0 0;
    }

    @media screen and (max-width: 1300px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 960px) {
      margin: 0;
    }
  }

  .marker_text {
    position: relative;
    color: #febf00;

    &::after {
      content: "";
      width: 3px;
      height: 80%;
      position: absolute;
      top: 50%;
      left: 103%;
      transform: translateY(-50%);
      background: #f4f5fc;
      animation: ${typeFade} 1s infinite;
    }
  }
`;

export const WelcomeContent = styled.div`
  margin-top: 3rem;
  vertical-align: bottom;

  p {
    font-size: 1.2rem;
    font-weight: 200;
    color: #f4f5fc;
    margin: 0.8rem 0;
  }
`;
