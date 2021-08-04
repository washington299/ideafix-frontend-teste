import * as S from "./styles";

const BlockOfNotes = () => {
	return (
		<S.Wrapper>
			<S.Title>Bloco de notas</S.Title>

			<S.Input placeholder="Assunto" />
			<S.Textarea placeholder="Texto" />

			<S.ButtonWrapper>
				<S.Button>Criar nota</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
};

export default BlockOfNotes;
