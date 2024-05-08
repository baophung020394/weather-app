import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ThemeToggle from "./components/commons/ButtonSwitchTheme/ButtonSwitchTheme";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign={"center"} minH={"100vh"} width={"100%"}>
      <ThemeToggle />
      <Box width={"100%"}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
