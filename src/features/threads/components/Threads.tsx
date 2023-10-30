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
	return (
		<>
			<HStack>
				<Box px="1rem">
					<HStack>
						<Avatar
							// name={content}
							src={props.user?.profile_picture}
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
								{props.user?.full_name}
							</Text>
						</Box>
						<Box>
							<Text
								fontWeight="medium"
								_hover={{
									cursor: "pointer",
								}}
								color={"#616161"}>
								@{props.user?.username}
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
									{props.likeToThread.length ? <BsHeartFill /> : <BsHeart />}
									<Text>{props.likeToThread.length}</Text>
								</HStack>
								<Link to={`/`}>
									<HStack>
										<BiMessageAltDetail />
										<Text>{props.Reply.length} Replies</Text>
									</HStack>
								</Link>
							</HStack>
						</Box>
					</Box>
				</Box>
			</HStack>
			{/* <div style={{ width: "100%", padding: "4" }}>
				<Box display="flex" gap={3} marginY={"10px"}>
					<Avatar
						src={props.user?.profile_picture}
						style={{
							width: "50px",
							height: "50px",
							marginLeft: "10px",
						}}
					/>
					<div>
						<Box display="flex" gap={1}>
							<p style={{ fontWeight: "bold", color: "white" }}>
								{props.user?.full_name}
							</p>
							<p style={{ color: "#616161" }}>@{props.user?.username}</p>
							<p
								style={{
									color: "#616161",
									display: "flex",
									alignItems: "center",
								}}>
								<PiDotOutlineFill />
								{props.posted_at}
							</p>
						</Box>
						<p
							dangerouslySetInnerHTML={{ __html: props.content }}
							style={{ color: "white" }}></p>
						<Box w={"100%"} h={"auto"} py={5}>
							<Image src={props.image} alt="Ini Gambar" w={"100%"} h={"auto"} />
						</Box>
						<Box
							display={"flex"}
							gap={4}
							alignItems={"center"}
							fontSize={"20px"}>
							<AiOutlineHeart />
							<p style={{ color: "#616161" }}>{props.likeToThread.length}</p>
							<LiaCommentSolid />
							<p style={{ color: "#616161" }}>{props.Reply.length} Replies</p>
						</Box>
					</div>
				</Box>
			</div> */}
		</>
	);
}

export default Threads;
