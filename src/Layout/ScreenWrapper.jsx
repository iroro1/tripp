import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";
const ScreenWrapper = ({ bgColor = "#fff", children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
