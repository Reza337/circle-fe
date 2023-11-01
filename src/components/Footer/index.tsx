// import { Card, CardBody, Text } from "@chakra-ui/react";
// import {
// 	AiFillGithub,
// 	AiFillFacebook,
// 	AiFillLinkedin,
// 	AiFillInstagram,
// } from "react-icons/ai";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import {
	BiLogoFacebook,
	BiLogoGithub,
	BiLogoInstagramAlt,
	BiLogoYoutube,
} from "react-icons/bi";

export function Footer() {
	return (
		<Card
			as={Flex}
			basis="10%"
			direction="column"
			gap={4}
			p={4}
			bg="gray.700"
			color="white">
			<Flex gap={4} flexDirection={"column"}>
				<Text fontSize={"sm"}>
					Developed by{" "}
					<Text as="span" fontWeight={600}>
						Muhammad Reza Fadilah
					</Text>
				</Text>
				<Box as={Flex} gap={1}>
					<BiLogoGithub />
					<BiLogoFacebook />
					<BiLogoInstagramAlt />
					<BiLogoYoutube />
				</Box>
			</Flex>
			<Flex gap={2} align="center" color="whiteAlpha.600">
				<Text fontSize="xs">Powered by</Text>
				<Image display="inline" h="16px" src="/dumbways.png" />
				<Text fontSize="xs">Dumbways Indonesia</Text>
			</Flex>
		</Card>
		// <Card bg={"transparent"} border="1px solid white" color={"white"}>
		// 	<CardBody display={"flex"} alignItems={"center"} gap={2}>
		// 		<Text fontSize={"12px"} fontWeight={"bold"}>
		// 			Developed by Jhon Doe
		// 		</Text>
		// 		<AiFillGithub />
		// 		<AiFillLinkedin />
		// 		<AiFillFacebook />
		// 		<AiFillInstagram />
		// 	</CardBody>
		// </Card>
	);
}
