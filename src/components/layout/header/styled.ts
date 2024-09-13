import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

export const HeaderStyle = styled.header`
  /*position: fixed;*/
  /*left: 0;*/
  height: 100vh;
  width: 18%;
  background: #f4f5fc;
  padding: 2.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #434041;
  color: #f4f5fc;
  border-right: 1px solid #f4f5fc20;
`;

export const LogoItem = styled.div`
  h2 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }

`;

export const NavigationItem = styled.div`
  font-size: 22px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-bottom: 2px solid #febf00;
    color: #febf00;
  }
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 17px;
  }
`;

export const UserImage = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 999px;
  overflow: hidden;
  background: #232fa9;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      font-size: 14px;
      opacity: 0.7;
      margin-bottom: 0.4rem;
    }
  }

  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;
