import { API } from "@/libs/api";
import { Avatar, Box, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type DataUser = {
	id: number;
	full_name: string;
	username: string;
	profile_picture: string;
};

function Search() {
	const [dataUser, setDataUser] = useState<DataUser[]>([]);
	const [filteringUser, setFilteringUser] = useState<DataUser[]>([]);

	const fetchData = async () => {
		const response = await API.get("/users");
		setDataUser(response.data.data);
		setFilteringUser(response.data.data);
		console.log(response.data.data);
	};

	const handleChangeInputUser = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const keyword = e.target.value;
		const filteredUser = dataUser.filter((user) => {
			return (
				user.username.toLowerCase().includes(keyword.toLowerCase()) ||
				user.full_name.toLowerCase().includes(keyword.toLowerCase())
			);
		});
		setFilteringUser(filteredUser);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Box bg="gray.800" w={"100%"}>
			<Flex
				alignItems={"center"}
				gap={2}
				fontSize={"2xl"}
				marginTop={6}
				fontWeight={"bold"}
				px={7}></Flex>
			<Flex
				alignItems={"center"}
				gap={4}
				py={2}
				rounded={"full"}
				px={7}
				bg={"#262626"}
				cursor={"pointer"}
				w={"95%"}
				mx={"auto"}>
				<RiUserSearchLine size={"20px"} color={"white"} />
				<Input
					placeholder="What is happening?!"
					fontSize={"md"}
					variant={"unstyled"}
					color={"white"}
					bg={"transparent"}
					_focusVisible={{ outline: "none" }}
					w={"100%"}
					onChange={handleChangeInputUser}
				/>
			</Flex>
			<Box display={"grid"} gap={5} px={7} py={6}>
				{filteringUser.length > 0 ? (
					<>
						{filteringUser.map((user) => {
							return (
								<Box key={user.id} color={"white"}>
									<Link to={`/detail-profile/${user.id}`}>
										<Box
											display={"flex"}
											flexDirection={"row"}
											alignItems={"center"}
											my={"30px"}>
											<Box>
												<Avatar
													src={user.profile_picture}
													// alt={user.full_name}
													objectFit={"cover"}
													borderRadius={"full"}
													w={"50px"}
													h={"50px"}
												/>
											</Box>
											<Box ml={"20px"}>
												<Text fontSize={"20px"}>{user.full_name}</Text>
												<Text color={"whiteAlpha.500"} fontSize={"15px"}>
													@{user.username}
												</Text>
											</Box>
										</Box>
									</Link>
									<hr />
								</Box>
							);
						})}
					</>
				) : (
					<></>
				)}
			</Box>
		</Box>
	);
}

export default Search;
