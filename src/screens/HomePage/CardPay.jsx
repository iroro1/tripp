import { ArrowRight, ArrowRight2 } from "iconsax-react-native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardPay = ({
  Icon,
  title,
  subtitle,
  onPress,
  marginTop,
  height = 109,
  showArrow = true,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height,
        backgroundColor: "#F1F5F9",
        padding: 12,
        marginTop,
        borderRadius: 10,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginRight: 15 }}>{Icon}</View>
        <View>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 16,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              color: "#0F172A",
              width: 186,
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
      <View>{showArrow && <ArrowRight2 color="#000" size={12} />}</View>
    </TouchableOpacity>
  );
};

export default CardPay;
