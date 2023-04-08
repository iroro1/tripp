import React from "react";
import { Image, View } from "react-native";

const IconCustom = ({ imgSrc, bgColor, imgSize = 19 }) => {
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
      <Image
        source={imgSrc}
        style={{
          height: imgSize,
          width: imgSize,
        }}
      />
    </View>
  );
};

export default IconCustom;
