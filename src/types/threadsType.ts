export type threadsData = {
	id: number;
	content: string;
	image: string;
	posted_at: string;
	likes_count: number;
	replies_count: number;
	selecteduser: {
		username: string;
		full_name: string;
		profile_picture: string;
	};
	likeToThread: [
		{
			id: number;
		}
	];
	Reply: [
		{
			id: number;
		}
	];
};
