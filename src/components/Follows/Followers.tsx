import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import { useFollowerData } from "./useFollowing";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/type/RootState";
// import FollowersItem from "./FollowersItem";
// import FollowersItem from "./FollowersItem";

export default function Followers() {
	// const user = useSelector((state: RootState) => state.auth);
	const { userFollowerData } = useFollowerData();
	// const userId = user.id;
	// console.log(userId);

	const followers = userFollowerData;

	console.log(followers);

	// const isFollow = userFollowerData.followings.some((follow: any) => {
	// 	console.log(follow.id);

	// 	return follow.id === followers.id;
	// });
	// console.log(isFollow);

	// if (isLoading) return <Spinner />;
	return (
		<Box>
			<Card bgColor="gray.700" color="gray.100">
				<CardHeader>
					<Heading size="md">
						Your Followers: {followers?.followers?.length}
					</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{followers?.map((follower: any) => {
							return (
								<Box key={follower.id}>
									<Flex gap="4">
										<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
											<Avatar src={follower.profile_picture} size="sm" />
											<Box>
												<Heading size="sm">{follower.full_name}</Heading>
												<Text fontSize={"sm"} color={"whiteAlpha.500"}>
													@{follower.username}
												</Text>
												<Text fontSize="sm">
													{follower.bio
														? follower.bio
														: "Tidak ada deskripsi profil"}
												</Text>
											</Box>
										</Flex>
										<Flex alignItems={"center"}></Flex>
									</Flex>
								</Box>
							);
						})}
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
}
