import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "../types";
import { API_KEY } from "../api/url";

const useCityWeather = (city?: string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              units: "metric",
              lang: "ru",
              q: city,
              appid: API_KEY,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.log("Ошибка в useCityWeather", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, isLoading, isError };
};

export default useCityWeather;
