import styled from "styled-components";

export const CareerStyle = styled.div`
  width: 100%;
  height: 100%;

  > .career_header {
    height: 30px;
    margin: 4px 0;
  }

  .title {
    font-size: 1.6rem;
    color: #febf00;
  }
`;

export const CareerList = styled.div`
  width: 100%;
`;

export const CareerItem = styled.div`
  div {
    height: 30px;
    display: flex;
    align-items: center;
    margin: 7px 0;
  }

  p {
    font-size: 1.6rem;
    color: #f4f5fc;
  }

  .company {
    font-weight: bold;
  }

  .period {
    color: #f4f5fc90;
  }

  .position {
    font-weight: bold;
    font-size: 1rem;
  }

  .explain {
    font-weight: 200;
    color: #f4f5fc;
    opacity: 0.65;
    font-size: 1.2rem;
  }

  .resultItem {
    height: auto;
    display: block;
    margin-left: 24px;

    /* 긴 문장이 줄바꿈되어도 다음 줄과 겹치지 않도록 높이를 내용에 맞춤 */
    div {
      height: auto;
      min-height: 30px;
    }

    .period {
      font-size: 1rem;
      padding-left: 1.2rem;
    }

    /* 글자 크기 단계: 프로젝트 제목 > 소제목 > 본문 (기간은 별도) */
    .result {
      font-weight: 700;
      font-size: 1.4rem;
      position: relative;
      padding-left: 1.2rem;

      &::after {
        position: absolute;
        content: "●";
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        font-size: 10px;
      }

      a {
        text-decoration: underline;
      }
    }

    .result_sub {
      font-size: 1.2rem;
      font-weight: 600;
      padding-left: 1.2rem;
      color: #febf00;
    }

    .result_ex {
      font-size: 1.1rem;
      padding-left: 1.2rem;
      color: #ffffff;
      opacity: 0.75;
    }
  }
`;
