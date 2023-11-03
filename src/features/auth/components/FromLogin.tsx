import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";

export default function FormLogin() {
	const { handleChange, handleLogin } = useLogin();

	return (
		<FormControl
			isRequired
			display={"flex"}
			mt={"100px"}
			justifyContent={"center"}
			flexDirection={"column"}
			gap={3}
			width={"350px"}
			bg={"transparent"}
			color={"white"}
			border={"1px solid white"}
			borderRadius={10}
			padding={5}>
			<Text
				color={"green.400"}
				fontSize={"4xl"}
				fontWeight={"bold"}
				margin={"0 auto"}>
				Circle
			</Text>
			<Text fontSize={"2xl"} fontWeight={"bold"} margin={"0 auto"}>
				Login
			</Text>
			<Input placeholder="Email" name="email" onChange={handleChange} />
			<Input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
			/>
			<Box display="flex" justifyContent={"flex-end"}>
				<Text>Forgot password?</Text>
			</Box>
			<Button
				backgroundColor={"green"}
				colorScheme="green"
				color={"white"}
				onClick={handleLogin}>
				Login
			</Button>
		</FormControl>
	);
}
