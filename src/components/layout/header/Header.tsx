import React from "react";
import {
  HeaderStyle,
  NavigationItem,
  LogoItem,
  UserItem,
  UserImage,
  IconList,
  LogoBackground,
  HeaderContent,
  FooterStyle,
} from "./styled";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiVelog } from "react-icons/si";
import { IoDocumentTextSharp } from "react-icons/io5";

type propTypes = {
  navigationData: string[];
  userName: string;
  setNowTab: React.Dispatch<React.SetStateAction<string>>;
  setOpenTab: React.Dispatch<React.SetStateAction<string[]>>;
};

const Header = ({
  navigationData,
  userName,
  setNowTab,
  setOpenTab,
}: propTypes) => {
  return (
    <HeaderStyle>
      <LogoItem>
        <LogoBackground />
        <UserImage>
          <img src="/Portfolio/assets/image/profile2.png" alt="profileImage" />
        </UserImage>
        <UserItem>
          <h3>개발자 장영훈</h3>
          <div>
            <p>초보자도 보기 쉬운 간단한 코드를 지향합니다</p>
          </div>
        </UserItem>
      </LogoItem>

      <HeaderContent>
        <nav>
          {navigationData?.map((navItem: string) => (
            <NavigationItem
              onClick={() => {
                setNowTab(navItem);
                setOpenTab((prevState) =>
                  prevState.includes(navItem)
                    ? prevState
                    : [...prevState, navItem]
                );
              }}
            >
              <div>
                <p>{navItem}</p>
              </div>
            </NavigationItem>
          ))}
        </nav>

        <FooterStyle>
          <IconList>
            <a
              href="https://github.com/jyh08024"
              target="_blank"
              rel="noreferrer"
            >
              <span>Github</span>
              <FaGithub />
            </a>
            <a
              href="mailto:jyh08024@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
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
              {/* <img src="/Portfolio/assets/icon/programmers.png" alt="programmers" /> */}
              <IoDocumentTextSharp />
            </a>
          </IconList>

          <p>
            Copyright {new Date().getFullYear()}. {userName}. All Rights
            reserved.{" "}
          </p>
          <p>
            Designed By <a href="https://github.com/jyh08024">장영훈</a>{" "}
          </p>
        </FooterStyle>
      </HeaderContent>
    </HeaderStyle>
  );
};

export default Header;
