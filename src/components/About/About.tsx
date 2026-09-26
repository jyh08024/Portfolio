import { useEffect } from "react";
import { AboutStyle, AboutContent } from "./styled";
import { SkillsStyle, SkillsList } from "../Skills/styled";

const AboutMe = () => {
  return (
    <AboutStyle>
      <AboutContent>
        <div>
          <p className="not_padding">
            <span className="blue">export</span>{" "}
            <span className="blue">const</span> AboutMe{" "}
            <span className="purpleRed">=</span> (){" "}
            <span className="purpleRed">=&gt;</span> &#123;
          </p>
          <p className="yellow">
            <b>안녕하세요! 개발자 장영훈의 포트폴리오 사이트입니다.</b>
          </p>
          <p className="transparent">-</p>

          <p>
            <span className="annotation">// 인적사항</span>
          </p>
          <p>
            <span className="blue">const</span> 이름{" "}
            <span className="purpleRed">=</span>{" "}
            <span className="green">"장영훈"</span>
          </p>
          <p>
            <span className="blue">const</span> 생년월일{" "}
            <span className="purpleRed">=</span>{" "}
            <span className="green">"2004년 04월 08일"</span>
          </p>
          <p>
            <span className="blue">const</span> 전화번호{" "}
            <span className="purpleRed">=</span>{" "}
            <span className="green">"010-5665-3607"</span>
          </p>
          <p>
            <span className="blue">const</span> 이메일{" "}
            <span className="purpleRed">=</span>{" "}
            <span className="green">
              "jyh2980465@gmail.com ( jyh08024@gmail.com )"
            </span>
          </p>
          <p>
            <span className="blue">const</span> 학력{" "}
            <span className="purpleRed">=</span>{" "}
            <span className="green">"안산공업고등학교 컴퓨터과 (졸업)"</span>
          </p>
          <p>
            <span className="blue">const</span> 병역{" "}
            <span className="purpleRed">=</span>{" "}
            <span className="green">
              "현역 산업기능요원 복무 중(2028년 11월 복무만료)"
            </span>
          </p>

          <p className="transparent">-</p>
          <p>
            <span className="blue">return</span>{" "}
            <a
              href="/Portfolio/assets/file/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              장영훈_이력서
            </a>
            <span className="blue">;</span>
          </p>
          <p className="not_padding">&#125;</p>
        </div>
        <div className="profile_image">
          <img src="/Portfolio/assets/image/profile.png" alt="profile" />
        </div>
      </AboutContent>
    </AboutStyle>
  );
};

export default AboutMe;
