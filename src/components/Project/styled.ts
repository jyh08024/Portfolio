import styled from "styled-components";

export const ProjectStyle = styled.div`
  width: 100%;
  padding: 20px 50px;
`;

export const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ProjectItem = styled.div`
  width: 65%;
  height: 100%;
  max-height: 700px;
  min-height: 700px;
  margin-top: 24px;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 50%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background: #33333390;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProjectInfo = styled.div`
  padding: 32px;
  color: #333;

  .project_title {
    font-size: 36px;
    font-weight: 800;
    color: #333;
  }

  .project_type {
    margin-top: 4px;
    font-size: 300;
    color: #232fa9;
  }

  .project_explain {
    margin-top: 16px;
    font-size: 22px;
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
`;
