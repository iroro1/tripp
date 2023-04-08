import { ArrowRight, ArrowRight2 } from "iconsax-react-native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({
  Icon,
  title,
  subtitle,
  onPress,
  marginTop,
  showArr = true,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 76,
        backgroundColor: "#fff",
        padding: 12,
        marginTop,
        borderRadius: 10,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginRight: 15 }}>{Icon}</View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          {title && (
            <Text
              style={{
                fontWeight: "600",
                fontSize: 15,
              }}
            >
              {title}
            </Text>
          )}
          {subtitle && (
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: "#3C3C43",
              }}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      <View>{showArr && <ArrowRight2 color="#000" size={12} />}</View>
    </TouchableOpacity>
  );
};

export default Card;
