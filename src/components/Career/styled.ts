import styled from "styled-components";

export const CareerStyle = styled.div`
  width: 100%;
  height: 100%;

  > div {
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

    .period {
      font-size: 1rem;
      padding-left: 1.2rem;
    }

    .result {
      font-weight: 600;
      font-size: 1.2rem;
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

    .result_ex {
      font-size: 1.2rem;
      padding-left: 1.2rem;
      color: #ffffff;
      opacity: 0.75;
    }
  }
`;
