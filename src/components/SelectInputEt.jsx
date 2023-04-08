import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ArrowRight2, Eye, EyeSlash } from "iconsax-react-native";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import defaultStyles from "../config/styles";
import BackButton from "./BackButton";

function SelectInput({
  icon,
  borderWidth = 1,
  width = "100%",
  label,
  height = 300,
  children,
  showBackButton = false,
}) {
  const [focus, setFocus] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <>
      <View
        style={[
          styles.container,
          {
            width,
            borderColor: !focus ? "#E7E3EF" : defaultStyles.colors.primary,
            borderWidth,
            backgroundColor: "#FAF9FC90",
            position: "relative",
          },
        ]}
      >
        <Pressable
          style={[
            styles.container,
            {
              width: "110%",
              position: "absolute",
              marginTop: -3,
              zIndex: 99,
            },
          ]}
          onPress={() => setModal(true)}
        ></Pressable>
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
          <Pressable
            // placeholderTextColor={defaultStyles.colors.medium}
            style={[
              defaultStyles.text,
              {
                height: 56,
                marginTop: -23,
                width: "100%",
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={{
                color: "#544A67",
                fontWeight: "400",
                fontSize: 14,
              }}
            >
              {label}
            </Text>
          </Pressable>
        </View>
        <TouchableOpacity
          style={{
            top: 5,
            right: 5,
            marginRight: 0,
          }}
          onPress={() => setModal(true)}
        >
          <ArrowRight2 size={25} color={defaultStyles.colors.medium} />
        </TouchableOpacity>
      </View>
      {modal && (
        <Modal transparent={true} visible={true}>
          <Pressable
            style={{
              backgroundColor: "rgba(24, 16, 41, 0.4)",
              flex: 1,
            }}
            onPress={() => setModal(false)}
          ></Pressable>
          <View
            style={{
              backgroundColor: "#fff",
              height,
              padding: 20,
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              alignItems: "center",
              justifyContent: "flex-start",
              zIndex: 20,
            }}
          >
            <View
              style={{
                borderWidth: 4,
                borderColor: "#F4F2F9",
                width: 56,
                borderRadius: 12,
                marginBottom: 32,
              }}
            >
              {/* Border line */}
            </View>
            {showBackButton && (
              <View
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <View style={{ position: "absolute" }}>
                  <BackButton onPress={() => setModal(false)} />
                </View>
              </View>
            )}
            {children}
          </View>
        </Modal>
      )}
    </>
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
  },
});

export default SelectInput;
