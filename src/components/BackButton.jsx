import { ArrowLeft2 } from "iconsax-react-native";
import React from "react";
import { Pressable } from "react-native";

const BackButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <ArrowLeft2 color="#29203A" size={22} />
    </Pressable>
  );
};

export default BackButton;
