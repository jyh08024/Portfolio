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
                    rel="noreferrer"
                  >
                    2022 경기 콘텐츠 창의학교 경진대회 대상 (경기도교육감상)
                    (2022-11)
                  </a>
                </b>
              </div>

              <div className="act_explain">
                <p>
                  경기 콘텐츠 창의학교 교육 프로그램에 참여한 특성화고와
                  마이스터고 학생들이
                </p>
              </div>
              <div className="act_explain">
                <p>
                  개발한 콘텐츠 프로젝트 결과물을 최종 발표하는 행사에 참여하여
                </p>
              </div>
              <div className="act_explain">
                <p>
                  리미디(우울증 치료에 도움을 주는 디지털 치료 모바일 앱)을
                  제작,
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
                  주어진 주제에 맞게 웹사이트를 기획, 디자인, 개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>경기도 대표로 전국 3위를 수상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2022 경기도 기능경기대회 웹디자인 및 개발 부문 금메달 (1위)
                  (2022-04)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  주어진 주제에 맞게 웹사이트를 기획, 디자인, 개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>출전하여 1위, 금메달을 수상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2021 전국기능경기대회 웹디자인 및 개발 우수상 (4위) (2021-10)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  주어진 주제와 맞게 웹사이트를 기획, 디자인, 개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>경기도 대표로 출전하여 전국 4위 우수상을 수상하였습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2021 전국기능경기대회 웹디자인 및 개발 팀챌린지 대상 (1위)
                  (2021-10)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  대회에 참여한 사람들과 랜덤하게 팀을 이루어 협업하여
                </p>
              </div>
              <div className="act_explain">
                <p>
                  주제에 맞는 프로젝트를 개발, 홍보와 발표까지 진행하는 대회에서
                </p>
              </div>
              <div className="act_explain">
                <p>1위 대상을 수상했습니다.</p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>
                  2021 경기도 기능경기대회 웹디자인 및 개발 동메달 (3위)
                  (2021-04)
                </b>
              </div>

              <div className="act_explain">
                <p>
                  주어진 주제에 맞게 웹사이트를 기획, 디자인, 개발하는 대회에
                </p>
              </div>
              <div className="act_explain">
                <p>출전하여 3위를 수상하였습니다.</p>
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
                <p>네트워크 관련 분야에 관심이 있어</p>
              </div>
              <div className="act_explain">
                <p>
                  한국산업인력공단에서 시행하는 기능사 자격증을 취득하였습니다.
                </p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>웹디자인기능사 (2021-07)</b>
              </div>

              <div className="act_explain">
                <p>웹 개발 직무에 전문성을 키우기 위하여</p>
              </div>
              <div className="act_explain">
                <p>
                  한국산업인력공단에서 시행하는 기능사 자격증을 취득하였습니다.
                </p>
              </div>
            </div>

            <div className="act_item">
              <div className="act_name">
                <b>GTQ 1급 (2021-06)</b>
              </div>

              <div className="act_explain">
                <p>웹 디자인 분야에 관심이 있어</p>
              </div>
              <div className="act_explain">
                <p>
                  한국생산성본부에서 실시하는 GTQ 자격증의 포토샵 부문을
                  취득하였습니다.
                </p>
              </div>
            </div>
          </ActivityItem>
        </ActivityList>

        <ActivityList>
          <div className="act_title">
            <b>기타</b>
          </div>

          <ActivityItem>
            <div className="act_item">
              <div className="act_name">
                <b>2024 국제기능올림픽 1차 국가대표 선발전 참가 (2023-07)</b>
              </div>

              <div className="act_explain">
                <p>
                  2023년에 개최한 2024년도 국제기능올림픽 대회 국가대표
                  선발전에
                </p>
              </div>
              <div className="act_explain">
                <p>모바일앱개발 직종으로 참가하였습니다.</p>
              </div>
            </div>
          </ActivityItem>
        </ActivityList>
      </ActivityContainer>
    </ActivityStyle>
  );
};

export default Activity;
