import { NoteProps } from "types";

import * as S from "./styles";

const NoteCard = ({ title, description }: NoteProps) => {
	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
};

export default NoteCard;
