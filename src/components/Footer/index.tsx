import { Card, CardBody, Text } from "@chakra-ui/react";
import {
	AiFillGithub,
	AiFillFacebook,
	AiFillLinkedin,
	AiFillInstagram,
} from "react-icons/ai";

export function Footer() {
	return (
		<Card bg={"transparent"} border={"1px solid white"} color={"white"}>
			<CardBody display={"flex"} alignItems={"center"} gap={2}>
				<Text fontSize={"12px"} fontWeight={"bold"}>
					Developed by Muhammad Reza Fadilah
				</Text>
				<AiFillGithub />
				<AiFillLinkedin />
				<AiFillFacebook />
				<AiFillInstagram />
			</CardBody>
		</Card>
	);
}
