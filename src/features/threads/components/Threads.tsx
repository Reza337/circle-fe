import { threadsData } from "@/types/threadsType";
import { Box, Avatar, Image } from "@chakra-ui/react";
// import { FcLike } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { PiDotOutlineFill } from "react-icons/pi";

function Threads(props: threadsData) {
	return (
		<>
			<div style={{ width: "100%", padding: "4" }}>
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
			</div>
		</>
	);
}

export default Threads;
