import styled from "styled-components";

export const BoxViewItem = styled.div`
	background-color: var(--white-color);
	margin-top: 2rem;
	border-radius: 5px;
	padding: 2.5rem;
	display: flex;

	.box-icon {
		font-size: 3.5rem;
		margin-right: 5rem;
	}

	.icon-download {
		color: var(--red-color);
	}

	.icon-comment {
		color: var(--blue-color);
	}

	.box-title {
		font-size: 1.6rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.box-view {
		font-size: 1.2rem;
		color: var(--aaa-color);
	}
`;
