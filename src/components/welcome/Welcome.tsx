import React from 'react';
import { WelcomeStyle, WelcomeTitle } from './styled';


export const WelcomeComponents = () => {
	return (
		<WelcomeStyle>
			<WelcomeTitle>
				<h1>안녕하세요.</h1>
				<h1>개발자 장영훈입니다.</h1>
				<p>웹 프론트 뿐 아니라 모바일, 백앤드 등 많은 분야에 관심이 있습니다.</p>
			</WelcomeTitle>			
		</WelcomeStyle>
	)
}