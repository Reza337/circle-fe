import { Box } from "@chakra-ui/react";
// import { Threads } from "@/features/threads";
// import FormThread from "@/features/threads/component/FormThread";
// import { useThreads } from "@/features/threads/Hooks/useThreads";
import { threadsData } from "@/types/threadsType";
import { useThreads } from "@/features/threads/Hooks/useThreads";
import FormThreads from "@/components/FormThreads";
import Threads from "@/features/threads/components/Threads";

export default function Home() {
	const { getThreads } = useThreads();

	console.log("data", getThreads);

	return (
		<Box display={"flex"} justifyContent={"center"}>
			<Box
				display={"flex"}
				alignItems={"center"}
				flexDirection={"column"}
				padding={"20px"}
				width="600px"
				borderRight={"1px solid"}
				borderLeft={"1px solid"}
				borderColor={"brand.grey"}>
				<FormThreads />

				<Box>
					{getThreads ? (
						getThreads.map((data: threadsData) => {
							return (
								<Box key={data.id}>
									<Threads
										id={data.id}
										content={data.content}
										image={data.image}
										posted_at={data.posted_at}
										user={data.user}
										likeToThread={data.likeToThread}
										Reply={data.Reply}
									/>
								</Box>
							);
						})
					) : (
						<p>No threads available</p>
					)}
				</Box>
			</Box>
		</Box>
	);
}
