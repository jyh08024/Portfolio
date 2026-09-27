import { IntroduceStyle, IntroduceContent } from "./styled";

const Introduce = () => {
  return (
    <IntroduceStyle>
      <IntroduceContent>
        <p className="heading">
          <span className="mark"># </span>자기소개 (INTRODUCE)
        </p>
        <p className="transparent">-</p>
      </IntroduceContent>
    </IntroduceStyle>
  );
};

export default Introduce;
