import { API } from "@/libs/api";
import { RootState } from "@/store/type/RootState";
import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";

function SuggestedItem(props: any) {
	const user = useSelector((state: RootState) => state.auth);

	const isFollow = props.item.followers.some((follow: any) => {
		return follow.id === user.id;
	});
	// console.log(isFollow);

	const mutation = useMutation({
		mutationFn: (suggestFollow) => {
			return API.post(`/follow/${props.item.id}`, suggestFollow);
		},
	});
	return (
		<>
			{props.item.id !== user.id && (
				<Flex gap="4" my={"10px"}>
					<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
						<Avatar src={props.item.profile_picture} size="sm" />
						<Box>
							<Heading size="sm" color={"white"}>
								{props.item.full_name}
							</Heading>
							<Text fontSize={"sm"} color={"whiteAlpha.500"}>
								@{props.item.username}
							</Text>
						</Box>
					</Flex>
					<Flex alignItems={"center"}>
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
					</Flex>
				</Flex>
			)}
		</>
	);
}

export default SuggestedItem;
