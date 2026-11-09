import styled from "styled-components";

// 에디터 줄번호(1.6rem 글자 + 0.4rem 여백)와 줄 간격을 맞춘 JSON 문서 스타일
export const SkillsStyle = styled.div`
  width: 100%;
  padding-right: 2rem;

  p {
    margin: 0.4rem 0 0.4rem 2rem;
    font-size: 1.6rem;
    color: #f4f5fc;

    &.not_padding {
      margin-left: 0;
    }

    &.transparent {
      opacity: 0;
    }
  }

  .bracket {
    color: #febf00;
  }

  .key {
    color: skyblue;
  }

  .punct {
    color: #f4f5fc;
  }

  .annotation {
    opacity: 0.5;
  }

  .group + .group {
    margin-top: 0.8rem;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin: 0.6rem 0 0.6rem 4rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 1rem;
    border-radius: 9999px;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.4;
    transition: transform 0.15s ease;

    &.main {
      background: #febf00;
      border: 1.5px solid #febf00;
      color: #333;
    }

    &.used {
      background: transparent;
      border: 1.5px solid #febf0099;
      color: #f4f5fc;
    }
  }

  .chips .chip:hover {
    transform: translateY(-2px);
  }
`;
