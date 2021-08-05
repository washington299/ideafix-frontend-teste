import type { NextApiRequest, NextApiResponse } from "next";

import mockNotes from "mock/notes.json";

export default function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		res.status(200).json(mockNotes);
	}

	if (req.method === "POST") {
		res.status(200).json({ msg: "Nota criada com sucesso!" });
	}
}
