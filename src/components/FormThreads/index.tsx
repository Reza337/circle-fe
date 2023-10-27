import { API } from "@/libs/api";
import { formThreads } from "@/types/formThreadsType";
import { Avatar, Button, HStack, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
// import { BiImageAdd } from "react-icons/bi";

export default function FormThreads() {
	const [formData, setFormData] = useState<formThreads>({
		content: "",
		image: "",
		user: 1,
	});

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// const handlePostData = async () => {
	// 	try {
	// 		const response = await API.post("/thread", formData);
	// 		console.log("Data berhasil dipost:", response.data);

	// setFormData({
	// 	content: "",
	// 	image: "",
	// 	selecteduser: 1,
	// 		});
	// 	} catch (error) {
	// 		console.error("Terjadi kesalahan:", error);
	// 	}
	// };

	const QueryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (newThread: formThreads) => {
			return API.post("/thread", newThread);
		},
		onSuccess() {
			QueryClient.invalidateQueries({ queryKey: ["threads"] });
			setFormData({
				content: "",
				image: "",
				user: 1,
			});
		},
	});

	return (
		<div>
			<HStack maxW={"6xl"} alignItems={"center"} gap={5} color={"white"}>
				<Avatar
					w="50px"
					h="50px"
					name="Dan Abrahmov"
					src="https://bit.ly/dan-abramov"
					ml="10px"
				/>
				<Input
					variant="flushed"
					placeholder="What's on your mind"
					w="90%"
					py={2}
					rounded={"xl"}
					bg={"transparent"}
					name="content"
					value={formData.content}
					onChange={handleInputChange}
				/>
				<Input
					variant="flushed"
					placeholder="Image URL"
					w="90%"
					py={2}
					rounded={"xl"}
					bg={"transparent"}
					name="image"
					value={formData.image}
					onChange={handleInputChange}
				/>

				<Button
					bg="green"
					rounded={"full"}
					w="100px"
					py={1}
					onClick={() => mutation.mutate(formData)}>
					Post
				</Button>
			</HStack>
		</div>
	);
}
