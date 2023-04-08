import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const BillsComp = () => {
  const appState = useSelector((state) => state);
  return (
    <ScrollView>
      <View>
        <Text>BillsComp</Text>
      </View>
    </ScrollView>
  );
};

export default BillsComp;
