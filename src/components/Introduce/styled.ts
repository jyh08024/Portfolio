import styled from "styled-components";

export const IntroduceStyle = styled.div`
  width: 100%;
  padding-right: 2rem;
`;

export const IntroduceContent = styled.div`
  width: 100%;

  p {
    color: #f4f5fc;
    margin: 0.4rem 0;
    font-size: 1.6rem;
    line-height: 1.2;

    &.heading {
      color: #febf00;
      font-weight: bold;
    }

    &.sub_heading {
      color: #8797eb;
      font-weight: bold;
    }

    &.transparent {
      opacity: 0;
    }

    span {
      &.mark {
        color: #e4007f;
      }
    }
  }
`;
