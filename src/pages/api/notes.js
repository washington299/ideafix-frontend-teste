import mockNotes from "../../mock/notes";

export default function (_req, res) {
	res.status(200).json(mockNotes);
}
