import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const WalletComp = () => {
  const appState = useSelector((state) => state);
  return (
    <ScrollView>
      <View>
        <Text>WalletComp</Text>
      </View>
    </ScrollView>
  );
};

export default WalletComp;
