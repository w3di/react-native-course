import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { router, useLocalSearchParams } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import { Image } from "expo-image";
import { resultToText } from "@functions/resultToText";
import LinkButton from "@base/Button/Button";

const ResultScreen = () => {
  const { result } = useLocalSearchParams<{ result: string }>();

  const imageRef = useRef<View>(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();

  const [integerPart, decimalPart] = result.split(".");

  const onSaveImageAsync = async () => {
    if (!status) {
      await requestPermission();
    }

    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      if (localUri) {
        await MediaLibrary.saveToLibraryAsync(localUri);
        showAlert(
          "Success!",
          "Your BMI has been successfully saved! What would you like to do next?"
        );
      }
    } catch (error) {
      showAlert("Ops...!", `Some error: ${error}`);
    }
  };

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message, [
      {
        text: "Go Back",
        onPress: () => router.back(),
        style: "destructive",
      },
      {
        text: "Close alert",
        style: "default",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: "absolute",
          top: 40,
          left: 20,
        }}
      >
        <Image
          style={{
            width: 33,
            height: 28,
          }}
          source={require("../assets/images/back-icon.svg")}
          contentFit="contain"
        />
      </TouchableOpacity>
      <Text style={styles.title}>BMI CALCULATOR</Text>
      <Text style={styles.headerText}>Body Mass Index</Text>
      <View style={styles.resultContainer} ref={imageRef}>
        <Text style={styles.resultTitle}>BMI Results</Text>
        <View style={styles.numberWrapper}>
          <Text style={styles.bigNumber}>{integerPart}</Text>
          <Text style={styles.smallNumbers}>.{decimalPart}</Text>
        </View>
        <Text style={styles.typeBmiText}>{resultToText(result)}</Text>
        <Text style={styles.noteText}>
          Underweight: BMI less than 18.5{`\n`}
          Normal weight: BMI 18.5 to 24.9{`\n`}
          Overweight: BMI 25 to 29.9{`\n`}
          Obesity: 30 to 40
        </Text>
      </View>
      <LinkButton
        variant={"purple"}
        onPress={onSaveImageAsync}
        textLink="Save the results"
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

  resultContainer: {
    marginTop: 42,
    backgroundColor: "#ffffff",
    paddingHorizontal: 43,
    paddingTop: 45,
    paddingBottom: 37,
    borderRadius: 12,
    width: "100%",
  },

  headerText: {
    marginTop: 35,
    fontSize: 27.8,
    lineHeight: 34,
    textAlign: "center",
    color: "#081854",
  },
  resultTitle: {
    fontSize: 32.7,
    lineHeight: 40,
    textAlign: "center",
    color: "#081854",
  },

  numberWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bigNumber: {
    fontWeight: "700",
    fontSize: 140.633,
    lineHeight: 170,
    color: "#6C63FF",
  },
  smallNumbers: {
    fontWeight: "500",
    fontSize: 42.2,
    lineHeight: 51,
    color: "#6C63FF",
    textAlign: "center",
    marginBottom: 27.5,
  },

  typeBmiText: {
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",

    color: "#081854",
  },

  noteText: {
    marginTop: 18.5,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 20,
    color: "#081854",
  },

  button: { marginTop: 50 },
});

export default ResultScreen;
