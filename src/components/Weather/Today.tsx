import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Weather } from "../type/Weather";

interface TodayWeatherProps {
  weather: Weather | null;
}
const TodayWeather = ({ weather }: TodayWeatherProps) => {
  const colorCountryWeather = useColorModeValue(
    "icons.colorCountryWeather.light",
    "icons.colorCountryWeather.dark",
  );

  const colorDeg = useColorModeValue(
    "icons.colorDeg.light",
    "icons.colorDeg.dark",
  );

  const colorStatus = useColorModeValue(
    "icons.colorStatus.light",
    "icons.colorStatus.dark",
  );
  const sunImg = "/assets/images/commons/sun.png";
  const cloudImg = "/assets/images/commons/cloud.png";

  return (
    <Flex flexDirection={"column"}>
      <Heading
        as={"h5"}
        fontSize={"16px"}
        fontWeight={"400"}
        textAlign={"left"}
        mb="-15px"
      >
        Today's Weather
      </Heading>
      <Flex justifyContent={"space-between"} position={"relative"}>
        <Heading
          as={"h3"}
          fontSize={"80px"}
          fontWeight={"700"}
          color={colorDeg}
        >
          {weather?.temperature}
          <Text as={"span"} className="deg">
            °
          </Text>
        </Heading>
        <Box
          position={"absolute"}
          top={{ base: "-11vh", md: "-16vh" }}
          right={"-5vh"}
        >
          <Box
            maxW={{
              base: "157px",
              md: "300px",
            }}
            maxH={{ base: "157px", md: "300px" }}
          >
            {weather?.weather[0]?.main === "Clouds" ? (
              <Image src={sunImg} alt="cloud" height={"100%"} />
            ) : (
              <Image src={cloudImg} alt="rain" height={"100%"} />
            )}
          </Box>
        </Box>
      </Flex>
      <Text as={"p"} fontSize={"16px"} textAlign={"left"} mb={"10px"}>
        H: {weather?.main?.temp_max}° L: {weather?.main?.temp_min}°
      </Text>
      <Flex alignItems={"flex-end"} mb={"26px"}>
        <Text
          as={"p"}
          color={colorCountryWeather}
          fontSize={"16px"}
          fontWeight={"700"}
          textAlign={"left"}
          flex={{
            base: "2",
            md: "1",
          }}
          alignItems={"flex-end"}
        >
          {weather?.name}
        </Text>
        <Flex
          flex={"5"}
          color={colorStatus}
          flexDirection={{
            base: "column-reverse",
            md: "row",
          }}
          justifyContent={"space-between"}
        >
          <Text as={"p"} fontSize={"16px"} textAlign={"right"}>
            {weather?.createdAt}
          </Text>
          <Text as={"p"} fontSize={"16px"} textAlign={"right"}>
            Humidity: {weather?.main?.humidity}%
          </Text>
          <Text as={"p"} fontSize={"16px"} textAlign={"right"}>
            {weather?.weather[0]?.main}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TodayWeather;
