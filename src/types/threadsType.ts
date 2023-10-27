export type threadsData = {
	id: number;
	content: string;
	image: string;
	posted_at: string;
	user: {
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
