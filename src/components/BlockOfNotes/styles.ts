import styled from "styled-components";

import { title } from "styles/globalElements";

export const Wrapper = styled.section`
	width: 500px;
	height: 100%;
	padding: var(--size-large) var(--size-extra-large);
	border-right: 3px solid var(--orange);
`;

export const Title = styled.h1`
	${title};

	font-size: var(--size-large);
`;
