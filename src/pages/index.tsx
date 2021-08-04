import { queries } from "services/queries";

import { NoteProps } from "types";

import HomeTemplate from "templates/Home";

type HomeProps = {
	notes: NoteProps[];
};

const Home = ({ notes }: HomeProps) => {
	return <HomeTemplate notes={notes} />;
};

export const getStaticProps = async () => {
	const { data } = await queries.getNotes();

	return {
		props: {
			notes: data,
		},
	};
};

export default Home;
