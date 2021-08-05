import styled from "styled-components";

import { title } from "styles/globalElements";

export const Wrapper = styled.section`
	flex: 1;
	padding: var(--size-large) var(--size-extra-large);
	border-left: 3px solid var(--orange);

	@media screen and (max-width: 940px) {
		padding: var(--size-large) var(--size-large);
	}

	@media screen and (max-width: 767px) {
		width: 100%;
		padding: var(--size-large) 0;
		border-left: none;
		border-top: 3px solid var(--orange);
	}
`;

export const Title = styled.h1`
	${title}

	font-size: var(--size-medium);
`;

export const Notes = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: var(--size-medium);
`;
