import styled from "styled-components";

import { title, cardShadow } from "styles/globalElements";

export const Wrapper = styled.section`
	width: 500px;
	height: 100%;
	padding: var(--size-large) var(--size-extra-large);

	@media screen and (max-width: 940px) {
		padding: var(--size-large) var(--size-large);
	}

	@media screen and (max-width: 767px) {
		width: 100%;
		padding: 0 0 var(--size-large) 0;
		border-right: none;
	}
`;

export const Title = styled.h1`
	${title};

	font-size: var(--size-large);
`;

export const Input = styled.input`
	${cardShadow};

	width: 100%;
	margin-bottom: var(--size-small);
	outline: none;
`;

export const Textarea = styled.textarea`
	${cardShadow};

	width: 100%;
	height: 200px;
	margin-bottom: var(--size-small);
	font-size: var(--size-small);
	outline: none;
	resize: none;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Button = styled.button`
	padding: var(--size-extra-small) var(--size-small);
	background-color: var(--orange);
	color: var(--white);

	border: none;
	border-radius: 5px;
	text-transform: uppercase;
	cursor: pointer;
`;
