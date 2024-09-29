import { useEffect } from 'react';
import { AboutStyle, AboutContent } from './styled';

const AboutMe = () => {
	return (
		<AboutStyle>
			<AboutContent>
				<div>
					<p><span className='blue'>const</span> AboutMe <span className='purpleRed'>=</span> () <span className='purpleRed'>=&gt;</span> &#123;</p>
					<p className='yellow'><b>&nbsp;&nbsp;&nbsp;&nbsp;안녕하세요! 개발자 장영훈의 포트폴리오 사이트입니다.</b></p>
					<p className='transparent'>-</p>

					<p>&nbsp;&nbsp;&nbsp;&nbsp;고등학교 시절 웹 개발 기능반에 소속되었던 것을 계기로 프로그래밍에 발을 들였습니다.</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;현재는 React, TypeScript와 같은 웹 프론트엔드 언어를 주로 사용중이며</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;Dart-Flutter를 사용한 앱 개발 분야에 관심을 가지고 있습니다.</p>

					<p className='transparent'>-</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='annotation'>// 인적사항</span></p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blue'>const</span> 이름 <span className='purpleRed'>=</span> <span className='green'>"장영훈"</span></p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blue'>const</span> 생년월일 <span className='purpleRed'>=</span> <span className='green'>"2004년 04월 08일"</span></p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blue'>const</span> 전화번호 <span className='purpleRed'>=</span> <span className='green'>"010-5665-3607"</span></p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blue'>const</span> EMAIL <span className='purpleRed'>=</span> <span className='green'>"jyh2980465@gmail.com ( jyh08024@gmail.com )"</span></p>

					<p className='transparent'>-</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blue'>return</span> <a href="https://career.programmers.co.kr/pr/jyh08024_jyh">장영훈_이력서</a> <span className='blue'>;</span></p>
					<p>&#125;</p>

					<p className='transparent'>-</p>
					<p><span className='blue'>export default </span> <span className='deepblue'>AboutMe<span className='blue'>;</span></span></p>
				</div>
				<div className='profile_image'>
					<img src="/assets/image/profile.png" alt="profile" />
				</div>
			</AboutContent>
		</AboutStyle>
	);
};

export default AboutMe;