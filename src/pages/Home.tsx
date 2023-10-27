import {
	Box,
	Flex,
	Grid,
	GridItem,
	Stack,
	StackDivider,
} from "@chakra-ui/react";
// import { Threads } from "@/features/threads";
// import FormThread from "@/features/threads/component/FormThread";
// import { useThreads } from "@/features/threads/Hooks/useThreads";
import { threadsData } from "@/types/threadsType";
import { useThreads } from "@/features/threads/Hooks/useThreads";
// import FormThreads from "@/components/FormThreads";
import Threads from "@/features/threads/components/Threads";
// import { BiImageAdd } from "react-icons/bi";
// import { formThreads } from "@/types/formThreadsType";
// import { ChangeEvent, useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { API } from "@/libs/api";
// import { Form } from "react-router-dom";
// import Navbar from "@/components/Navbar";
import FormThreads from "@/components/FormThreads";

export default function Home() {
	const { threads } = useThreads();

	// console.log("data", getThreads);

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
		<Box>
			<Grid templateColumns="20% 50% 30%" height={"100vh"}>
				<GridItem
					as="aside"
					bg="gray.800"
					// borderRight="1px"
					// borderColor="gray.700"
					p="2rem">
					{/* <Navbar /> */}
				</GridItem>
				<GridItem
					as="main"
					borderRight="1px"
					// borderColor="gray.700"
					bg="gray.800"
					p="2rem">
					<Flex direction="column" color={"gray.100"}>
						<FormThreads />
						<Stack
							flex="1"
							overflow="auto"
							py="5"
							divider={
								<StackDivider
									w="95%"
									alignSelf="center"
									borderColor="gray.600"
								/>
							}>
							{/* {getThreads.length !== 0 ? (

							)
								
							 : (
								 
							)} */}

							{threads?.length === 0 ? (
								<p>No threads available</p>
							) : (
								<>
									{threads?.map((data: threadsData) => {
										return (
											<Box key={data.id}>
												<Threads
													id={data.id}
													content={data.content}
													image={data.image}
													posted_at={data.posted_at}
													user={data.user}
													likeToThread={data.likeToThread}
													Reply={data.Reply}
												/>
											</Box>
										);
									})}
								</>
							)}
						</Stack>
					</Flex>
				</GridItem>
			</Grid>
		</Box>
	);
}
