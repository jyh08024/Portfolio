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
                  <div className="act_name">
                    <b>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.title} ({item.date})
                        </a>
                      ) : (
                        `${item.title} (${item.date})`
                      )}
                    </b>
                  </div>

                  {item.descriptions.map((description) => (
                    <div className="act_explain" key={description}>
                      <p>{description}</p>
                    </div>
                  ))}
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
