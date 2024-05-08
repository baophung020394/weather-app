import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Weather } from "../type/Weather";

interface SearchListProps {
  weather: Weather | null;
  index: number;
  handleDeleteHistory: (index: number) => void;
  getCountry: (country: string) => void;
}

const SearchItem = ({
  weather,
  index,
  getCountry,
  handleDeleteHistory,
}: SearchListProps) => {
  const btnSearch = useColorModeValue(
    "/assets/images/icons/search-light.png",
    "/assets/images/icons/search-dark.png",
  );

  const btnDelete = useColorModeValue(
    "/assets/images/icons/delete-light.png",
    "/assets/images/icons/delete-dark.png",
  );

  const bgSearchIcon = useColorModeValue(
    "icons.bgIcon.light",
    "icons.bgIcon.dark",
  );

  const borderIcon = useColorModeValue(
    "icons.borderIcon.light",
    "icons.borderIcon.dark",
  );

  const bgSearchItem = useColorModeValue(
    "icons.bgSearchItem.light",
    "icons.bgSearchItem.dark",
  );

  const textColor = useColorModeValue("#000000", "#ffffff");

  const colorStatus = useColorModeValue(
    "icons.colorStatus.light",
    "icons.colorStatus.dark",
  );

  return (
    <Flex
      className="search__item"
      alignItems={"center"}
      backgroundColor={bgSearchItem}
      padding={"13px 15px"}
      borderRadius={"16px"}
      maxH={"60px"}
      mb={"18px"}
    >
      <Box
        h={"100%"}
        className="search__items__left"
        flex={{
          base: "1",
        }}
        textAlign={"left"}
      >
        <Text
          as={"span"}
          fontSize={{
            base: "14px",
            md: "16px",
          }}
          color={textColor}
        >
          {weather?.name},{weather?.sys?.country}
        </Text>
        <Text
          display={{
            base: "block",
            md: "none",
          }}
          as={"span"}
          mr={"10px"}
          fontSize={{
            base: "10px",
            md: "14px",
          }}
          color={colorStatus}
        >
          {weather?.createdAt}
        </Text>
      </Box>
      <Box
        h={"100%"}
        className="search__items__right"
        flex={"1"}
        textAlign={"right"}
        alignItems={"center"}
      >
        <Text
          display={{
            base: "none",
            md: "inline",
          }}
          as={"span"}
          mr={"10px"}
          fontSize={"14px"}
        >
          01-09-2022 09:41am
        </Text>
        <Button
          backgroundColor={bgSearchIcon}
          border={`2px solid`}
          borderColor={borderIcon}
          borderRadius={"50%"}
          width={"34px"}
          height={"34px"}
          p={"0"}
          maxW={"34px"}
          minW={"34px"}
          mr={"10px"}
          onClick={() => getCountry(weather?.keysearch || "")}
        >
          <Image src={btnSearch} objectFit={"cover"} />
        </Button>
        <Button
          backgroundColor={bgSearchIcon}
          border={`2px solid`}
          borderColor={borderIcon}
          borderRadius={"50%"}
          width={"34px"}
          height={"34px"}
          p={"0"}
          maxW={"34px"}
          minW={"34px"}
          onClick={() => handleDeleteHistory(index)}
        >
          <Image src={btnDelete} objectFit={"cover"} />
        </Button>
      </Box>
    </Flex>
  );
};

export default SearchItem;
