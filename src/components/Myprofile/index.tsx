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

export default function Profile() {
	return (
		<Card
			bg="whiteAlpha.200"
			p={4}
			position="fixed"
			minW="350px"
			rounded={"xl"}>
			<Text color="white">My Profile</Text>
			<Box
				pos="relative"
				h="70px"
				mt={3}
				rounded="xl"
				bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)">
				<Box pos="absolute" bottom={-8} left={4} p={1} rounded="full">
					<Avatar w="60px" h="60px" src="https://bit.ly/dan-abramov" />
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
					✨ Muhammad Reza Fadilah ✨
				</Text>
				<Text fontSize="xs" color="whiteAlpha.600">
					@rezafadilah
				</Text>
				<Text fontSize="sm" color="whiteAlpha.800">
					Keep Private No Face No Case
				</Text>
				<HStack fontSize="sm">
					<HStack>
						<Text color="whiteAlpha.800">291</Text>
						<Text color="whiteAlpha.600">Following</Text>
					</HStack>
					<HStack>
						<Text color="whiteAlpha.800">212</Text>
						<Text color="whiteAlpha.600">Followers</Text>
					</HStack>
				</HStack>
			</Stack>
		</Card>
	);
}
