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
import Spinner from "../../components/Spinner";
import { useFollowData } from "./useFollowing";

export default function Following() {
	const { userFollowData, isLoading } = useFollowData();

	if (isLoading) return <Spinner />;

	const following = userFollowData.followings;

	return (
		<Box>
			<Card bgColor="gray.700" color="gray.100">
				<CardHeader>
					<Heading size="md">
						Users that you follow: {following?.length}
					</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{following?.map((following: any) => (
							<Box key={following.id}>
								<Flex gap="4">
									<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
										<Avatar src={following.profile_picture} size="sm" />
										<Box>
											<Heading size="sm">{following.full_name}</Heading>
											<Text fontSize={"sm"} color={"whiteAlpha.500"}>
												@{following.username}
											</Text>
											<Text fontSize="sm">
												{following.bio
													? following.bio
													: "Tidak ada deskripsi profil"}
											</Text>
										</Box>
									</Flex>
									<Flex alignItems={"center"}>
										<Button borderRadius={"full"} h={"32px"}>
											Unfollow
										</Button>
									</Flex>
								</Flex>
							</Box>
						))}
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
}
