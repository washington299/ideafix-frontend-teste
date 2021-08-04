import { NoteProps } from "types";

import NoteCard from "components/NoteCard";

import * as S from "./styles";

type MyNotesProps = {
	notes: NoteProps[];
};

const MyNotes = ({ notes }: MyNotesProps) => {
	return (
		<S.Wrapper>
			<S.Title>Suas notas</S.Title>

			<S.Notes>
				{notes.map(({ id, title, description }) => (
					<NoteCard key={id} id={id} title={title} description={description} />
				))}
			</S.Notes>
		</S.Wrapper>
	);
};

export default MyNotes;
