import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

export const HeaderStyle = styled.header`
  /*position: fixed;*/
  /*left: 0;*/
  height: 100vh;
  width: 16%;
  background: #f4f5fc;
  background-color: #434041;
  color: #f4f5fc;
  border-right: 1px solid #f4f5fc20;
`;

export const HeaderContent = styled.div`
  padding: 2.6rem 2.2rem;
  height: calc(100% - 30%);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const LogoBackground = styled.div`
  background: #febf00;
  width: 100%;
  height: 90px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

export const LogoItem = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 2rem;
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

  h3 {
    margin: 1.2rem 0 0.3rem 0;
  }

  p {
    font-size: 14px;
  }
`;

export const UserImage = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 999px;
  overflow: hidden;
  background: #232fa9;

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
  margin-bottom: 1.4rem;

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

export const FooterStyle = styled.div`
  p {
    margin: 0.2rem 0;
    font-size: 14px;
  }
`;
