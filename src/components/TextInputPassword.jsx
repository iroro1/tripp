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
import { passwordVal } from "../utilities/validationSchema";

function AppTextInputPassword({
  icon,
  borderColor,
  borderWidth = 1,
  width = "100%",
  label,
  secureTextEntry = true,
  onChangeText,
  showOnlyPholder = "",
  onBlur = () => {},
  ...otherProps
}) {
  const [hash, setHash] = useState(secureTextEntry);
  const [focus, setFocus] = useState(false);
  const [touch, setTouch] = useState(false);
  const [val, setVal] = useState("");
  const [labelMain, setLabelMain] = useState(label);

  const errArr = [
    "Minimum of 8 Characters",
    "A Lowercase Letter",
    "An Uppercase Letter",
    "A Character",
    "A Number",
  ];
  const [errors, setErrors] = useState(errArr);

  const changeFn = (e) => {
    setErrors(passwordVal(e));
    e.length === 0 && setErrors(errArr);
    onChangeText(e);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            width,
            borderColor: !focus ? "#E7E3EF" : defaultStyles.colors.primary,
            borderWidth,
            backgroundColor: "#fff",
          },
        ]}
      >
        {showOnlyPholder && !focus && (
          <Text
            style={{
              color: "#A197B6",
              marginTop: 18,
              position: "absolute",
              paddingHorizontal: 16,
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            {val.length === 0 && showOnlyPholder}
          </Text>
        )}
        {focus && labelMain && !showOnlyPholder && (
          <Text
            style={{
              color: "#A197B6",
              fontWeight: "400",
              fontSize: 12,
              marginTop: 8,
              position: "absolute",
              paddingHorizontal: 16,
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
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <TextInput
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
              onBlur();
            }}
            placeholderTextColor={defaultStyles.colors.medium}
            style={[
              defaultStyles.text,
              {
                height: !focus ? 56 : 36,
                marginTop: showOnlyPholder
                  ? -1
                  : !focus
                  ? -23
                  : val.length > 0
                  ? -9
                  : 0,
                width: "100%",
                fontSize: 14,
                fontWeight: "400",
              },
            ]}
            {...otherProps}
            placeholder={!focus ? labelMain : showOnlyPholder}
            secureTextEntry={hash}
            onChangeText={(e) => {
              changeFn(e);
              setVal(e);
            }}
            onTouchStart={setTouch}
          />
        </View>
        <TouchableOpacity
          style={{
            top: 5,
            right: 30,
            marginRight: 0,
            borderLeftWidth: 1,
            borderLeftColor: "#E5E7EB",
            paddingLeft: 15,
          }}
          onPress={() => setHash(!hash)}
        >
          {hash ? (
            <Eye size={25} color={defaultStyles.colors.medium} />
          ) : (
            <EyeSlash size={25} color={defaultStyles.colors.medium} />
          )}
        </TouchableOpacity>
      </View>
      {/* {(focus || (touch && errors.length > 1)) && (
        <View
          style={{
            height: 56,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: colorFn("A Number"),
              },
            ]}
          >
            <MaterialCommunityIcons name="check" /> A Number{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: colorFn("An Uppercase Letter"),
              },
            ]}
          >
            <MaterialCommunityIcons name="check" /> An Uppercase Letter{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: colorFn("A Lowercase Letter"),
              },
            ]}
          >
            <MaterialCommunityIcons name="check" /> A Lowercase Letter{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: colorFn("A Character"),
              },
            ]}
          >
            <MaterialCommunityIcons name="check" /> A Character{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: colorFn("Minimum of 8 Characters"),
              },
            ]}
          >
            <MaterialCommunityIcons name="check" /> Minimum of 8 Characters
          </Text>
        </View>
      )} */}
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
  text: {
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 20,
    marginRight: 13,
    color: "#DE524C",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInputPassword;
