import { Box, useColorModeValue, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import SearchHistory from "../SearchHistory/SearchHistory";
import { formatDate } from "../helpers/commons";
import { Weather as WeatherModel } from "../type/Weather";
import TodayWeather from "./Today";

interface WeatherProps {
  weather: WeatherModel | null;
}

const API_KEY = "a80f8a8907e358d0c5b431b829fe018f";

const Weather = ({ weather }: WeatherProps) => {
  const [weathers, setWeathers] = useState<WeatherModel | null>(null);
  const toast = useToast();

  const bgWeather = useColorModeValue(
    "icons.bgWeather.light",
    "icons.bgWeather.dark",
  );

  const borderWeather = useColorModeValue(
    "icons.borderWeather.light",
    "icons.borderWeather.dark",
  );

  const getCountry = async (country: string) => {
    try {
      const responseLatLon = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        {
          params: {
            q: country,
            appid: API_KEY,
          },
        },
      );

      if (!responseLatLon.data || responseLatLon.data.length === 0) {
        toast({
          title: "Error",
          description: "Location not found",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        throw new Error("Location not found");
      }

      const { lat, lon } = responseLatLon.data[0];

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat,
            lon,
            appid: API_KEY,
            units: "metric",
          },
        },
      );

      if (response?.data && response?.status === 200) {
        setWeathers({
          description: response.data.weather[0].description,
          temperature: response.data.main.temp,
          weather: response.data?.weather,
          main: response.data?.main,
          createdAt: formatDate(new Date()),
          name: response.data.name,
          sys: response.data.sys,
        });
      }
    } catch (err) {
      setWeathers(null);
    }
  };

  return (
    <Box
      mt={"116px"}
      backgroundColor={bgWeather}
      border={"1px solid"}
      borderColor={borderWeather}
      borderRadius={"40px"}
      p={{
        base: "20px",
        md: "50px",
      }}
    >
      <TodayWeather weather={weathers ? weathers : weather} />
      <SearchHistory weather={weather} getCountry={getCountry} />
    </Box>
  );
};

export default Weather;
