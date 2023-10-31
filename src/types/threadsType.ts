// import { Reply } from "./replyType";

export type threadsData = {
	id?: number;
	content?: string;
	image?: string;
	posted_at?: string;
	users?: {
		username: string;
		full_name: string;
		profile_picture: string;
	};
	likes?: [
		{
			id: number;
		}
	];
	replies?: [
		{
			id: number;
		}
	];
};
