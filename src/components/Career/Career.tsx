import { CareerItem, CareerList, CareerStyle } from "./styled";

const Career = () => {
  return (
    <CareerStyle>
      <div>
        <p className="title">
          <b>경력사항 (CAREER)</b>
        </p>
      </div>
      <div></div>
      <CareerList>
        <CareerItem>
          <div>
            <p className="period">2022.11 ~ present</p>
          </div>
          <div>
            <p className="company">
              <a href="https://encoredtech.com/ko" target="_blank">
                (주)인코어드테크놀로지스
              </a>
            </p>
          </div>
          <div>
            <p className="position">코어서비스팀 - 매니저(FE 개발자)</p>
          </div>
          <div>
            <p className="explain">
              자사의 서비스인 iDERMS를 비롯한 프로젝트들의 화면 개발 업무를
              담당하였습니다.
            </p>
          </div>

          <div className="resultItem">
            <div>
              <p className="result">
                <a href="https://vppinfo.komipo.co.kr/" target="_blank">
                  한국중부발전 전력중계플랫폼 개발
                </a>
              </p>
            </div>
            <div>
              <p className="period">2023.04 ~ present(유지보수)</p>
            </div>
            <div>
              <p className="result_ex">
                한국중부발전에서 운영중인 재생에너지관리플랫폼 중 하나인
                전력중계플랫폼의 개발에 투입되었습니다.
              </p>
            </div>
            <div>
              <p className="result_ex">
                발전기 관리 페이지의 개발, 발전기 대시보드 개발 지원을
                담당하였습니다.
              </p>
            </div>
            <div>
              <p className="result_ex">정산, 세금계산서 관련 기능 담당</p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">
                재생e 입찰제도 대응 솔루션 프론트엔드 개발
              </p>
            </div>
            <div>
              <p className="period">2023.02 ~ present</p>
            </div>
            <div>
              <p className="result_ex">
                재생e 입찰제도 대응 솔루션 프론트엔드 개발을 담당했습니다.
              </p>
            </div>
            <div>
              <p className="result_ex">
                비동기 데이터처리, 화면상에서의 값 연산 로직 추가작업, 반응형 UI
                작업
              </p>
            </div>
            <div>
              <p className="result_ex">
                실시간 데이터 모니터링 기능 개발, 고객사별 커스텀 기능 추가
              </p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">mqtt 실시간 알림 기능구현</p>
            </div>
            <div>
              <p className="period">2023.06 ~ 2023.07</p>
            </div>
            <div>
              <p className="result_ex">
                MQTT 서버와 연동하여 실시간 알림 기능을 작업하였습니다
              </p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">
                HighCharts.js 라이브러리 사용 대시보드 개발
              </p>
            </div>
            <div>
              <p className="period">2023.01 ~ present</p>
            </div>
            <div>
              <p className="result_ex">
                HighChart 차트 페이지와 대시보드 화면 개발, 유지보수를
                담당중입니다.
              </p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">jQuery 레거시 React, TypeScript로 포팅</p>
            </div>
            <div>
              <p className="period">2022.11, 2023.04, 2023.11</p>
            </div>
            <div>
              <p className="result_ex">
                jQuery로 작성된 레거시 코드들을 React,TypeScript로 리팩토링,
                포팅하는 작업을 담당하였습니다.
              </p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">iDERMS 웹 서비스 다국어 지원 기능(i18n)</p>
            </div>
            <div>
              <p className="period">2022.09 ~ 2022.10</p>
            </div>
            <div>
              <p className="result_ex">
                고등학교 채용연계 현장실습 기간동안 umi.js를 활용하여 영문버전
                제공 기능을 추가하였습니다.
              </p>
            </div>
          </div>
        </CareerItem>

        <CareerItem>
          <div></div>
          <div>
            <p className="period">2022.11 ~ 2023.01</p>
          </div>
          <div>
            <p className="company">
              <a href="#" target="_blank">
                사내 웹서비스 개발 외주
              </a>
            </p>
          </div>
          <div>
            <p className="position">프론트엔드 개발 및 배포</p>
          </div>
          <div>
            <p className="explain">
              L사의 사내 웹서비스의 개발 및 유지 보수를 진행하였습니다.
            </p>
          </div>
          <div>
            <p className="explain">
              HTML,CSS, JavaScript, Swiper.js, PHP, CodeEgniter, git 사용
            </p>
          </div>

          <div className="resultItem">
            <div>
              <p className="result">
                사이트 내 애니메이션의 전반을 담당하였습니다.
              </p>
            </div>
            <div>
              <p className="result_ex">
                로딩 애니메이션, 비주얼 애니메이션, 스크롤 애니메이션 등
              </p>
            </div>
            <div>
              <p className="result_ex">특정 요소의 슬라이드 애니메이션 등</p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">메인페이지</p>
            </div>
            <div>
              <p className="result_ex">
                메인페이지의 전반적인 개발을 담당하였습니다.
              </p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">칼럼, VIDEO, EVENT 페이지 개발</p>
            </div>
            <div>
              <p className="result_ex">
                각종 칼럼들을 담고있는 칼럼 페이지의 개발을 담당했습니다.
              </p>
            </div>

            <div>
              <p className="result_ex">
                VIMEO를 사용해 비디오를 재생, 커스텀 컨트롤러를 개발했습니다.
              </p>
            </div>

            <div>
              <p className="result_ex">
                API 연동을 통해 입력 정보를 송,수신하는 EVENT 페이지를
                개발했습니다.
              </p>
            </div>
          </div>

          <div></div>

          <div className="resultItem">
            <div>
              <p className="result">배포 진행</p>
            </div>
            <div>
              <p className="result_ex">
                완성된 작업물을 서버에 배포하는 작업을 담당하였습니다.
              </p>
            </div>
          </div>
        </CareerItem>
      </CareerList>
    </CareerStyle>
  );
};

export default Career;
