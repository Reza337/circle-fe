import {
	Box,
	Flex,
	Grid,
	GridItem,
	Stack,
	StackDivider,
} from "@chakra-ui/react";
import { threadsData } from "@/types/threadsType";
import { getThreads } from "@/features/threads/Hooks/useThreads";
import Threads from "@/features/threads/components/Threads";
import FormThreads from "@/components/FormThreads";

export default function Home() {
	const { threads } = getThreads();

	return (
		<Box>
			<Grid templateColumns="20% 50% 30%" height={"100vh"}>
				<GridItem as="aside" bg="gray.800" p="2rem"></GridItem>
				<GridItem as="main" borderRight="1px" bg="gray.800" p="2rem">
					<Flex direction="column" color={"gray.100"}>
						<FormThreads />
						<Stack
							flex="1"
							overflow="auto"
							py="5"
							divider={
								<StackDivider
									w="95%"
									alignSelf="center"
									borderColor="gray.600"
								/>
							}>
							{threads?.length === 0 ? (
								<p>No threads available</p>
							) : (
								<>
									{threads?.map((data: threadsData) => {
										return (
											<Box key={data.id}>
												<Threads
													id={data.id}
													content={data.content}
													image={data.image}
													posted_at={data.posted_at}
													users={data.users}
													likes={data.likes}
													replies={data.replies}
												/>
											</Box>
										);
									})}
								</>
							)}
						</Stack>
					</Flex>
				</GridItem>
			</Grid>
		</Box>
	);
}
