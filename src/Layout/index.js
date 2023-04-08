import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./BottomNav";
import React from "react";

const index = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      {/* <Text>TOP</Text> */}
      {children}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
});
