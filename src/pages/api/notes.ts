import type { NextApiRequest, NextApiResponse } from "next";

import mockNotes from "mock/notes.json";

export default function (_req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(mockNotes);
}
