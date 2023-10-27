import { threadsData } from "@/types/threadsType";
import { API } from "@/libs/api";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { formThreads } from "@/types/formThreadsType";

export function useThreads() {
	const [threads, setThreads] = useState<threadsData[]>();
	const [form, setForm] = useState<formThreads>({
		content: "",
		image: "",
		user: 1,
	});

	async function getThreads() {
		const response = await API.get("/threads");
		console.log("ini threads", response.data);
		setThreads(response.data.data);
	}

	async function handlePost(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// console.log(form);
		console.log("test image", form.image);

		const formData = new FormData();
		formData.append("content", form.content);
		formData.append("image", form.image as File);

		const response = await API.post("/thread", formData);
		console.log("berhasil menambahkan thread", response);
		getThreads();
	}

	useEffect(() => {
		getThreads();
	}, []);

	useEffect(() => {
		setThreads(threads);
	}, [threads]);
	// const handlePost = useMutation({
	// 	mutationFn: async () => {
	// 		// await API.post("/thread", form);
	// 		const response = await API.post("/thread", form);
	// 		console.log("Request:", response.config);
	// 		console.log("Response:", response.data);
	// 	},
	// 	onSuccess: () => refetch(),
	// });

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

	// function handleButtonClick() {
	// 	fileInputRef.currert?.click();
	// }

	return {
		form,
		threads,
		handleChange,
		handlePost,
		fileInputRef,
	};
}
