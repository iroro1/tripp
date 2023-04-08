import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic,
} from "@expo-google-fonts/merriweather";
import GestureRecognizer from "react-native-swipe-detect";
const WelcomeScreen = ({ navigation }) => {
  const screens = [
    {
      text: "All your financial and accounting arrangements hassle rsolved in one app.",
      header: "Easy and Simple Accounting",
      image: require("../../assets/images/slide1.png"),
    },
    {
      text: "Personalized insights and guidance tohelp you stay on top of your finances.",
      header: "Manage Your Business",
      image: require("../../assets/images/slide2.png"),
    },
    {
      text: "Manage your business finance in time and at a low cost.",
      header: "Save Money and Time",
      image: require("../../assets/images/slide3.png"),
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 5000);
  });
  const moveSlides = () => {
    if (screenIndex === 2) {
      setScreenIndex(0);
    } else setScreenIndex(screenIndex + 1);
  };
  const moveSlidesBack = () => {
    if (screenIndex === 0) {
      setScreenIndex(2);
    } else setScreenIndex(screenIndex - 1);
  };
  useEffect(() => {
    setTimeout(() => {
      moveSlides();
    }, 10000);
  });
  const [showLogo, setShowLogo] = useState(true);
  const [screenIndex, setScreenIndex] = useState(0);
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  let [fontsLoaded] = useFonts({
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
    Merriweather_700Bold_Italic,
    Merriweather_900Black,
    Merriweather_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.buttonContainer}>
            <AppButton
              title={"login"}
              borderRadius={12}
              fontSize={14}
              width={150}
              onPress={() => navigation.navigate("Login")}
            />
            <AppButton
              title={"Create Account"}
              borderRadius={12}
              fontSize={14}
              width={180}
              type="outline"
              onPress={() => navigation.navigate("CreateAccount")}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingBottom: 40,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 100,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    height: 56,
    alignItems: "center",
    width: "100%",
    rowGap: 20,
    justifyContent: "space-between",
    bottom: 6,
    position: "absolute",
    padding: 20,
  },
  loginButton: {
    width: 157,
    height: 56,
    borderRadius: 12,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5C1D97",
  },
  createButton: {
    width: 157,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#5C1D97",
    marginLeft: 20,
  },
});
