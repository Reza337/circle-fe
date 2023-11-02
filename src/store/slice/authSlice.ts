// import { seAuthToken } from "@/libs/api";
// import { IUser } from "@/types/User";
import { setAuthToken } from "@/libs/api";
import { IUser } from "@/types/userType";
import { createSlice } from "@reduxjs/toolkit";

const initiaslState: IUser = {
	id: 0,
	full_name: "",
	username: "",
	email: "",
	profile_picture: "",
	bio: "",
	followers: [],
	followings: [],
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initiaslState,
	reducers: {
		AUTH_LOGIN: (_, action) => {
			const payload = action.payload;
			console.log(payload);
			setAuthToken(payload.token);
			localStorage.setItem("token", payload.token);

			const user: IUser = {
				id: payload.user.id,
				full_name: payload.user.full_name,
				username: payload.user.username,
				email: payload.user.email,
				profile_picture: payload.user.profile_picture,
				bio: payload.user.bio,
				followers: payload.user.followers,
				followings: payload.user.followings,
			};

			return user;
		},
		AUTH_CHECK: (_, action) => {
			const payload = action.payload;
			// console.log(payload);

			const user: IUser = {
				id: payload.id,
				full_name: payload.full_name,
				username: payload.username,
				email: payload.email,
				profile_picture: payload.profile_picture,
				bio: payload.bio,
				followers: payload.followers,
				followings: payload.followings,
			};

			return user;
		},
		AUTH_ERROR: () => {
			localStorage.removeItem("token");
		},
		AUTH_LOGOUT: () => {
			localStorage.removeItem("token");
		},
	},
});
