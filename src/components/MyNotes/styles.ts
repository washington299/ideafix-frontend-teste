import styled from "styled-components";

import { title } from "styles/globalElements";

export const Wrapper = styled.section`
	flex: 1;
	padding: var(--size-large) var(--size-extra-large);
`;

export const Title = styled.h1`
	${title}

	font-size: var(--size-medium);
`;

export const Notes = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: var(--size-medium);
`;
