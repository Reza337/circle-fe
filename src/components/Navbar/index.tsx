// import { Box, Button, Text, Stack } from "@chakra-ui/react";
// import { GoHomeFill } from "react-icons/go";
// import { RiUserSearchLine } from "react-icons/ri";
// import { AiOutlineHeart } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";

import { Box, Button, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
	BiHeart,
	BiHomeCircle,
	BiLogOut,
	BiSearchAlt,
	BiUserCircle,
} from "react-icons/bi";

function Navbar() {
	return (
		<Box>
			<Stack h="full" justifyContent="space-between">
				<Box>
					<Box>
						<Heading color={"green.400"} pb={8}>
							Circle
						</Heading>
					</Box>
					<List color="white" fontSize="1rem" spacing={4}>
						<Box display={"flex"} alignItems="center">
							<BiHomeCircle />
							<ListItem ms={3}>
								<NavLink to="/">Home.</NavLink>
							</ListItem>
						</Box>
						<Box display={"flex"} alignItems="center">
							<BiSearchAlt />
							<ListItem ms={3}>
								<NavLink to="/">Search.</NavLink>
							</ListItem>
						</Box>
						<Box display={"flex"} alignItems="center">
							<BiHeart />
							<ListItem ms={3}>
								<NavLink to="/">Follows.</NavLink>
							</ListItem>
						</Box>
						<Box display={"flex"} alignItems="center">
							<BiUserCircle />
							<ListItem ms={3}>
								<NavLink to="/">Profile.</NavLink>
							</ListItem>
						</Box>
					</List>
					<Stack pt="10">
						<Button rounded="full" color="white" colorScheme="green" w="200px">
							Create Post
						</Button>
					</Stack>
				</Box>
			</Stack>
			<Box h={"150px"} display={"Flex"} alignItems={"end"}>
				<Button
					leftIcon={<BiLogOut />}
					variant="unstyled"
					color="white"
					fontSize={"2xl"}

					// onClick={() => {
					//   handleLogout();
					//   navigate("/auth/login");
					// }}
				>
					Logout
				</Button>
			</Box>
		</Box>
		// <Box position="fixed" minW="max-content">
		// 	<nav style={{ marginLeft: "10px" }}>
		// 		<Text fontSize={"5xl"} color={"green.400"} fontWeight={"bold"}>
		// 			circle
		// 		</Text>
		// 		<ul>
		// 			<Box fontSize={"xl"} color={"white"}>
		// 				<li
		// 					style={{
		// 						display: "flex",
		// 						alignItems: "center",
		// 						gap: 10,
		// 						marginTop: "18px",
		// 					}}>
		// 					<GoHomeFill />
		// 					Home
		// 				</li>
		// 				<li
		// 					style={{
		// 						display: "flex",
		// 						alignItems: "center",
		// 						gap: 10,
		// 						marginTop: "18px",
		// 					}}>
		// 					<RiUserSearchLine />
		// 					Search
		// 				</li>
		// 				<li
		// 					style={{
		// 						display: "flex",
		// 						alignItems: "center",
		// 						gap: 10,
		// 						marginTop: "18px",
		// 					}}>
		// 					<AiOutlineHeart />
		// 					Follows
		// 				</li>
		// 				<li
		// 					style={{
		// 						display: "flex",
		// 						alignItems: "center",
		// 						gap: 10,
		// 						marginTop: "18px",
		// 					}}>
		// 					<CgProfile />
		// 					Profile
		// 				</li>
		// 			</Box>
		// 		</ul>
		// 	</nav>
		// 	<Stack pt="10">
		// 		<Button bg={"#0dd602"} w="190px" paddingY={2} rounded="full">
		// 			Create Post
		// 		</Button>
		// 	</Stack>
		// </Box>
	);
}

export default Navbar;
