import styled from "styled-components";

import { cardShadow, title } from "styles/globalElements";

export const Wrapper = styled.section`
	${cardShadow};
`;

export const Title = styled.h2`
	${title};

	margin-bottom: var(--size-extra-small);
	padding-bottom: var(--size-small);
	font-size: var(--size-small);
	color: var(--water-blue);
	border-bottom: 1px dashed var(--grey);
`;

export const Description = styled.p`
	font-weight: var(--font-weight-light);
`;
