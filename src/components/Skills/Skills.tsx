import { SkillsStyle, SkillsList } from "./styled";

const Skills = () => {
  return (
    <SkillsStyle>
      <div className="title">
        <b>SKILL</b>
      </div>
      <SkillsList>
        <div>
          <p>현재 사용가능한, 사용해본 기술 스택입니다.</p>
        </div>
        <div></div>
        <div>
          <p>
            <b className="dataKey">FRONT</b>
          </p>
        </div>
        <div className="skill_item">
          <div className="main">React</div>
          <div className="main">TypeScript</div>
          <div className="main">jQuery</div>
          <div className="main">Dart-Flutter</div>
          <div className="not_main">HTML, CSS</div>
          <div className="not_main">LESS</div>
        </div>
        <div className="skill_item">
          <div className="not_main">Redux</div>
          <div className="not_main">styled-components</div>
        </div>

        <div></div>
        <div>
          <p>
            <b className="dataKey">BACK</b>
          </p>
        </div>
        <div className="skill_item">
          <div className="not_main">MySQL</div>
          <div className="not_main">PHP</div>
          <div className="not_main">Node.js</div>
          <div className="not_main">Nest.js</div>
        </div>

        {/*<div></div>
				<div style={{marginTop: "20px"}}>
					<p><b className="dataKey">Explain</b></p>
				</div>

				<div>
					<p className="dataKey">React</p>
				</div>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<p className="explain_text">React Hooks, 컴포넌트, state에 대한 이해와 경험이 있습니다. 현업에서 사용중입니다.</p>
				</div>*/}
      </SkillsList>
    </SkillsStyle>
  );
};

export default Skills;
