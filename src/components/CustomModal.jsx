import React from "react";
import { Modal, Pressable, View } from "react-native";
import GestureRecognizer from "react-native-swipe-detect";

const CustomModal = ({ height = "100%", isOpenFn, style, children }) => {
  return (
    <Modal transparent={true} visible={true}>
      <GestureRecognizer
        style={{
          flex: 1,
        }}
        onSwipeDown={() => {
          isOpenFn();
          console.log("Down");
        }}
      >
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={isOpenFn}
        ></Pressable>
        <View
          style={{
            backgroundColor: "#fff",
            height,
            paddingVertical: 20,
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 20,
            ...style,
          }}
        >
          {children}
        </View>
      </GestureRecognizer>
    </Modal>
  );
};

export default CustomModal;
