import { api } from "services/config";

export const queries = {
	getNotes: () => api.get("/notes"),
	createNote: () => api.post("/notes"),
};
