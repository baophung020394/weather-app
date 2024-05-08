import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Weather } from "../type/Weather";
import SearchItem from "./SearchItem";

interface SearchListProps {
  weather: Weather | null;
  getCountry: (country: string) => void;
}

const SearchList = ({ weather, getCountry }: SearchListProps) => {
  const [history, setHistory] = useState<Weather[]>([]);
  const handleDeleteHistory = (index: number) => {
    if (history?.length === 1) {
      return;
    }
    setHistory(history.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (weather) {
      const exists = history.some((item) => item.name === weather.name);
      if (!exists) {
        setHistory((prev) => [...prev, weather]);
      }
    }
  }, [weather]);

  return (
    <Flex flexDirection={"column"}>
      {history?.length > 0 &&
        history?.map((item: Weather, index: number) => (
          <SearchItem
            weather={item}
            index={index}
            key={index}
            getCountry={getCountry}
            handleDeleteHistory={handleDeleteHistory}
          />
        ))}
    </Flex>
  );
};

export default SearchList;
