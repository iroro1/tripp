import { ArrowRight, ArrowRight2 } from "iconsax-react-native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardMain = ({
  Icon,
  title,
  subtitle,
  onPress,
  marginTop,
  cost,
  type,
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
        width: "100%",
      }}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <View style={{ marginRight: 15 }}>{Icon}</View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 15,
                marginBottom: 12,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: "#3C3C43",
              }}
            >
              {subtitle}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 15,
                textAlign: "right",
                marginBottom: 12,
              }}
            >
              {cost}
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: "#3C3C43",
                textAlign: "right",
              }}
            >
              {type}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMain;
