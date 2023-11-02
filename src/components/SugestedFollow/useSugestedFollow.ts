import { API } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

export function useUserSuggest() {
	const { data: userSuggestData, isLoading } = useQuery({
		queryKey: ["userSuggestData"],
		queryFn: async () => {
			const { data } = await API.get("/users");
			// console.log(data.data);

			return data.data;
		},
		refetchInterval: 1000,
	});

	return { userSuggestData, isLoading };
}
