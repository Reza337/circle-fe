import { API } from "@/libs/api";
import { ChangeEvent, useRef, useState } from "react";
import { formThreads } from "@/types/formThreadsType";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { Toast } from "@chakra-ui/react";
// import { Reply } from "@/types/replyType";
// import { useNavigate, useParams } from "react-router-dom";

export const getThreads = () => {
	const { data: threads } = useQuery({
		queryKey: ["threads"],

		queryFn: async () => {
			const { data } = await API.get("/threads");
			// console.log(data.data);

			return data.data;
		},
		refetchInterval: 1000,
	});
	return { threads };
};

// export const getReply = () => {
// 	const { id } = useParams();
// 	const { data: replies } = useQuery({
// 		queryKey: ["replies"],

// 		queryFn: async () => {
// 			const { data } = await API.get(`/thread/${id}`);

// 			return data.data;
// 		},
// 		refetchInterval: 1000,
// 	});
// 	return { replies };
// };

export function useThreads() {
	const [form, setForm] = useState<formThreads>({
		content: "",
		image: "",
	});

	const QueryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: () => {
			const formData = new FormData();
			formData.append("content", form.content);
			if (form.image == null || "") {
				formData.append("image", "");
			} else {
				formData.append("image", form.image as File);
			}
			return API.post("/thread", formData);
		},

		onSuccess() {
			QueryClient.invalidateQueries({ queryKey: ["thread"] });
			setForm({
				content: "",
				image: "",
			});
		},
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { name, value, files } = event.target;

		if (files) {
			setForm({
				...form,
				[name]: files[0],
			});
		} else {
			setForm({
				...form,
				[name]: value,
			});
		}
	}

	const fileInputRef = useRef<HTMLInputElement>(null);

	return {
		form,
		handleChange,
		fileInputRef,
		mutate,
		isPending,
	};
}

// Like Thread
// Fungsi untuk melakukan "like" pada thread
// const postLikeThread = async (threadId) => {
// 	try {
// 		const response = await API.post(`/thread/${threadId}/like`);
// 		return response.data;
// 	} catch (error) {
// 		throw new Error(`Error while Like a Thread with error: ${error.message}`);
// 	}
// };

// // Hook untuk menggunakan mutation "like" thread
// export const usePostLike = () => {
// 	const queryClient = useQueryClient();

// 	const mutation = useMutation(postLikeThread, {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries("threads"); // Invalidasi query "threads" untuk memperbarui data
// 		},
// 	});

// 	return mutation;
// };

// const {Id} = useParams()
// const postLikeThread = (threadId: number) => {
// 	return API.post(`/thread/${Id}/like`, "");
// };

// export const usePostLike = () => {
// 	const QueryClient = useQueryClient();

// 	return useMutation({
// 		mutationFn: postLikeThread,
// 		onSuccess: () => {
// 			QueryClient.invalidateQueries({
// 				queryKey: ["threads"],
// 			});
// 		},
// 	});
// };

// export const useDetailThreads = () => {
// 	const params = useParams();
// 	const navigate = useNavigate();
// 	const [isLike, setIsLike] = useState<boolean>(false);
// 	const { data: detailThreads, isLoading } = useQuery({
// 		queryKey: ["detailThreads", params.id],
// 		queryFn: async () => {
// 			const { data } = await API.get(`/thread/${params.id}`);

// 			return data;
// 		},
// 	});

// 	const [keyword, setKeyword] = useState<Reply>({
// 		content: "",
// 		threads: Number(params.id),
// 	});

// 	const QueryClient = useQueryClient();

// const mutation = useMutation({
// 	mutationFn: (newreplies: Reply) => {
// 		return API.post("/reply", newreplies);
// 	},
// 	onSuccess() {
// 		QueryClient.invalidateQueries({ queryKey: ["detailThreads", params.id] });
// 		setKeyword({
// 			content: "",
// 			threads: Number(params.id),
// 			// likeId:
// 		});
// 	},
// });

// 	const handleChangeInputReplies = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setKeyword({
// 			...keyword,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	const handleLikedPost = () => {
// 		setIsLike(!isLike);
// 	};

// 	return {
// 		keyword,
// 		isLike,
// 		navigate,
// 		detailThreads,
// 		mutation,
// 		isLoading,
// 		handleChangeInputReplies,
// 		handleLikedPost,
// 	};
// };
