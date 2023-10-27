import { threadsData } from "@/types/threadsType";
import { API } from "@/libs/api";
import { ChangeEvent, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { formThreads } from "@/types/formThreadsType";

export function useThreads() {
	const [form, setForm] = useState<formThreads>({
		content: "",
		image: "",
		user: 1,
	});

	const { data: getThreads, refetch } = useQuery<threadsData[]>({
		queryKey: ["getThreads"],
		queryFn: async () => await API.get("/threads").then((res) => res.data.data),
	});

	const handlePost = useMutation({
		mutationFn: async () => await API.post("/thread", form),
		onSuccess: () => refetch(),
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	return { form, getThreads, handleChange, handlePost };
}
