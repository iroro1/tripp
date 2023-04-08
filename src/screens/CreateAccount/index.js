import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/TextInput";
import AppTextInputPassword from "../../components/TextInputPassword";
import ScreenWrapper from "../../Layout/ScreenWrapper";
// import useFonts from "../../hooks/useFonts";
import {
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/merriweather";
import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import colors from "../../config/colors";
const CreateAccount = ({ navigation }) => {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    navigation.reset({
      index: 1,
      routes: [
        { name: "CreateAccount" },
        {
          name: "Homepage",
          params: {
            appData: {
              data,
            },
          },
        },
      ],
    });
    setIsLoading(false);
  };

  const disabledFn = () => {
    if (
      data?.email?.length > 0 &&
      data?.fullName?.length > 2 &&
      data?.phone?.length > 2 &&
      data?.password?.length >= 8
    ) {
      setDisabled(false);
    } else setDisabled(true);
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
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScreenWrapper>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAwareScrollView
          style={{
            marginBottom: 40,
            marginHorizontal: "4%",
          }}
        >
          <View style={styles.container}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 27,
                fontFamily: "Merriweather_700Bold",
                marginBottom: 16,
                marginTop: 46,
              }}
            >
              Create your account
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                fontFamily: "OpenSans_400Regular",
                marginBottom: 16,
              }}
            >
              Start your journey into a new way of living. Share a little about
              you
            </Text>

            <View
              style={{
                width: "100%",
                minHeight: 524,
                shadowColor: "rgba(0, 0, 0, 0.06)",
                shadowOffset: { width: 24, height: 34 },
                shadowOpacity: 0.8,
                shadowRadius: 15,
                borderColor: "rgba(0, 0, 0, 0.06)",
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 15,
                  paddingTop: 35,
                  paddingBottom: 5,
                  borderRadius: 20,
                }}
              >
                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      fontFamily: "OpenSans_600SemiBold",
                      marginBottom: -4,
                    }}
                  >
                    Full name
                  </Text>
                  <AppTextInput
                    onChangeText={(e) => {
                      setData({ ...data, fullName: e });
                      disabledFn();
                    }}
                    name={"fname"}
                  />
                </View>
                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      fontFamily: "OpenSans_600SemiBold",
                      marginBottom: -4,
                    }}
                  >
                    Email address
                  </Text>
                  <AppTextInput
                    onChangeText={(e) => {
                      setData({ ...data, email: e });

                      disabledFn();
                    }}
                    name={"email"}
                  />
                </View>
                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      fontFamily: "OpenSans_600SemiBold",
                      marginBottom: -4,
                    }}
                  >
                    Phone number
                  </Text>
                  <AppTextInput
                    onChangeText={(e) => {
                      setData({ ...data, phone: e });

                      disabledFn();
                    }}
                    name={"phone"}
                  />
                </View>
                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      fontFamily: "OpenSans_600SemiBold",
                      marginBottom: -4,
                    }}
                  >
                    Create Password
                  </Text>
                  <AppTextInputPassword
                    onChangeText={(e) => {
                      setData({ ...data, password: e });

                      disabledFn();
                    }}
                    showOnlyPholder={"Password (8+ characters)*"}
                    name={"password"}
                  />
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 10,
                      fontFamily: "OpenSans_400Regular",
                    }}
                  >
                    Make your password even stronger by including more thank{" "}
                    <Text
                      style={{
                        fontFamily: "OpenSans_700Bold",
                      }}
                    >
                      10 characters,
                    </Text>{" "}
                    number, symobls, upper and lowercase letter
                  </Text>
                </View>
                <AppButton
                  disabled={disabled}
                  onPress={() => handleSubmit()}
                  title={"Create Account"}
                  loading={isLoading}
                />
              </View>
            </View>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                fontFamily: "OpenSans_400Regular",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Got an account?
              <Text
                style={{
                  fontFamily: "OpenSans_700Bold",
                  color: colors.primary,
                }}
              >
                Sign in
              </Text>{" "}
            </Text>
            {/* <Text>Got an account? Sign in</Text> */}
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: Constants.statusBarHeight,
  },
});
