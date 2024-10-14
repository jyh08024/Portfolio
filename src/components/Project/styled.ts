import styled from "styled-components";

export const ProjectStyle = styled.div`
  width: 100%;
  padding: 0 50px;
`;

export const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const ProjectItem = styled.div`
  width: 100%;
  height: 100%;
  max-height: 700px;
  min-height: 700px;
  margin-top: 24px;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectImage = styled.div`
  width: 45%;
  height: 100%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background: #33333390;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  @media screen and (max-width: 1300px) {
    width: 100%;
    height: 30%;
  }
`;

export const ProjectInfo = styled.div`
  padding: 3.7rem 32px;
  height: 100%;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .project_title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #333;
  }

  .project_type {
    margin-top: 4px;
    font-weight: 3;
    color: #232fa9;
  }

  .project_explain {
    margin-top: 16px;
    font-size: 1.4rem;
  }

  .info_container {
    p {
      font-size: 20px;
    }
  }

  .project_role {
    margin-top: 10px;
    font-size: 18px;

    li {
      margin-top: 8px;
      margin-left: 32px;
      list-style: disc;
    }
  }

  .project_skill {
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;

    div {
      padding: 0.6rem 1.2rem;
      border-radius: 99999px;
      background: #febf00;
      font-weight: bold;
    }
  }

  .link_list {
    display: flex;
    align-items: center;
    column-gap: 4px;
    margin-top: 20px;

    .disa {
      opacity: 0.7;
      pointer-events: none;
    }

    .redirect {
      padding: 14px 18px;
      border-radius: 9999px;
      background: #febf00;

      a {
        display: flex;
        align-items: center;
      }

      p {
        margin-left: 8px;
        font-size: 1.1rem;
      }
    }

    .github {
      padding: 14px 18px;
      border-radius: 9999px;
      background: skyblue;

      a {
        display: flex;
        align-items: center;
      }

      p {
        margin-left: 8px;
        font-size: 1.1rem;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem 32px;
  }
`;
