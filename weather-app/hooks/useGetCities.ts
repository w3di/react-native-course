import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const cache: { [key: string]: string[] } = {};

export const useFetchCities = (city: string) => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const controller = new AbortController();

  const fetchListOfCities = useCallback(async () => {
    if (cache[city]) {
      setData(cache[city]);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios.get(
        `http://geodb-free-service.wirefreethought.com/v1/geo/places`,
        {
          signal: controller.signal,
          params: {
            namePrefix: city,
            hateoasMode: false,
            limit: 10,
            offset: 0,
          },
        }
      );

      const citiesArray: string[] = response.data.data.map(
        (obj: any) => obj.name
      );

      const uniqueCities = Array.from(new Set(citiesArray));

      cache[city] = uniqueCities;
      setData(uniqueCities);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("Ошибка при загрузке данных:", error);
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  }, [city]);

  useEffect(() => {
    if (city.length < 2) {
      setData([]);
      return;
    }

    fetchListOfCities();

    return () => {
      controller.abort();
    };
  }, [fetchListOfCities, city]);

  return { data, isLoading, isError };
};
