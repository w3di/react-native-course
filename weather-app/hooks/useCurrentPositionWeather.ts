import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "../types";
import { API_KEY } from "../api/url";

interface Coords {
  latitude?: number;
  longitude?: number;
}

const useCurrentPositionWeather = ({ latitude, longitude }: Coords) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (latitude === undefined || longitude === undefined) return;

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
              lat: latitude,
              lon: longitude,
              appid: API_KEY,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return { data, isLoading, isError };
};

export default useCurrentPositionWeather;
