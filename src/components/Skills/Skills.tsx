import { SkillsStyle } from "./styled";
import { skillGroups } from "../../data/skills";

const Skills = () => {
  return (
    <SkillsStyle>
      <p className="not_padding">
        <span className="bracket">{"{"}</span>
      </p>

      {skillGroups.map((group, index) => (
        <div className="group" key={group.key}>
          <p>
            <span className="key">"{group.key}"</span>
            <span className="punct">: </span>
            <span className="bracket">[</span>
          </p>
          <ul className="chips">
            {group.main.map((skill) => (
              <li className="chip main" key={skill}>
                {skill}
              </li>
            ))}
            {group.used.map((skill) => (
              <li className="chip used" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
          <p>
            <span className="bracket">]</span>
            {index < skillGroups.length - 1 && <span className="punct">,</span>}
          </p>
        </div>
      ))}

      <p className="not_padding">
        <span className="bracket">{"}"}</span>
      </p>
    </SkillsStyle>
  );
};

export default Skills;
