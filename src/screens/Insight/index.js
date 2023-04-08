import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Insight = () => {
  const appState = useSelector((state) => state);
  return (
    <ScrollView>
      <View>
        <Text>Insight</Text>
      </View>
    </ScrollView>
  );
};

export default Insight;
