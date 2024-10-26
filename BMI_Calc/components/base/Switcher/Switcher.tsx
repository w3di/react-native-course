import React, { useRef } from "react";
import { View, Pressable, Animated } from "react-native";

interface SwitchProps {
  onChange: (newMode: boolean) => void;
  switchColor?: string;
  value: boolean;
}

const Switcher = ({ onChange, value }: SwitchProps) => {
  const left = useRef(new Animated.Value(0)).current;

  const handlePress = (newMode: boolean) => {
    Animated.timing(left, {
      toValue: !value ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onChange(newMode);
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: 135,
          height: 41,
          borderRadius: 100,
          backgroundColor: "#F4F3FF",
        },
      ]}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            width: 35,
            top: 4,
            backgroundColor: "#6C63FF",
            height: 35,
            borderRadius: 100,
            left: left.interpolate({
              inputRange: [0, 1],
              outputRange: ["5%", "70%"],
            }),
          },
        ]}
      />
      <Pressable
        onPress={() => handlePress(false)}
        style={[
          {
            flex: 1,
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      ></Pressable>
      <Pressable
        onPress={() => handlePress(true)}
        style={[
          {
            flex: 1,
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      ></Pressable>
    </View>
  );
};

export default Switcher;
