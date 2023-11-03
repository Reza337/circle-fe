import { Footer, SuggestedFollow } from "@/components";
import Profile from "@/components/Myprofile";
import Navbar from "@/components/Navbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
	return (
		<>
			<Box
				display={"flex"}
				width={"250px"}
				height={"fit-content"}
				position={"fixed"}
				left={"30px"}
				paddingTop={"30px"}
				bg="gray.800"
				paddingRight={"10px"}
				borderRight={"1px solid gray"}
				h={"100vh"}>
				<Box width={"100%"} display={"flex"} flexDirection={"column"} gap={2}>
					<Navbar />
				</Box>
			</Box>

			<Box>
				<Grid templateColumns="20% 50% 30%" height={"100vh"}>
					<GridItem as="aside" bg="gray.800" p="2rem"></GridItem>
					<GridItem
						as="main"
						borderRight="1px"
						bg="gray.800"
						p="2rem"
						className="scroll">
						{children}
					</GridItem>
				</Grid>
			</Box>

			<Box
				// className="scroll"
				display={"flex"}
				flexDirection={"column"}
				gap={5}
				position={"fixed"}
				overflow={"auto"}
				right={"5px"}
				top={"0px"}
				paddingTop={"30px"}
				paddingLeft={"15px"}
				borderLeft={"1px solid gray"}
				bg="gray.800"
				h={"100vh"}>
				<Box>
					<Profile />
				</Box>

				<Box>
					<SuggestedFollow />
				</Box>

				<Box>
					<Footer />
				</Box>
			</Box>
		</>
	);
}
