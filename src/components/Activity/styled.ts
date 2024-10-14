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
  /* background: #f4f5fc; */
  border-radius: 8px;
  margin-top: 18px;

  .act_title {
    font-size: 24px;
    margin-bottom: 10px;
    color: #fff;
  }

  @media screen and (max-width: 1070px) {
    width: 100%;
  }
`;

export const ActivityItem = styled.div`
  width: 100%;
  .act_item {
    width: 100%;
    padding-left: 20px;
    padding-bottom: 40px;
    position: relative;
    border-left: 2px solid #febf00;
    color: #fff;

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

    .act_name {
      margin-bottom: 10px;
      b {
        font-size: 20px;

        a {
          text-decoration: underline;
        }
      }
    }

    .act_explain {
      font-size: 18px;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 10px;
      opacity: 0.7;
    }
  }
`;
