import { threadsData } from "@/types/threadsType";
import { API } from "@/libs/api";
import { ChangeEvent, useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { formThreads } from "@/types/formThreadsType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useThreads() {
	const [threads, setThreads] = useState<threadsData[]>();
	const [form, setForm] = useState<formThreads>({
		content: "",
		image: "",
	});

	async function getThreads() {
		const response = await API.get("/threads");
		console.log("ini threads", response.data.data);
		setThreads(response.data.data);
	}

	// async function handlePost(event: FormEvent<HTMLFormElement>) {
	// 	event.preventDefault();

	// 	// console.log(form);
	// 	console.log("test image", form.image);

	// 	const formData = new FormData();
	// 	formData.append("content", form.content);
	// 	formData.append("image", form.image as File);

	// 	const response = await API.post("/thread", formData);
	// 	console.log("berhasil menambahkan thread", response);
	// 	getThreads();
	// }

	const QueryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: () => {
			const formData = new FormData();
			formData.append("content", form.content);
			formData.append("image", form.image as File);
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

	useEffect(() => {
		getThreads();
	}, []);

	useEffect(() => {
		setThreads(threads);
	}, [threads]);

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
		fileInputRef,
		mutate,
		isPending,
	};
}
