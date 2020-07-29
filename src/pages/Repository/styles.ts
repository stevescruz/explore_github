import styled from 'styled-components';
import { shade, darken } from 'polished';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;

		&:hover {
			color: #666;
		}
	}

	svg {
		margin-right: 4px;
	}
`;

export const RepositorySummary = styled.section`
	margin-top: 80px;
	color: #000;
	display: flex;
	flex-direction: column;

	header {
		display: flex;

		img {
			height: 120px;
			width: 120px;
			border-radius: 50%;
		}

		div {
			margin-left: 34px;
			display: flex;
			flex-direction: column;
			justify-content: center;

			strong {
				font-size: 36px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}

	ul {
		display: flex;
		margin-top: 40px;

		li {
			display: flex;
			flex-direction: column;
			align-items: center;

			& + li {
				margin-left: 80px;
			}

			strong {
				font-size: 36px;
				color: #3d3d4d;
			}

			span {
				font-size: 18px;
				color: #6c6c80;
				margin-top: 4px;
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 80px;

	a {
		background: #fff;
		border-radius: 5px;
		padding: 24px;
		text-decoration: none;

		display: flex;
		align-items: center;

		transition: 0.2s;

		&:hover {
			transform: translateX(10px);

			& svg:first-of-type {
				color: ${shade(0.2, '#c53030')};
			}

			& svg:last-of-type {
				color: ${darken(0.2, '#cbcbd6')};
			}
		}

		& + a {
			margin-top: 16px;
		}

		svg:first-of-type {
			color: #c53030;
			margin-right: 24px;
		}

		div {
			margin-right: 16px;
			flex: 1;

			strong {
				font-size: 20px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #a8a8b3;
				margin-top: 4px;
			}
		}

		svg:last-of-type {
			color: #cbcbd6;
			margin-left: auto;
		}
	}
`;
