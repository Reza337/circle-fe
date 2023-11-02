import {
	Avatar,
	Box,
	Button,
	Card,
	Flex,
	HStack,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/libs/api";

export default function Profile() {
	const user = useSelector((state: RootState) => state.auth);
	const userId = user.id;
	// console.log(user);
	const { data: userProfile } = useQuery({
		queryKey: ["userProfile"],
		queryFn: async () => {
			const { data } = await API.get(`/user/${userId}`);
			return data.data;
		},
		refetchInterval: 1000,
	});
	// console.log(userProfile);

	return (
		<Box display="flex" flexDirection="column" gap={5}>
			<Card bg="whiteAlpha.200" p={4} minW="400px">
				<Text color="white">My Profile</Text>
				<Box
					pos="relative"
					h="70px"
					mt={3}
					rounded="xl"
					bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)">
					<Box
						pos="absolute"
						bottom={-6}
						left={4}
						p={1}
						bg="blackAlpha.800"
						rounded="full">
						<Avatar size="md" src={userProfile?.profile_picture} />
					</Box>
				</Box>
				<Flex justify="right" mt={-6}>
					<Button
						colorScheme="whiteAlpha"
						color="white"
						size="xs"
						rounded="full"
						variant="outline"
						mt={8}
						w="fit-content">
						Edit Profile
					</Button>
				</Flex>

				<Stack spacing={0}>
					<Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
						{userProfile?.full_name}
					</Text>
					<Text fontSize="xs" color="whiteAlpha.600">
						@{userProfile?.username}
					</Text>
					<Text fontSize="sm" color="whiteAlpha.800">
						{userProfile?.bio}
					</Text>
					<HStack fontSize="sm">
						<HStack>
							<Text color="whiteAlpha.800">
								{userProfile?.followings?.length}
							</Text>
							<Text color="whiteAlpha.600">Following</Text>
						</HStack>
						<HStack>
							<Text color="whiteAlpha.800">
								{userProfile?.followers?.length}
							</Text>
							<Text color="whiteAlpha.600">Followers</Text>
						</HStack>
					</HStack>
				</Stack>
			</Card>
		</Box>
	);
}
