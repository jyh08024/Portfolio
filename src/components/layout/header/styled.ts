import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

export const HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  height: 100%;
  width: 18%;
  background: #f4f5fc;
  padding: 7rem 2.4rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const LogoItem = styled.div`
  h2 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }

  margin-bottom: 4rem;
`;

export const NavigationItem = styled.div`
  font-size: 24px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-bottom: 2px solid #232fa9;
    color: #232fa9;
  }
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;

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
    object-fit: cover;
  }
`;

export const IconList = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    cursor: pointer;
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
