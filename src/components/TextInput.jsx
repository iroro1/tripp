import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({
  icon,
  iconR,
  borderColor,
  borderWidth = 1,
  width = "100%",
  label,
  secureTextEntry = false,
  onChangeText,
  placeholder,
  keyboardType,
  disabled,
  ...otherProps
}) {
  const [hash, setHash] = useState(secureTextEntry);
  const [focus, setFocus] = useState(false);
  const [labelMain, setLabelMain] = useState(label || placeholder);
  console.log(label);
  return (
    <View
      style={[
        styles.container,
        {
          width,
          borderColor:
            !focus || disabled ? "#E7E3EF" : defaultStyles.colors.primary,
          borderWidth,
          backgroundColor: "#fff",
        },
      ]}
    >
      {focus && labelMain && (
        <Text
          style={{
            color: "#A197B6",
            fontWeight: "400",
            fontSize: 12,
            marginTop: 8,
            paddingHorizontal: 16,
            position: "absolute",
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          marginLeft: 0,
          marginTop: label ? 12 : 0,
        }}
      >
        {!focus && icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
        {disabled ? (
          <Text style={{ marginTop: 5 }}>{label}</Text>
        ) : (
          <TextInput
            onFocus={() => {
              setFocus(true);
              setLabelMain(placeholder);
            }}
            onBlur={() => setFocus(false)}
            placeholderTextColor={defaultStyles.colors.medium}
            style={[
              defaultStyles.text,
              {
                height: !focus ? 56 : 36,
                marginTop:
                  !focus && placeholder && iconR
                    ? -11
                    : !focus && !labelMain
                    ? -9
                    : !focus && labelMain
                    ? -23
                    : 0,
                width: "100%",
                fontSize: 14,
                fontWeight: "400",
              },
            ]}
            {...otherProps}
            secureTextEntry={hash}
            onChangeText={onChangeText}
            placeholder={labelMain}
            keyboardType={keyboardType || "ascii-capable"}
          />
        )}
        {!focus && iconR && (
          <MaterialCommunityIcons
            name={iconR}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
      </View>
      {secureTextEntry && (
        <TouchableOpacity
          style={{
            top: 5,
            right: 5,
            marginRight: 0,
          }}
          onPress={() => setHash(!hash)}
        >
          {hash ? (
            <Eye size={25} color={defaultStyles.colors.medium} />
          ) : (
            <EyeSlash size={25} color={defaultStyles.colors.medium} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    height: 56,
    position: "relative",
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
  },
});

export default AppTextInput;
