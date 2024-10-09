import styled from "styled-components";

export const SkillsStyle = styled.div`
	width: 100%;

	.title {
    	font-size: 1.6rem;
    	margin: 0.4rem 0;
    	color: #febf00;
  	}
`;

export const SkillsList = styled.div`
	width: 100%;

	div {
		margin: .4rem 0;
		height: 30px;
	}

	p {
		color: #f4f5fc;
		font-size: 1.6rem;
		display: flex;
		align-items: center;

		&.yellow {
			color: #febf00;
			padding-left: 0;
		}

		span {
			&.key {
				color: #febf00;
			}
		}

		img {
			height: 30px;
			margin-right: 12px;
		}

		&.explain_text {
			font-size: 1.2rem;
			opacity: .9;
		}

		&.dataKey {
			color: #febf00;
		}
	}

	.skill_item {
		display: flex;
		align-items: center;
		column-gap: 8px;
		height: auto;
		margin: 0;

		> div {
			display: flex;
			align-items: center;
			padding: 8px 24px;
			font-weight: bold;
			height: auto;
			border-radius: 99999px;
			cursor: pointer;

			&.main {
				background: #febf00;
				color: #333;
			}

			&.not_main {
				background: #333;
				border: 2px solid #febf00;
				color: #f4f5fc;
			}
		}
	}
`;