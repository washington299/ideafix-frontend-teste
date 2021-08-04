import { css } from "styled-components";

export const title = css`
	margin-bottom: var(--size-large);
	font-size: var(--size-large);
	font-weight: var(--font-weight-bold);
	color: var(--purple);
`;

export const cardShadow = css`
	padding: var(--size-small) var(--size-medium);
	background-color: var(--light-grey);
	color: var(--grey);
	font-weight: var(--font-weight-bold);
	box-shadow: 0 2px 2px 0 var(--grey);

	border: none;
	border-radius: 10px;
`;
