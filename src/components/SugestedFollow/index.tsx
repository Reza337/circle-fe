import { Box, Card, Text, Button, HStack, Flex } from "@chakra-ui/react";

export function SuggestedFollow() {
	return (
		<Card bg="whiteAlpha.200" p={4} minW="400px">
			<Text color="white">Suggested for you</Text>

			<HStack spacing={0} justifyContent={"space-between"} px={2}>
				<Box>
					<Flex flexDirection="column">
						<Text mt={3} fontSize="sm" fontWeight="semibold" color="white">
							Andri Subagja
						</Text>
						<Text fontSize="xs" color="whiteAlpha.600">
							@sigoblog
						</Text>
					</Flex>
				</Box>
				<Box>
					<Button
						colorScheme="whiteAlpha"
						color="white"
						size="xs"
						rounded="full"
						variant="outline"
						mt={8}
						w="fit-content">
						Follow
					</Button>
				</Box>
			</HStack>

			<HStack spacing={0} justifyContent={"space-between"} px={2}>
				<Box>
					<Flex flexDirection="column">
						<Text mt={3} fontSize="sm" fontWeight="semibold" color="white">
							Heri Nozi
						</Text>
						<Text fontSize="xs" color="whiteAlpha.600">
							@ozi3
						</Text>
					</Flex>
				</Box>
				<Box>
					<Button
						colorScheme="whiteAlpha"
						color="white"
						size="xs"
						rounded="full"
						variant="outline"
						mt={8}
						w="fit-content">
						Follow
					</Button>
				</Box>
			</HStack>
		</Card>
		// <Box display={"flex"} width={"300px"} height={"fit-content"}>
		// 	<Card
		// 		width={"100%"}
		// 		bg={"transparent"}
		// 		border="1px solid white"
		// 		color={"white"}>
		// 		<Text fontWeight={"bold"} marginLeft={"10px"} marginTop={"10px"}>
		// 			Suggested for You
		// 		</Text>
		// 		<CardBody display={"flex"} gap={2}>
		// 			<Avatar
		// 				src="https://static1.personality-database.com/profile_images/4b05b8222e1f47d1b721ebe0800c9169.png"
		// 				border={"2px solid black"}
		// 			/>
		// 			<Box display={"flex"} flexDirection={"column"}>
		// 				<Text fontWeight={"bold"}>Lontong Letoy</Text>
		// 				<Text color={"grey"}>@LontongLetoy</Text>
		// 			</Box>
		// 			<Button variant={"outline"} color={"white"}>
		// 				Follow
		// 			</Button>
		// 		</CardBody>
		// 	</Card>
		// </Box>
	);
}
