import styled from "styled-components";

export const BoxElementRadio = styled.div`
	display: flex;
	align-items: center;
	& + & {
		margin-left: 2rem;
	}

	.label-field {
		font-size: 1.4rem;
		display: inline-block;
		margin-right: 1rem;
		cursor: pointer;
	}

	.radio-field {
		display: none;
		position: relative;
	}

	.radio-fake {
		width: 2rem;
		height: 2rem;
		border-radius: 100%;
		border: 2px solid var(--ddd-color);
		padding: 2px;
	}

	.radio-fake::after {
		content: "";
		width: 100%;
		height: 100%;
		display: block;
		background-color: var(--blue-bold-color);
		border-radius: 100%;
		transform: scale(0);
		transition: ease-in-out 0.2s;
	}

	.radio-field:checked + .radio-fake::after {
		transform: scale(1);
	}
`;

export const GroupRadio = styled.div`
	.title-group {
		font-size: 1.4rem;
	}

	.children-group {
		display: flex;
		align-items: center;
		margin-top: 1rem;
	}
`;
