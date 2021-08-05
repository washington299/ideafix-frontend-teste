import styled from "styled-components";

export const Wrapper = styled.main`
	display: flex;
	padding: var(--size-extra-large) 0;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		padding: var(--size-medium);
	}
`;
