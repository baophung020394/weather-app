import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Weather from "../components/Weather";
import SearchComponent from "../components/commons/Search/Search";
import { Weather as WeatherModel } from "../components/type/Weather";

const Home = () => {
  const [weather, setWeather] = useState<WeatherModel | null>(null);

  const getWeather = async (weather: WeatherModel) => {
    setWeather(weather);
  };

  return (
    <Box maxW={"700px"} width={"100%"} margin={"auto"}>
      <SearchComponent getWeather={getWeather} />
      <Weather weather={weather} />
    </Box>
  );
};

export default Home;
