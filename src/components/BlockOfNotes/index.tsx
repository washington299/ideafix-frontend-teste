import { FormEvent, useState } from "react";
import { queries } from "services/queries";

import * as S from "./styles";

const BlockOfNotes = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [msg, setMsg] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await queries.createNote();

		if (res.status === 200) {
			setMsg(res.data.msg);
			setTitle("");
			setDescription("");
		}
	};

	return (
		<S.Wrapper>
			<S.Title>Bloco de notas</S.Title>

			<form onSubmit={handleSubmit}>
				<S.Input
					placeholder="Assunto"
					value={title}
					required
					onChange={e => setTitle(e.target.value)}
				/>
				<S.Textarea
					placeholder="Texto"
					value={description}
					required
					onChange={e => setDescription(e.target.value)}
				/>

				<S.ButtonWrapper>
					<S.Button type="submit">Criar nota</S.Button>
				</S.ButtonWrapper>

				{msg && <span>{msg}</span>}
			</form>
		</S.Wrapper>
	);
};

export default BlockOfNotes;
