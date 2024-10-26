import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import LinkButton from "@base/Button/Button";
function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.textImage}
        source={require("../assets/images/textImg.png")}
        contentFit="contain"
      />
      <Image
        style={styles.mainImage}
        source={require("../assets/images/mainImg.png")}
        contentFit="contain"
      />
      <Text style={styles.heading}>Get Started with Tracking Your Health!</Text>
      <Text style={styles.subText}>
        Calculate your BMI and stay on top of your wellness journey,
        effortlessly.
      </Text>
      <LinkButton
        replace
        href={"/calculate-bmi"}
        textLink="Get Started"
        variant="white"
        styleButton={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C63FF",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  textImage: {
    width: 104,
    height: 37,
  },
  mainImage: {
    width: 296,
    height: 251,
    marginTop: 59,
  },
  heading: {
    color: "#FFFFFF",

    marginTop: 95,
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 33,
  },
  subText: {
    color: "#FFFFFF",

    fontSize: 15,
    lineHeight: 19,
    marginTop: 15,
  },
  button: {
    marginTop: 38,
  },
});

export default Index;
