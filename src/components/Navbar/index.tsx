import { Box, Button, Text, Stack } from "@chakra-ui/react";
import { GoHomeFill } from "react-icons/go";
import { RiUserSearchLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Navbar() {
	return (
		<Box position="fixed" minW="max-content">
			<nav style={{ marginLeft: "10px" }}>
				<Text fontSize={"5xl"} color={"green.400"} fontWeight={"bold"}>
					circle
				</Text>
				<ul>
					<Box fontSize={"xl"} color={"white"}>
						<li
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								marginTop: "18px",
							}}>
							<GoHomeFill />
							Home
						</li>
						<li
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								marginTop: "18px",
							}}>
							<RiUserSearchLine />
							Search
						</li>
						<li
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								marginTop: "18px",
							}}>
							<AiOutlineHeart />
							Follows
						</li>
						<li
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								marginTop: "18px",
							}}>
							<CgProfile />
							Profile
						</li>
					</Box>
				</ul>
			</nav>
			<Stack pt="10">
				<Button bg={"#0dd602"} w="190px" paddingY={2} rounded="full">
					Create Post
				</Button>
			</Stack>
		</Box>
	);
}

export default Navbar;
