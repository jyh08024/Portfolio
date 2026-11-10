import styled from "styled-components";

export const ActivityStyle = styled.div`
  width: 100%;
`;

export const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 32px;
`;

export const ActivityList = styled.div`
  width: 48%;
  padding: 20px 0;
  border-radius: 8px;
  margin-top: 18px;

  .act_title {
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
    color: #fff;
  }

  @media screen and (max-width: 1070px) {
    width: 100%;
  }
`;

// 글자 크기 단계는 CAREER 탭과 동일: 항목 제목 1.2rem > 설명 1.1rem > 날짜 1rem
export const ActivityItem = styled.div`
  width: 100%;

  .act_item {
    width: 100%;
    padding-left: 20px;
    padding-bottom: 2.4rem;
    position: relative;
    border-left: 2px solid #febf00;
    color: #fff;
    word-break: keep-all;
    overflow-wrap: break-word;

    * {
      word-break: inherit;
    }

    &:last-child {
      padding-bottom: 0.4rem;
    }

    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 9999px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #febf00;
    }

    .act_date {
      font-size: 1rem;
      line-height: 1;
      color: #f4f5fc90;
    }

    .act_name {
      margin-top: 0.6rem;

      b {
        font-size: 1.2rem;
        line-height: 1.5;

        a {
          text-decoration: underline;
        }
      }
    }

    .act_explain {
      margin-top: 0.6rem;
      font-size: 1.1rem;
      line-height: 1.7;
      opacity: 0.75;
    }
  }
`;
