// import { API } from "@/libs/api";
import { RootState } from "@/store/type/RootState";
import {
	Avatar,
	Box,
	// Button,
	Divider,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
// import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SearchItem(props: any) {
	const user = useSelector((state: RootState) => state.auth);
	const userId = user.id;

	// const isFollow = props.item.followers.some((follow: any) => {
	// 	return follow.id === userId;
	// });

	// const mutation = useMutation({
	// 	mutationFn: (searchFollow) => {
	// 		return API.post(`/follow/${props.item.id}`, searchFollow);
	// 	},
	// });
	return (
		<>
			{props.item.id !== userId && (
				<Flex gap="4" my={"10px"} py={6}>
					<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
						<Link to={`/detail-profile/${props.item.id}`}>
							<Avatar src={props.item.profile_picture} w={"50px"} h={"50px"} />
						</Link>
						<Box>
							<Link to={`/detail-profile/${props.item.id}`}>
								<Heading size="sm" color={"white"}>
									{props.item.full_name}
								</Heading>
								<Text fontSize={"sm"} color={"whiteAlpha.500"}>
									@{props.item.username}
								</Text>
							</Link>
						</Box>
					</Flex>
					{/* <Flex alignItems={"center"}>
						{isFollow ? (
							<Button
								borderRadius={"full"}
								h={"28px"}
								fontSize={"14px"}
								onClick={() => mutation.mutate()}>
								Unfollow
							</Button>
						) : (
							<Button
								borderRadius={"full"}
								h={"28px"}
								fontSize={"14px"}
								onClick={() => mutation.mutate()}>
								Follow
							</Button>
						)}
					</Flex> */}
				</Flex>
			)}
			<Divider />
		</>
	);
}

export default SearchItem;
