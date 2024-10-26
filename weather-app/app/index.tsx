import { StyleSheet, Text, View, Image } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import useCurrentPositionWeather from "../hooks/useCurrentPositionWeather";
import { WeatherData } from "../types";
import useCityWeather from "../hooks/useCityWeather";
import InputSearch from "../components/SearchInput";

export default function Index() {
  const [currentWeatherData, setCurrentWeatherData] = useState<WeatherData>();

  const [myLocation, setMyLocation] = useState<{
    latitude?: number;
    longitude?: number;
  }>({
    latitude: undefined,
    longitude: undefined,
  });

  const [searchValue, setSearchValue] = useState("");

  const {
    data: cityData,
    isLoading: cityIsLoading,
    isError: cityIsError,
  } = useCityWeather(searchValue);

  const { data, isLoading, isError } = useCurrentPositionWeather({
    latitude: myLocation.latitude,
    longitude: myLocation.longitude,
  });

  const error = isError || cityIsError;
  const loading = isLoading || cityIsLoading;

  useEffect(() => {
    getLocationPermissions();
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentWeatherData(data);
    }
  }, [data]);

  useEffect(() => {
    if (cityData) {
      setCurrentWeatherData(cityData);
    }
  }, [cityData]);

  const getLocationPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});

    setMyLocation({ latitude, longitude });
  };

  const handleSetCityWeatherData = () => {
    if (cityData) {
      setCurrentWeatherData(cityData);
    }
  };

  const handleSetCurrentWeatherData = () => {
    if (data) {
      setCurrentWeatherData(data);
    }
  };

  return (
    <View style={styles.container}>
      {currentWeatherData && (
        <Image
          style={styles.weatherImagesSize}
          source={{
            uri:
              "https://openweathermap.org/img/wn/" +
              currentWeatherData.weather[0].icon +
              "@4x.png",
          }}
          resizeMode="contain"
        />
      )}
      <Text style={styles.temp}>
        Температура: {currentWeatherData?.main.temp.toFixed(1)}
      </Text>

      <Text style={styles.feelslike}>
        Oщущается как: {currentWeatherData?.main.feels_like.toFixed(1)}
      </Text>
      <Text style={styles.city}> {currentWeatherData?.name}</Text>

      <View style={styles.dataContainer}>
        <View style={styles.dataBlock}>
          <Ionicons name="water-outline" size={24} color="white" />
          <Text style={styles.dataSpeedHum}>
            {currentWeatherData?.main.humidity}%
          </Text>
          <Text style={styles.dataSpeedHum}>Влажность</Text>
        </View>
        <View style={styles.dataBlock}>
          <FontAwesome5 name="wind" size={24} color="white" />
          <Text style={styles.dataSpeedHum}>
            {currentWeatherData?.wind.speed.toFixed(1)} км/ч
          </Text>
          <Text style={styles.dataSpeedHum}>Скорость ветра</Text>
        </View>
      </View>
      <InputSearch
        onChangeText={setSearchValue}
        handleCityLocation={handleSetCityWeatherData}
        handleCurrentLocation={handleSetCurrentWeatherData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(31,31,31,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherImagesSize: {
    width: 100,
    height: 100,
  },

  temp: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "500",
  },

  feelslike: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",

    marginTop: 7,
  },

  city: {
    fontSize: 20,
    color: "#fff",

    marginTop: 10,
  },

  dataContainer: {
    flexDirection: "row",
    gap: 30,
  },

  dataBlock: {
    alignItems: "center",
    justifyContent: "center",

    gap: 10,

    marginTop: 25,
  },

  dataSpeedHum: {
    fontSize: 17,
    color: "#fff",
  },
});
