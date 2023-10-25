// import { Footer } from "@/components/Footer";
import Threads from "@/features/threads/components/Threads";
import { useEffect, useState } from "react";
import {
	HStack,
	Input,
	Avatar,
	IconButton,
	Button,
	Box,
	Flex,
	Stack,
	StackDivider,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { BiImageAdd } from "react-icons/bi";
import { API } from "@/libs/api";
import Profile from "@/components/Myprofile";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	// const [threads, setThread] = useState<Threads[]>();

	// async function getThreads() {
	// 	// eslint-disable-next-line no-useless-catch
	// 	try {
	// 		const response = await API.get("/threads");
	// 		setThread(response?.data.data);
	// 	} catch (err) {
	// 		throw err;
	// 	}
	// }

	// useEffect(() => {
	// 	getThreads();
	// });

	const { data: threads, refetch } = useQuery({
		queryKey: ["threads"],
		queryFn: async () => {
			const { data } = await API.get("/threads");
			return data.data;
		},
	});
	console.log(threads);

	return (
		<Box>
			<Grid templateColumns="20% 50% 30%" height={"100vh"}>
				<GridItem
					as="aside"
					bg="gray.800"
					borderRight="1px"
					borderColor="gray.700"
					p="2rem">
					<Navbar />
				</GridItem>
				<GridItem
					as="main"
					borderRight="1px"
					borderColor="gray.700"
					bg="gray.800"
					p="2rem">
					<Flex direction="column" color={"gray.100"}>
						<HStack maxW={"6xl"} alignItems={"center"} gap={5}>
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
							/>
							<IconButton aria-label="Search database" icon={<BiImageAdd />} />
							<Button bg="green" rounded={"full"} w="100px" py={1}>
								Post
							</Button>
						</HStack>
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
							{threads?.map((data: any) => (
								<Threads
									key={data.id}
									content={data.content}
									image={data.image}
									posted_at={data.posted_at}
									likes_count={data.likes_count}
									replies_count={data.replies_count}
									selecteduser={data.selecteduser}
								/>
							))}
						</Stack>
					</Flex>
				</GridItem>
				<GridItem
					as="div"
					bg="gray.800"
					//   colSpan={2}
					minHeight="100vh"
					p="2rem">
					<Profile />
				</GridItem>
			</Grid>
		</Box>
	);
}
