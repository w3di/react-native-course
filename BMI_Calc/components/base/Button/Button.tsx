import { Href, router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  Text,
  TouchableOpacity,
} from "react-native";

type ButtonProps = {
  textLink: string;
  href?: Href<string | object>;
  variant?: "purple" | "white";
  replace?: boolean;
  styleButton?: StyleProp<TextStyle>;
  styleTextButton?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress?: () => void;
};

const LinkButton = ({
  disabled,
  href,
  styleButton,
  variant,
  textLink,
  replace,
  onPress,
}: ButtonProps) => {
  const handleNavigation = () => {
    if (!href) return;

    if (replace) {
      router.replace(href);
    } else {
      router.push(href);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "white" && styles.buttonWhite,
        styleButton && styleButton,
      ]}
      disabled={disabled}
      onPress={onPress ? onPress : handleNavigation}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "white" && styles.buttonWhiteText,
        ]}
      >
        {textLink}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6C63FF",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 63,
    overflow: "hidden",
    paddingVertical: 27,
  },
  buttonText: {
    color: "#FFFFFF",
    borderRadius: 63,
    fontWeight: 500,
    fontSize: 17.6,
    lineHeight: 21,
    textAlign: "center",
  },
  buttonWhite: {
    backgroundColor: "#F4F3FF",
  },
  buttonWhiteText: {
    color: "#081854",
  },
});
export default LinkButton;
