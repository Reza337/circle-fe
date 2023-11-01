import { threadsData } from "@/types/threadsType";
import { Box, Avatar, Image, HStack, Text, chakra } from "@chakra-ui/react";
// import { FcLike } from "react-icons/fc";
// import { LiaCommentSolid } from "react-icons/lia";
// import { AiOutlineHeart } from "react-icons/ai";
// import { PiDotOutlineFill } from "react-icons/pi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMessageAltDetail } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { API } from "@/libs/api";
// import { usePostLike } from "../Hooks/useThreads";

function Threads(props: threadsData) {
	// const { mutate } = usePostLike();
	// const params = useParams();
	// console.log(props.isLiked);
	// console.log(props);

	// Likes
	const threadId = props.id;
	// console.log(threadId);

	const mutation = useMutation({
		mutationFn: (like) => {
			return API.post(`/thread/${threadId}/like`, like);
		},
	});

	return (
		<>
			<HStack>
				<Box px="1rem" marginTop="10px">
					<HStack>
						<Avatar
							src={
								props.users?.profile_picture
									? props.users?.profile_picture
									: "https://img.freepik.com/premium-photo/3d-rendering-male-character-profile-avatar-happy-young-man-with-bucket-hat-blue-clothes-good_477250-60.jpg?w=740"
							}
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
								{props.users?.full_name}
							</Text>
						</Box>
						<Box>
							<Text
								fontWeight="medium"
								_hover={{
									cursor: "pointer",
								}}
								color={"#616161"}>
								@{props.users?.username}
							</Text>
						</Box>
						<Text color="gray.600">&bull;</Text>
						<Box>
							<chakra.time fontSize="2xs" color="gray.400">
								{props.posted_at}
							</chakra.time>
						</Box>
					</HStack>
					<Box ms="3rem">
						<Box my="5" ml={"5px"}>
							<Text fontSize="0.86rem">{props.content}</Text>
						</Box>
						{props.image && (
							<Box mt="0.5rem">
								<Image
									boxSize="300px"
									objectFit="cover"
									src={props.image}
									alt="Dan Abramov"
									rounded="md"
								/>
							</Box>
						)}
						<Box>
							<HStack fontSize="15px" marginY={"10px"}>
								<HStack onClick={() => mutation.mutate()} cursor={"pointer"}>
									<Box fontSize={"18px"}>
										{props.isLiked ? <BsHeartFill color="red" /> : <BsHeart />}
									</Box>
									<Text>{props?.likes?.length}</Text>
								</HStack>
								<Link to={`/detail/${props.id}`}>
									<HStack>
										<Box fontSize={"20px"}>
											<BiMessageAltDetail />
										</Box>
										<Text>{props?.replies?.length} Replies</Text>
									</HStack>
								</Link>
							</HStack>
						</Box>
					</Box>
				</Box>
			</HStack>
		</>
	);
}

export default Threads;
