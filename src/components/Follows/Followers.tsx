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

export default function Followers() {
	const { userFollowData, isLoading } = useFollowData();

	if (isLoading) return <Spinner />;

	const followers = userFollowData.followers;

	return (
		<Box>
			<Card bgColor="gray.700" color="gray.100">
				<CardHeader>
					<Heading size="md">Your Followers: {followers?.length}</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{followers?.map((follower: any) => (
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
									<Flex alignItems={"center"}>
										<Button borderRadius={"full"} h={"32px"}>
											Follow
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
