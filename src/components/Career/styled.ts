import styled from "styled-components";

export const CareerStyle = styled.div`
	width: 100%;
	height: 100%;

	> div {
		height: 30px;
		margin: 6.4px 0;
	}

	.title {
		font-size: 1.6rem;
		margin: .4rem 0;
		color: #febf00;
	}
`;

export const CareerList = styled.div`
	width: 100%;

`;

export const CareerItem = styled.div`
	div {
		height: 30px;
		display: flex;
		align-items: center;
		margin: 6.4px 0;
	}

	p {
		font-size: 1.6rem;
    	color: #f4f5fc;
	}

	.company {
		font-weight: bold;
	}

	.period {
		color: #f4f5fc90;
	}

	.position {
		font-weight: bold;
		font-size: 1rem;
	}

	.explain {
		font-size: 16px;
	}
`;