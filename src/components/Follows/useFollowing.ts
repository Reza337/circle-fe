import { API } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

export function useFollowData() {
	const {
		data: userFollowData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["followData"],
		queryFn: async () => {
			const { data } = await API.get("/user/auth");
			// console.log(data.data);

			return data.data;
		},
	});

	return { userFollowData, isLoading, error };
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
