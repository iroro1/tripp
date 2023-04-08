import React from "react";
import { Image, View } from "react-native";

const IconCustomWrapper = ({ Icon, bgColor }) => {
  return (
    <View
      style={{
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Icon}
    </View>
  );
};

export default IconCustomWrapper;
