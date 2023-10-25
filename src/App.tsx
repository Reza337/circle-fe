import { extendBaseTheme, ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home";

const theme = extendBaseTheme({
	styles: {
		global: {
			body: {
				bg: "darkBackground",
				color: "white",
			},
		},
	},
	colors: {
		darkBackground: "#222",
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Home />
		</ChakraProvider>
	);
}

export default App;
