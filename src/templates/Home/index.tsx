import BlockOfNotes from "components/BlockOfNotes";
import MyNotes from "components/MyNotes";

import * as S from "./styles";

const HomeTemplate = () => {
	return (
		<S.Wrapper>
			<BlockOfNotes />
			<MyNotes />
		</S.Wrapper>
	);
};

export default HomeTemplate;
