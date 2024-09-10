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
import { IoDocumentTextSharp } from 'react-icons/io5';

type propTypes = {
  navigationData: string[];
};

const Header = ({ navigationData }: propTypes) => {
  return (
    <HeaderStyle>
      <LogoItem>
        <h2>장영훈 포트폴리오</h2>
        <p>개발자 장영훈입니다.</p>
      </LogoItem>
      <nav>
        {navigationData?.map((navItem: string) => (
          <NavigationItem>
            <div>
              <p>{navItem}</p>
            </div>
          </NavigationItem>
        ))}
      </nav>

      <UserItem>
        <UserImage>
          <img src="/assets/image/profile2.png" alt="profileImage" />
        </UserImage>
        <div>
          <p>
            제가 짠 코드를 처음 보는 사람이어도 알아보기 쉽게 작성하도록
            노력합니다
          </p>
        </div>
      </UserItem>

      <IconList>
        <a href="https://github.com/jyh08024" target="_blank" rel="noreferrer">
          <span>Github</span>
          <FaGithub />
        </a>
        <a href="mailto:jyh08024@gmail.com" target="_blank" rel="noreferrer">
          <span>Email</span>
          <MdEmail />
        </a>
        <a
          href="https://velog.io/@jyh08024/posts"
          target="_blank"
          rel="noreferrer"
        >
          <span>Blog</span>
          <SiVelog />
        </a>
        <a
          href="https://career.programmers.co.kr/pr/jyh08024_jyh"
          target="_blank"
          rel="noreferrer"
        >
          <span>Resume</span>
          {/* <img src="/assets/icon/programmers.png" alt="programmers" /> */}
          <IoDocumentTextSharp />
        </a>
      </IconList>
    </HeaderStyle>
  );
};

export default Header;
