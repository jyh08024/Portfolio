import { IntroduceStyle, IntroduceContent } from "./styled";

const Introduce = () => {
  return (
    <IntroduceStyle>
      <IntroduceContent>
        <p className="heading">
          <span className="mark"># </span>자기소개 (INTRODUCE)
        </p>
        <p className="transparent">-</p>

        <p>
          고등학교 시절 웹 개발 기능반에 소속되었던 것을 계기로 프로그래밍에
          발을 들였습니다.
        </p>
        <p>
          현재는 React, TypeScript와 같은 웹 프론트엔드 언어를 주로 사용중이며
        </p>
        <p>Dart-Flutter를 사용한 앱 개발 분야에 관심을 가지고 있습니다.</p>
      </IntroduceContent>
    </IntroduceStyle>
  );
};

export default Introduce;
