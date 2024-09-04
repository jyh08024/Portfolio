import React from 'react';
import { HeaderStyle, NavigationItem, LogoItem } from './styled';

const Header = () => {
  return (
    <HeaderStyle>
      <header>
        <LogoItem>
          <h2>장영훈 포트폴리오</h2>
          <p>개발자 장영훈입니다.</p>
        </LogoItem>
        <nav>
          <NavigationItem>
            <div>
              <p>MENU 1</p>
            </div>
          </NavigationItem>
          <NavigationItem>
            <div>
              <p>MENU 2</p>
            </div>
          </NavigationItem>
        </nav>
      </header>
    </HeaderStyle>
  );
};

export default Header;
