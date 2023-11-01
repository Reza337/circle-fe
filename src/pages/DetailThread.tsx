import {
	Box,
	Input,
	FormControl,
	Text,
	Button,
	Grid,
	GridItem,
	Flex,
	Stack,
	StackDivider,
	Avatar,
	HStack,
	chakra,
	Image,
} from "@chakra-ui/react";
// import { ThreadCard } from "@/features/threads";
import { useState, useEffect, ChangeEvent } from "react";
import { API } from "@/libs/api";
import { useParams } from "react-router-dom";
// import { IThreadCard } from "@/types/Thread";
// import { ReplyPost } from "@/types/Reply";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ReplyPost } from "@/types/replyType";
import { threadsData } from "@/types/threadsType";
// import Threads from "@/features/threads/components/Threads";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";

export default function DetailThread() {
	const { id } = useParams();
	// const [data, setData] = useState<threadsData>();
	const [reply, setReply] = useState<ReplyPost>({
		content: "",
		thread_id: parseInt(id as string),
	});

	// useEffect(() => {
	// 	getOneThread();
	// }, []);

	// async function getOneThread() {
	// try {
	// const response = await API.get(`/thread/${id}`);
	// console.log(response);
	const { data: detailThreads } = useQuery({
		queryKey: ["detailThreads", id],
		queryFn: async () => {
			const { data } = await API.get(`/thread/${id}`);
			return data;
		},
		refetchInterval: 1000,
	});
	console.log(detailThreads);

	// setData(response.data);
	// } catch (err) {
	// 	console.log(err);
	// }
	// }

	// For Like
	const user = useSelector((state: RootState) => state.auth);
	const userId = user?.id;
	// console.log(userId);
	const isLiked = detailThreads?.likes?.some(
		(like) => like?.users?.id === userId
	);

	const threadId = detailThreads?.id;
	// console.log(threadId);

	const mutation = useMutation({
		mutationFn: (like) => {
			return API.post(`/thread/${threadId}/like`, like);
		},
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setReply({
			...reply,
			[event.target.name]: event.target.value,
		});
	}

	async function handlePost(event: React.FormEvent<HTMLFormElement>) {
		try {
			event.preventDefault();

			await API.post("/reply", reply);
			refetch();
		} catch (err) {
			console.log(err);
		}
	}

	const { data: getReply, refetch } = useQuery({
		queryKey: ["replies"],
		queryFn: async () =>
			await API.get(`/reply?thread_id=${id}`).then((res) => res.data),
	});

	return (
		<Box>
			<Grid templateColumns="20% 50% 30%" height={"100vh"}>
				<GridItem as="aside" bg="gray.800" p="2rem"></GridItem>
				<GridItem as="main" borderRight="1px" bg="gray.800" p="2rem">
					<Flex direction="column" color={"gray.100"}>
						{/* <FormThreads /> */}
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
							<Box>
								<HStack>
									<Box px="1rem">
										<HStack>
											<Avatar
												src={detailThreads?.users?.profile_picture}
												size="sm"
												mr="3"
												_hover={{
													cursor: "pointer",
												}}
											/>

											<Box>
												<Text
													fontWeight="medium"
													_hover={{
														cursor: "pointer",
													}}>
													{detailThreads?.users?.full_name}
												</Text>
											</Box>
											<Box>
												<Text
													fontWeight="medium"
													_hover={{
														cursor: "pointer",
													}}
													color={"#616161"}>
													@{detailThreads?.users?.username}
												</Text>
											</Box>
											<Text color="gray.600">&bull;</Text>
											<Box>
												<chakra.time fontSize="2xs" color="gray.400">
													{detailThreads?.posted_at}
												</chakra.time>
											</Box>
										</HStack>
										<Box ms="3rem">
											<Box my="2">
												<Text fontSize="0.86rem">{detailThreads?.content}</Text>
											</Box>
											{detailThreads?.image && (
												<Box mt="0.5rem">
													<Image
														boxSize="300px"
														objectFit="cover"
														src={detailThreads?.image}
														alt="Dan Abramov"
														rounded="md"
													/>
												</Box>
											)}
											<Box>
												<HStack fontSize="15px">
													<HStack
														onClick={() => mutation.mutate()}
														cursor={"pointer"}>
														{isLiked ? (
															<BsHeartFill color="red" />
														) : (
															<BsHeart />
														)}
														<Text>{detailThreads?.likes?.length}</Text>
													</HStack>
													{/* <Link> */}
													<HStack>
														<BiMessageAltDetail />
														<Text>
															{detailThreads?.replies?.length} Replies
														</Text>
													</HStack>
													{/* </Link> */}
												</HStack>
											</Box>
										</Box>
									</Box>
								</HStack>
							</Box>
							<Box marginTop={"20px"}>
								<form onSubmit={handlePost} encType="multipart/form-data">
									<FormControl
										display={"flex"}
										flexDirection={"column"}
										gap={2}
										color={"white"}>
										<Box
											display={"flex"}
											justifyContent={"center"}
											alignItems={"center"}
											gap={2}>
											<Input
												placeholder="What is happening?!"
												name="content"
												onChange={handleChange}
											/>
											<Button
												type="submit"
												backgroundColor={"brand.green"}
												color={"white"}
												colorScheme="green"
												// value={"Post"}
												fontSize={"12px"}
												width={"70px"}>
												Post
											</Button>
										</Box>
									</FormControl>
								</form>

								{getReply?.map((data: any, index: any) => (
									<Box
										key={index}
										display={"flex"}
										width="500px"
										borderBottom={"1px solid white"}
										padding={"20px 0px"}
										bg={"transparent"}
										color={"white"}>
										<Avatar
											src={
												data.users?.profile_picture
													? data.users?.profile_picture
													: null
											}
											width={"50px"}
											height={"50px"}
											objectFit={"cover"}
											borderRadius={"50%"}
											marginRight={"20px"}
										/>

										<Box>
											<Box display={"flex"}>
												<Text color={"grey"}>{data.users?.full_name}</Text>
												<Text ms={2} color="grey">
													@{data.users?.username}
												</Text>
											</Box>
											<Text>{data.content}</Text>
										</Box>
									</Box>
								))}
							</Box>
							{/* </Box>
		</Box> */}
						</Stack>
					</Flex>
				</GridItem>
			</Grid>
		</Box>
	);
}
