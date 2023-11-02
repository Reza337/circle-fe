import { follower, following } from "./followType";

export type IUser = {
	id?: number;
	full_name?: string;
	username?: string;
	email?: string;
	profile_picture?: string;
	bio?: string;
	followers?: follower[];
	followings?: following[];
};

export type IUserRegister = {
	full_name: string;
	username: string;
	email: string;
	password: string;
};

export type IUserlogin = {
	email: string;
	password: string;
};
