import { useThreads } from "@/features/threads/Hooks/useThreads";
import { RootState } from "@/store/type/RootState";
import { Avatar, Button, FormControl, HStack, Input } from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function FormThreads() {
	const { mutate, handleChange, isPending } = useThreads();
	const user = useSelector((state: RootState) => state.auth);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				mutate();
			}}
			encType="multipart/form-data">
			<FormControl>
				<HStack maxW={"6xl"} justifyContent={"center"} gap={5}>
					<Avatar size="sm" name="Dan Abrahmov" src={user.profile_picture} />
					<Input
						variant="flushed"
						placeholder="What's on your mind"
						maxW="25rem"
						name="content"
						// value={}
						onChange={handleChange}
					/>
					<label htmlFor="image" style={{ cursor: "pointer" }}>
						<BiImageAdd size={"30px"} />
						<Input
							id="image"
							variant="flushed"
							type="file"
							placeholder="What's on your mind"
							maxW="25rem"
							name="image"
							onChange={handleChange}
							hidden
							// opacity={"0"}
						/>
					</label>

					<Button colorScheme="green" type="submit" isLoading={isPending}>
						Post
					</Button>
				</HStack>
			</FormControl>
		</form>
		// </Flex>
		// <div>
		// 	<HStack maxW={"6xl"} alignItems={"center"} gap={5} color={"white"}>
		// 		<Avatar
		// 			w="50px"
		// 			h="50px"
		// 			name="Dan Abrahmov"
		// 			src="https://bit.ly/dan-abramov"
		// 			ml="10px"
		// 		/>
		// 		<Input
		// 			variant="flushed"
		// 			placeholder="What's on your mind"
		// 			w="90%"
		// 			py={2}
		// 			rounded={"xl"}
		// 			bg={"transparent"}
		// 			name="content"
		// 			value={formData.content}
		// 			onChange={handleInputChange}
		// 		/>
		// 		<Input
		// 			variant="flushed"
		// 			placeholder="Image URL"
		// 			w="90%"
		// 			py={2}
		// 			rounded={"xl"}
		// 			bg={"transparent"}
		// 			name="image"
		// 			value={formData.image}
		// 			onChange={handleInputChange}
		// 		/>

		// 		<Button
		// 			bg="green"
		// 			rounded={"full"}
		// 			w="100px"
		// 			py={1}
		// 			onClick={() => mutation.mutate(formData)}>
		// 			Post
		// 		</Button>
		// 	</HStack>
		// </div>
	);
}
