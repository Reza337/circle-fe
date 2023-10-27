// import { API } from "@/libs/api";
// import { formThreads } from "@/types/formThreadsType";
import { useThreads } from "@/features/threads/Hooks/useThreads";
import { Avatar, Button, FormControl, HStack, Input } from "@chakra-ui/react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { ChangeEvent, useState } from "react";
// import { BiImageAdd } from "react-icons/bi";
// import { BiImageAdd } from "react-icons/bi";

export default function FormThreads() {
	const { handlePost, handleChange } = useThreads();
	// const [formData, setFormData] = useState<formThreads>({
	// 	content: "",
	// 	user: 1,
	// });

	// const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = event.target;
	// 	setFormData({
	// 		...formData,
	// 		[name]: value,
	// 	});
	// };

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

	// const QueryClient = useQueryClient();

	// const mutation = useMutation({
	// 	mutationFn: (newThread: formThreads) => {
	// 		return API.post("/thread", newThread);
	// 	},
	// 	onSuccess() {
	// 		QueryClient.invalidateQueries({ queryKey: ["threads"] });
	// 		setFormData({
	// 			content: "",
	// 			user: 1,
	// 		});
	// 	},
	// });

	return (
		// <Flex direction="column" color={"gray.100"}>
		<form onSubmit={handlePost} encType="multipart/form-data">
			<FormControl>
				<HStack maxW={"6xl"} justifyContent={"center"} gap={5}>
					<Avatar
						size="sm"
						name="Dan Abrahmov"
						src="https://bit.ly/dan-abramov"
					/>
					<Input
						variant="flushed"
						placeholder="What's on your mind"
						maxW="25rem"
						name="content"
						// value={}
						onChange={handleChange}
					/>
					<Input
						variant="flushed"
						type="file"
						placeholder="What's on your mind"
						maxW="25rem"
						name="image"
						onChange={handleChange}
					/>
					{/* <IconButton aria-label="Search database" icon={<BiImageAdd />} /> */}
					<Button colorScheme="green" type="submit">
						Post
					</Button>
				</HStack>
			</FormControl>
		</form>
		// </Flex>
		// <div>
		// 	<HStack maxW={"6xl"} alignItems={"center"} gap={5} color={"white"}>
		// 		<Avatar
		// 			w="50px"
		// 			h="50px"
		// 			name="Dan Abrahmov"
		// 			src="https://bit.ly/dan-abramov"
		// 			ml="10px"
		// 		/>
		// 		<Input
		// 			variant="flushed"
		// 			placeholder="What's on your mind"
		// 			w="90%"
		// 			py={2}
		// 			rounded={"xl"}
		// 			bg={"transparent"}
		// 			name="content"
		// 			value={formData.content}
		// 			onChange={handleInputChange}
		// 		/>
		// 		<Input
		// 			variant="flushed"
		// 			placeholder="Image URL"
		// 			w="90%"
		// 			py={2}
		// 			rounded={"xl"}
		// 			bg={"transparent"}
		// 			name="image"
		// 			value={formData.image}
		// 			onChange={handleInputChange}
		// 		/>

		// 		<Button
		// 			bg="green"
		// 			rounded={"full"}
		// 			w="100px"
		// 			py={1}
		// 			onClick={() => mutation.mutate(formData)}>
		// 			Post
		// 		</Button>
		// 	</HStack>
		// </div>
	);
}
