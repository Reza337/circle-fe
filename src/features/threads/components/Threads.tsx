import { threadsData } from "@/types/threadsType";
import { Box, Avatar, Image } from "@chakra-ui/react";
// import { FcLike } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { PiDotOutlineFill } from "react-icons/pi";

// type Threads = {
// 	content: string;
// 	image: string;
// 	posted_at: string;
// 	likes_count: number;
// 	replies_count: number;
// 	selecteduser: selecteduser;
// };

// type selecteduser = {
// 	username?: string;
// 	full_name?: string;
// 	profile_picture?: string;
// };
function Threads(props: threadsData) {
	// console.log(props);

	return (
		<>
			<div style={{ width: "100%", padding: "4" }}>
				<Box display="flex" gap={3} marginY={"10px"}>
					<Avatar
						src={props.selecteduser?.profile_picture}
						style={{
							width: "50px",
							height: "50px",
							marginLeft: "10px",
						}}
					/>
					<div>
						<Box display="flex" gap={1}>
							<p style={{ fontWeight: "bold" }}>
								{props.selecteduser?.full_name}
							</p>
							<p style={{ color: "#616161" }}>
								@{props.selecteduser?.username}
							</p>
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
						<p dangerouslySetInnerHTML={{ __html: props.content }}></p>
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
