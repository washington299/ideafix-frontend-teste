import BlockOfNotes from "components/BlockOfNotes";
import MyNotes from "components/MyNotes";
import { NoteProps } from "types";

import * as S from "./styles";

type HomeTemplateProps = {
	notes: NoteProps[];
};

const HomeTemplate = ({ notes }: HomeTemplateProps) => {
	return (
		<S.Wrapper>
			<BlockOfNotes />
			<MyNotes notes={notes} />
		</S.Wrapper>
	);
};

export default HomeTemplate;
