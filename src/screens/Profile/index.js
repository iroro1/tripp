import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Profile = () => {
  const appState = useSelector((state) => state);
  return (
    <ScrollView>
      <View>
        <Text>Profile</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
