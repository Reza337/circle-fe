import { Box, Card, Text } from "@chakra-ui/react";
import { useUserSuggest } from "./useSugestedFollow";
import Spinner from "../Spinner";
import SuggestedItem from "./suggestedItem";

export function SuggestedFollow() {
	const { userSuggestData, isLoading } = useUserSuggest();
	const suggest = userSuggestData;
	// console.log(suggest);

	if (isLoading) return <Spinner />;
	return (
		<Card bg="whiteAlpha.200" p={4} minW="400px" overflow={"auto"}>
			<Text color="white">Suggested for you</Text>
			<Box overflowY={"auto"} h={"100px"} className="scroll">
				{suggest?.map((data: any) => {
					return (
						<Box key={data.id}>
							<SuggestedItem item={data} />
						</Box>
					);
				})}
			</Box>
		</Card>
	);
}
