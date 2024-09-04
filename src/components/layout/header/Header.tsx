import React from 'react';
import {
  HeaderStyle,
  NavigationItem,
  LogoItem,
  UserItem,
  UserImage,
  IconList,
} from './styled';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiVelog } from 'react-icons/si';

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

        <UserItem>
          <UserImage>
            <img src="" alt="" />
          </UserImage>
          <div>
            <p>
              처음보는 사람도 금방 읽을 수 있는 코드를 짜는 것을 선호합니다.
            </p>
          </div>
        </UserItem>

        <IconList>
          <a href="https://github.com/jyh08024">
            <FaGithub />
          </a>
          <a href="mailto:jyh08024@gmail.com">
            <MdEmail />
          </a>
          <a href="https://velog.io/@jyh08024/posts">
            <SiVelog />
          </a>
          <a href="https://career.programmers.co.kr/pr/jyh08024_jyh">
            <img src="/assets/icon/programmers.png" alt="programmers" />
          </a>
        </IconList>
      </header>
    </HeaderStyle>
  );
};

export default Header;
