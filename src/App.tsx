import { extendBaseTheme, ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

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
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/detail-thread/:id" element={<DetaildThreads />} /> */}
			</Routes>
		</ChakraProvider>
	);
}

export default App;
