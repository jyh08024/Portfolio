import { CareerItem, CareerList, CareerStyle } from "./styled";


const Career = () => {
	return (
		<CareerStyle>
			<div>
				<p className='title'><b>경력사항 (CAREER)</b></p>
			</div>
			<div></div>
			<CareerList>
				<CareerItem>
					<div><p className='period'>2022.10 ~ present</p></div>
					<div><p className='company'>(주)인코어드테크놀로지스</p></div>
					<div><p className='position'>코어서비스팀 - 매니저(FE 개발자)</p></div>
					<div></div>
					<div><p className='explain'>자사의 서비스인 iDERMS를 비롯한 프로젝트들의 화면 개발 업무를 담당하였습니다.</p></div>
				</CareerItem>
			</CareerList>
		</CareerStyle>
	);
};

export default Career;