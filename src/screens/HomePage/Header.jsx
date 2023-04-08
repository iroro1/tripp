import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useFontsCustom from "../../hooks/useFontsCustom";

const Header = ({ title }) => {
  const load = async () => {
    return await useFontsCustom();
  };
  return (
    <View style={styles.topArea}>
      <View>
        <Text
          style={{
            color: "#111317",
            fontWeight: "400",
            fontSize: 16,
            fontFamily: load() && "Merriweather_700Bold",
            fontWeight: 700,
          }}
        >
          {title || "Your Bills"}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topArea: {
    width: "100%",
    height: 129,
    backgroundColor: "#C8F2FE",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 20,
    justifyContent: "space-between",
  },
});
export default Header;
