import SearchItem from "@/components/Search/SearchItem";
import { API } from "@/libs/api";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

type DataUser = {
	id: number;
	full_name: string;
	username: string;
	profile_picture: string;
};

function Search() {
	const [dataUser, setDataUser] = useState<DataUser[]>([]);
	const [filteringUser, setFilteringUser] = useState<DataUser[]>([]);

	const { data: userSearchData } = useQuery({
		queryKey: ["userSearchData"],
		queryFn: async () => {
			const { data } = await API.get("/users");
			setDataUser(data.data);
			setFilteringUser(data.data);
			return data.data;
		},
		// refetchInterval: 1000,
	});

	// filteringUser = userSearchData

	// const fetchData = async () => {
	// 	const response = await API.get("/users");
	// 	setDataUser(response.data.data);
	// 	setFilteringUser(response.data.data);
	// };

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
	const searchData = filteringUser || userSearchData;

	// useEffect(() => {
	// 	fetchData();
	// }, []);

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
			<Box gap={5} px={7} py={6}>
				{searchData.length > 0 ? (
					<>
						{searchData.map((user) => {
							return (
								<Box key={user.id} color={"white"}>
									<SearchItem item={user} />
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
