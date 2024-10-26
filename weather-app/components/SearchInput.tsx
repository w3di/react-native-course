import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import { useFetchCities } from "../hooks/useGetCities";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function InputSearch({
  onChangeText,
  handleCurrentLocation,
  handleCityLocation,
}: {
  onChangeText: (e: string) => void;
  handleCurrentLocation: () => void;
  handleCityLocation: () => void;
}) {
  const [isSearchValueFocus, setIsSearchValueFocus] = useState(false);

  const [localValue, setLocalValue] = useState("");

  const {
    data: citiesData,
    isError: citiesisError,
    isLoading: citiesIsLoading,
  } = useFetchCities(localValue);

  return (
    <View
      style={{
        position: "relative",
        marginBottom: 30,
        width: 200,
        flexDirection: "row",
      }}
    >
      <TextInput
        style={{ backgroundColor: "gray", width: "70%" }}
        value={localValue}
        onChangeText={setLocalValue}
        onFocus={() => setIsSearchValueFocus(true)}
      />
      <TouchableOpacity
        style={{
          width: "15%",
          height: 30,
          backgroundColor: "#cccccc",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setIsSearchValueFocus(false);
          onChangeText(localValue);
          handleCityLocation();
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "15%",
          height: 30,
          backgroundColor: "#807e7e",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setIsSearchValueFocus(false);
          handleCurrentLocation();
        }}
      >
        <MaterialCommunityIcons
          name="map-marker-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      {isSearchValueFocus && citiesData.length > 0 && (
        <ScrollView
          style={{
            width: "100%",
            overflow: "scroll",
            top: 30,
            backgroundColor: "white",
            maxHeight: 100,
            flexDirection: "column",
            gap: 10,
            position: "absolute",
          }}
        >
          {citiesisError ? (
            <Text style={{ color: "black" }}>Error</Text>
          ) : (
            citiesData.map((city, index) => (
              <TouchableHighlight
                key={city + index}
                onPress={() => {
                  onChangeText(city);
                  setLocalValue(city);
                  setIsSearchValueFocus(false);
                }}
              >
                <Text style={{ color: "black" }}>{city}</Text>
              </TouchableHighlight>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
