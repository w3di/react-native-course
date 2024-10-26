import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";

interface IncrementDecrementControlProps {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const IncrementDecrementControl = ({
  label,
  value,
  setValue,
}: IncrementDecrementControlProps) => {
  return (
    <View style={styles.box}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          disabled={value <= 0}
          style={[styles.button, value <= 0 && styles.buttonDismiss]}
          onPress={() => value > 0 && setValue((prev) => prev - 1)}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/images/minus.svg")}
            contentFit="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue((prev) => prev + 1)}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/images/plus.svg")}
            contentFit="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingBottom: 14,
    flex: 1,
    paddingTop: 27,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    justifyContent: "center",
  },
  label: {
    fontSize: 17.6,
    lineHeight: 21,
    color: "#2fe41",
    textAlign: "center",
  },
  value: {
    marginTop: 3,
    fontSize: 57.4,
    lineHeight: 69,
    color: "#6C63FF",
    fontWeight: "700",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 31.6,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#081854",
    borderRadius: 100,
    padding: 8.4,
    alignSelf: "center",
  },
  buttonDismiss: {
    opacity: 0.6,
  },
  icon: {
    width: 17.6,
    height: 17.6,
  },
});

export default IncrementDecrementControl;
