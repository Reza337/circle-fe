import { API } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

export function useFollowingData() {
	const { data: userFollowingData, isLoading } = useQuery({
		queryKey: ["followingData"],
		queryFn: async () => {
			const { data } = await API.get("/user/auth");
			console.log(data.data.followings);

			return data.data.followings;
		},
		refetchInterval: 1000,
	});

	return { userFollowingData, isLoading };
}

export function useFollowerData() {
	const { data: userFollowerData } = useQuery({
		queryKey: ["followerData"],
		queryFn: async () => {
			const { data } = await API.get("/user/auth");
			// console.log(data.data);

			return data.data.followers;
		},
		refetchInterval: 1000,
	});

	return { userFollowerData };
}

// export function Follow() {
// 	const { userFollowData } = useFollowData();
// 	const userId = userFollowData.id;
// 	const mutation = useMutation({
// 		mutationFn: (Follow) => {
// 			return API.post(`/follow/${userId}`, Follow);
// 		},
// 	});
// 	return mutation;
// }
