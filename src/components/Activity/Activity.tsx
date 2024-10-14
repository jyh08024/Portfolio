import {
  ActivityContainer,
  ActivityItem,
  ActivityList,
  ActivityStyle,
} from "./styled";

const Activity = () => {
  return (
    <ActivityStyle>
      <div className="title">
        <b>ACTIVITY</b>
      </div>

      <ActivityContainer>
        <ActivityList>
          <div className="act_title">
            <b>수상경력</b>
          </div>

          <ActivityItem>
            <div className="act_item">
              <div className="act_name">
                <b>
                  <a
                    href="https://www.kgnews.co.kr/news/article.html?no=727771"
                    target="_blank"
                  >
                    2022 경기 콘텐츠 창의학교 경진대회 대상 (2022-11)
                  </a>
                </b>
              </div>

              <div className="act_explain">
                <p>
                  특성화고, 마이스터고 학생들이 개발한 프로젝트 결과물을
                  발표하는 행사에 참여,
                </p>
              </div>
              <div className="act_explain">
                <p>
                  리미디(우울증 치료에 도움을 주는 디지털 치료 모바일 앱)을
                  제작하여
                </p>
              </div>
              <div className="act_explain">
                <p>대상(경기도교육감 상)을 수상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2022 전국기능경기대회 웹디자인 및 개발 동메달 (3위) (2022-09)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  주어진 과제에 맞게 웹 사이트를 디자인, 프론트엔드, 백엔드를
                  개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>경기도 대표로 참가하여 전국 3위로 입상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2022 경기도 기능경기대회 웹디자인 및 개발 부문상 금메달 (1위)
                  (2022-04)
                </b>
              </div>
              <div className="act_explain">
                <p>
                  주어진 과제에 맞게 웹 사이트를 디자인, 프론트엔드, 백엔드를
                  개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>참가하여 1위로 입상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2021 전국 기능경기대회 웹디자인 및 개발 부문 우수 (4위)
                  (2021-10)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  주어진 과제에 맞게 웹 사이트를 디자인, 프론트엔드, 백엔드를
                  개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>경기도 대표로 참가하여 4위로 입상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2021 전국기능경기대회 웹디자인 및 개발 부문 팀챌린지 대상
                  (1위) (2021-10)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  랜덤한 팀원들과 함께 협업하여 웹사이트의 개발, 홍보, 발표까지
                </p>
              </div>
              <div className="act_explain">
                <p>진행하는 대회에서 1위 대상을 수상했습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2021 경기도 기능경기대회 웹디자인 및 개발 부문 동메달 (3위)
                  (2021-04)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  주어진 과제에 맞게 웹 사이트를 디자인, 프론트엔드, 백엔드를
                  개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>참가하여 3위로 입상하였습니다.</p>
              </div>
            </div>
          </ActivityItem>
        </ActivityList>

        <ActivityList>
          <div className="act_title">
            <b>자격증</b>
          </div>

          <ActivityItem>
            <div className="act_item">
              <div className="act_name">
                <b>정보처리기능사 (2024-04)</b>
              </div>

              <div className="act_explain">
                <p>소프트웨어, 정보통신 관련 분야에 전문성을 높이기 위해</p>
              </div>
              <div className="act_explain">
                <p>
                  한국산업인력공단에서 시행하는 정보처리기능사 자격증을
                  취득하였습니다.
                </p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>정보기기운용기능사 (2022-06)</b>
              </div>

              <div className="act_explain">
                <p>네트워크와 관련된 분야에 관심이 있어</p>
              </div>
              <div className="act_explain">
                <p>산업인력공단에서 시행하는 자격증을 취득하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>웹디자인기능사 (2021-07)</b>
              </div>

              <div className="act_explain">
                <p>웹 개발 직무에 도움이 될 것이라 생각해</p>
              </div>
              <div className="act_explain">
                <p>산업인력공단에서 시행하는 자격증을 취득하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>GTQ 1급 (2021-06)</b>
              </div>

              <div className="act_explain">
                <p>디자인 툴 사용에 전문성을 높이기 위해</p>
              </div>
              <div className="act_explain">
                <p>
                  한국생산성본부에서 실시하는 GTQ 자격증의 포토샵 부분을
                  취득하였습니다.
                </p>
              </div>
            </div>
          </ActivityItem>
        </ActivityList>
      </ActivityContainer>
    </ActivityStyle>
  );
};

export default Activity;
