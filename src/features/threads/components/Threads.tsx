import { threadsData } from "@/types/threadsType";
import { Box, Avatar, Image, HStack, Text, chakra } from "@chakra-ui/react";
// import { FcLike } from "react-icons/fc";
// import { LiaCommentSolid } from "react-icons/lia";
// import { AiOutlineHeart } from "react-icons/ai";
// import { PiDotOutlineFill } from "react-icons/pi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMessageAltDetail } from "react-icons/bi";

function Threads(props: threadsData) {
	// const params = useParams();
	return (
		<>
			<HStack>
				<Box px="1rem">
					<HStack>
						<Avatar
							src={props.users?.profile_picture}
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
						<Box my="2">
							<Text fontSize="0.86rem">{props.content}</Text>
						</Box>
						<Box>
							<HStack fontSize="15px">
								<HStack
								// onClick={handleClick}
								>
									{props?.likes?.length ? <BsHeartFill /> : <BsHeart />}
									<Text>{props?.likes?.length}</Text>
								</HStack>
								<Link to={`/detail/${props.id}`}>
									<HStack>
										<BiMessageAltDetail />
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
