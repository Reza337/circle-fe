// import { Reply } from "./replyType";

import { ThreadLikeType } from "./likeType";

// import { ThreadLikeType } from "./likeType";

export type threadsData = {
	id?: number | undefined | null;
	content?: string;
	image?: string;
	posted_at?: string;
	users?: {
		username: string;
		full_name: string;
		profile_picture: string;
	};
	likes?: ThreadLikeType[];
	replies?: [
		{
			id: number;
		}
	];
	isLiked: boolean;
};
