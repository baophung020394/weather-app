import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(26, 26, 26, 0.5)",
  );

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      position="absolute"
      top="1rem"
      left="2rem"
      backgroundColor={bgColor}
      borderRadius={"50%"}
    />
  );
};

export default ThemeToggle;
