import { useState } from "react";
import axios from "axios";
import { Weather } from "../components/type/Weather";
import { formatDate } from "../components/helpers/commons";

const API_KEY = "a80f8a8907e358d0c5b431b829fe018f";

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city: string) => {
    try {
      const responseLatLon = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        {
          params: {
            q: city,
            appid: API_KEY,
          },
        },
      );

      console.log("responseLatLon", responseLatLon);
      if (!responseLatLon.data || responseLatLon.data.length === 0) {
        setError("Location not found");
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
            lang: "en",
          },
        },
      );

      if (response?.data && response?.status === 200) {
        console.log("response", response);
        setWeather({
          description: response.data.weather[0].description,
          temperature: response.data.main.temp,
          weather: response.data?.weather,
          main: response.data?.main,
          createdAt: formatDate(new Date()),
          name: response.data.name,
          sys: response.data.sys,
        });
      } else {
        setError("");
      }
    } catch (err) {
      setError("Unable to fetch weather data");
      setWeather(null);
    }
  };

  return { weather, error, fetchWeather };
};
