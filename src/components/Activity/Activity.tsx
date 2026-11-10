import {
  ActivityContainer,
  ActivityItem,
  ActivityList,
  ActivityStyle,
} from "./styled";
import { activities } from "../../data/activity";

const Activity = () => {
  return (
    <ActivityStyle>
      <div className="title">
        <b>ACTIVITY</b>
      </div>

      <ActivityContainer>
        {activities.map((category) => (
          <ActivityList key={category.name}>
            <div className="act_title">
              <b>{category.name}</b>
            </div>

            <ActivityItem>
              {category.items.map((item) => (
                <div className="act_item" key={item.title}>
                  <p className="act_date">{item.date}</p>
                  <div className="act_name">
                    <b>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </b>
                  </div>

                  {/* 데이터는 줄 단위로 나뉘어 있어 한 문단으로 이어서 표시 */}
                  <p className="act_explain">{item.descriptions.join(" ")}</p>
                </div>
              ))}
            </ActivityItem>
          </ActivityList>
        ))}
      </ActivityContainer>
    </ActivityStyle>
  );
};

export default Activity;
