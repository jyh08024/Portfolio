import styled from "styled-components";

export const AboutStyle = styled.div`
	width: 100%;
	padding-right: 4rem;
`;

export const AboutContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	p {
		color: #f4f5fc;
		margin: .4rem 0;
		font-size: 1.6rem;

		&.yellow {
			color: #febf00;
		}

		&.transparent {
			opacity: 0;
		}

		span {

			&.deepblue {
				color: #8797eb;
			}
			
			&.blue {
				color: skyblue;
			}

			&.purpleRed {
				color: #e4007f;
			}

			&.green {
				color: greenyellow;
			}

			&.purple {
				color: rgb(255, 179, 249);
			}

			&.yellow {
				color: #febf00;
			}

			&.annotation {
				opacity: .5;
			}
		}

		a {
			color: #8797eb;
			text-decoration: underline;
			font-style: italic;
		}
	}

	.profile_image {
		margin-top: 2rem;
		width: 350px;
		height: 350px;
		overflow: hidden;
		border-radius: 50%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;