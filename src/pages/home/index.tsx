// import { Footer } from "@/components/Footer";
import Threads from "@/features/threads/components/Threads";
// import { useEffect, useState } from "react";
import {
	Box,
	Flex,
	Stack,
	StackDivider,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { API } from "@/libs/api";
import Profile from "@/components/Myprofile";
import { useQuery } from "@tanstack/react-query";
import FormThreads from "@/components/FormThreads";
import { threadsData } from "@/types/threadsType";
import { useEffect } from "react";

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

	const { data: threads, refetch: refetchThreads } = useQuery({
		queryKey: ["threads"],
		queryFn: async () => {
			const { data } = await API.get("/threads");
			return data.data;
		},
	});
	console.log(threads);

	useEffect(() => {
		refetchThreads();
	}, [refetchThreads]);

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
							{threads?.map((data: threadsData) => (
								<Threads
									key={data.id}
									id={data.id}
									content={data.content}
									image={data.image}
									posted_at={data.posted_at}
									likes_count={data.likes_count}
									replies_count={data.replies_count}
									selecteduser={data.selecteduser}
									likeToThread={data.likeToThread}
									Reply={data.Reply}
								/>
							))}
						</Stack>
					</Flex>
				</GridItem>
				<GridItem as="div" bg="gray.800" minHeight="100vh" p="2rem">
					<Profile />
				</GridItem>
			</Grid>
		</Box>
	);
}
