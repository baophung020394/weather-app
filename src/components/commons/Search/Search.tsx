import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useWeather } from "../../../hooks/useWeather";
import { Weather } from "../../type/Weather";
import { useEffect } from "react";

interface FormValues {
  country: string;
}

interface SearchComponentProps {
  getWeather: (weather: Weather) => void;
}

const SearchComponent = ({ getWeather }: SearchComponentProps) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { weather, error, fetchWeather } = useWeather();

  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(26, 26, 26, 0.5)",
  );
  const textColorSmall = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.4)",
  );

  const borderWeather = useColorModeValue(
    "icons.borderWeather.light",
    "icons.borderWeather.dark",
  );

  const textColor = useColorModeValue("#000000", "#ffffff");
  const colorStatus = useColorModeValue(
    "icons.colorStatus.light",
    "icons.colorStatus.dark",
  );
  const searchIcon = "/assets/images/commons/btn-search.png";
  const bgSearchColor = useColorModeValue(
    "icons.search.light",
    "icons.search.dark",
  );

  const onSubmit = (data: FormValues) => {
    fetchWeather(data.country);
    reset();
  };

  useEffect(() => {
    if (weather) {
      getWeather(weather);
    }
  }, [weather, getWeather]);

  useEffect(() => {
    fetchWeather("Ho Chi Minh");
  }, []);

  return (
    <>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        display={"flex"}
        mt={"60px"}
      >
        <InputGroup
          size="lg"
          w="auto"
          width={"100%"}
          mr={"20px"}
          h={"60px"}
          position={"relative"}
        >
          <Box
            as={"span"}
            position={"absolute"}
            top={"6px"}
            left={"18px"}
            zIndex={"1"}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"13.62px"}
            color={textColorSmall}
          >
            Country
          </Box>
          <Input
            h={"100%"}
            pr="4.5rem"
            type="text"
            borderRadius={"20px"}
            {...register("country", { required: true })}
            color={textColor}
            backgroundColor={bgColor}
            _focusVisible={{ borderColor: "none" }}
            borderColor={bgColor}
            fontSize={"16px"}
            fontWeight={"400"}
            lineHeight={"21.79px"}
          />
        </InputGroup>
        <Button
          h={"60px"}
          w={"60px"}
          size={"sm"}
          type={"submit"}
          background={bgSearchColor}
          borderRadius={"20px"}
        >
          <Image src={searchIcon} alt="Search" />
        </Button>
      </Box>
      {error && (
        <Text
          color={colorStatus}
          fontSize={"16px"}
          mt="30px"
          borderColor={borderWeather}
          border={"1px solid"}
          borderRadius={"10px"}
          padding={"10px"}
        >
          {error}
        </Text>
      )}
    </>
  );
};

export default SearchComponent;
