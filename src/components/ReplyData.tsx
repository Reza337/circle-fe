import { threadsData } from "@/types/threadsType";
import { Avatar, Box, Text } from "@chakra-ui/react";
// import React from "react";

function ReplyData(props: threadsData) {
	return (
		<Box
			display={"flex"}
			width="500px"
			borderBottom={"1px solid white"}
			padding={"20px 0px"}
			bg={"transparent"}
			color={"white"}>
			<Avatar
				src={props.replies?.users?.profile_picture}
				size="sm"
				mr="3"
				_hover={{
					cursor: "pointer",
				}}
			/>

			<Box>
				<Box display={"flex"}>
					<Text color={"grey"}>{props.replies?.users?.full_name}</Text>
					<Text ms={2} color="grey">
						@{props.replies?.users?.username}
					</Text>
				</Box>
				<Text>{props.replies?.content}</Text>
			</Box>
		</Box>
	);
}

export default ReplyData;
