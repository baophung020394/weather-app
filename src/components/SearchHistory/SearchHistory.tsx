import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import SearchList from "./SearchList";
import { Weather } from "../type/Weather";

interface SearchHistoryProps {
  weather: Weather | null;
  getCountry: (country: string) => void;
}

const SearchHistory = ({ weather, getCountry }: SearchHistoryProps) => {
  const textColor = useColorModeValue("icons.brand.light", "icons.brand.dark");

  const bgSearchHistory = useColorModeValue(
    "icons.bgSearchIHistory.light",
    "icons.bgSearchIHistory.dark",
  );

  return (
    <Box backgroundColor={bgSearchHistory} p={"20px"} borderRadius={"24px"}>
      <Text
        as={"p"}
        color={textColor}
        fontSize={{
          base: "14px",
          md: "16px",
        }}
        textAlign={"left"}
        mb={"18px"}
      >
        Search History
      </Text>
      <SearchList weather={weather} getCountry={getCountry} />
    </Box>
  );
};

export default SearchHistory;
