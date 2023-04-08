import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "primary",
  borderRadius = 8,
  fontSize = 14,
  fontWeight = "700",
  width = "100%",
  padding = 15,
  height,
  type = "main",
  disabled = false,
  bgColor,
  textColor,
  loading,
}) {
  console.log(disabled, 777);
  return disabled ? (
    <View
      style={[
        type === "main" ? styles.button : styles.buttonOut,
        {
          backgroundColor:
            bgColor ||
            (disabled && "#D1D5DB") ||
            (type === "main" ? colors[color] : "transparent"),
          borderRadius,
          width,
          padding,
          height,
          flexDirection: "row",
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize,
            fontWeight,
            color: textColor || type === "main" ? colors.white : colors.primary,
            marginRight: 5,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  ) : (
    <TouchableOpacity
      style={[
        type === "main" ? styles.button : styles.buttonOut,
        {
          backgroundColor:
            (disabled && "#A197B6") ||
            (type === "main" ? colors[color] : "transparent"),
          borderRadius,
          width,
          padding,
          height,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
      // disabled={disabled ? true : false}
      onPress={() => !disabled && onPress()}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize,
            fontWeight,
            color: type === "main" ? colors.white : colors.primary,
            marginRight: 5,
          },
        ]}
      >
        {title}
      </Text>

      {loading && <ActivityIndicator color="#fff" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    height: 56,
  },
  buttonOut: {
    borderColor: colors.primary,
    backgroundColor: "#000000",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    height: 56,
  },
  text: {
    color: colors.white,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default AppButton;
