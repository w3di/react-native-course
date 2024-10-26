import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import React from "react";
import Slider from "@react-native-community/slider";
import { calculateBMI } from "../helpers/functions/calculateBMI";
import IncrementDecrementControl from "@widget/IncrementDecrementControl/IncrementDecrementControl";
import LinkButton from "@base/Button/Button";
import Switcher from "@base/Switcher/Switcher";

const MIN_HEIGHT = 30;
const MAX_HEIGHT = 300;

const CalculateBmiScreen = () => {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(60);
  const [isManGender, setIsManGender] = useState(true);
  const [height, setHeight] = useState(175);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI CALCULATOR</Text>
      <View style={styles.row}>
        <IncrementDecrementControl label="Age" value={age} setValue={setAge} />
        <IncrementDecrementControl
          label="Weight (KG)"
          value={weight}
          setValue={setWeight}
        />
      </View>
      <View style={styles.blockWrapper}>
        <Text style={styles.blockTitle}>Height (CM)</Text>
        <Text style={styles.heightText}>{height}</Text>
        <Slider
          style={styles.sliderStyle}
          minimumValue={MIN_HEIGHT}
          maximumValue={MAX_HEIGHT}
          minimumTrackTintColor="#CCCCCC"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#6C63FF"
          value={height}
          onValueChange={setHeight}
          step={1}
        />
        <View style={styles.limitsWrapper}>
          <Text style={styles.limitText}>{MIN_HEIGHT} cm</Text>
          <Text style={styles.limitText}>{MAX_HEIGHT} cm</Text>
        </View>
      </View>
      <View style={styles.blockWrapper}>
        <Text style={styles.blockTitle}>Gender</Text>
        <View style={styles.blockRow}>
          <Text style={styles.blockTitle}>Male</Text>
          <Switcher value={isManGender} onChange={setIsManGender} />
          <Text style={styles.blockTitle}>Female</Text>
        </View>
      </View>
      <LinkButton
        variant={"purple"}
        href={{
          pathname: "/result",
          params: { result: calculateBMI(age, weight, height, isManGender) },
        }}
        textLink="Calculate BMI"
        styleButton={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F3FF",
  },
  title: {
    textAlign: "center",
    lineHeight: 21,
    fontSize: 17.6,
    color: "#081854",
  },
  row: {
    flexDirection: "row",
    gap: 21,
    marginTop: 39,
  },
  heightText: {
    fontSize: 57.4,
    lineHeight: 69,
    color: "#6C63FF",
    fontWeight: "700",
    textAlign: "center",
  },
  sliderStyle: { width: "100%", height: 40 },
  limitsWrapper: { justifyContent: "space-between", flexDirection: "row" },
  limitText: {
    fontSize: 13,
    lineHeight: 16,
    color: "#060918",
  },
  blockTitle: {
    fontSize: 17.6,
    lineHeight: 21,
    textAlign: "center",
    color: "#081854",
  },

  blockWrapper: {
    marginTop: 23,
    width: "100%",
    paddingTop: 17,
    paddingHorizontal: 36,
    paddingBottom: 24,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },

  blockRow: {
    marginTop: 26,
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },

  button: {
    marginTop: 38,
  },
});

export default CalculateBmiScreen;
