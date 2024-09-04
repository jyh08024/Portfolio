import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

export const HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  height: 100%;
  width: 18%;
  background: #f4f5fc;
  padding: 2.4rem;
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
  font-size: 20px;
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
