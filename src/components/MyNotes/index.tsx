import { NoteProps } from "types";

import * as S from "./styles";

type MyNotesProps = {
	notes: NoteProps[];
};

const MyNotes = ({ notes }: MyNotesProps) => {
	return (
		<S.Wrapper>
			<S.Title>Suas notas</S.Title>

			{notes.map(({ id, title }) => (
				<div key={id}>{title}</div>
			))}
		</S.Wrapper>
	);
};

export default MyNotes;
