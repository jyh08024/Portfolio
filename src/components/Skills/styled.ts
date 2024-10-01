import styled from "styled-components";

export const SkillsStyle = styled.div`
	width: 100%;
`;

export const SkillsList = styled.div`
	width: 100%;

	p {
		color: #f4f5fc;
		margin: .4rem 0;
		font-size: 1.6rem;
		padding-left: 48px;
		display: flex;
		align-items: center;

		&.yellow {
			color: #febf00;
			padding-left: 0;
		}

		&.under {
			padding-left: 24px;
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

		&.inline {
			padding-left: 64px;
		}
	}
`;