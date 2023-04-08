import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Chart, DocumentCloud, Home, User, Wallet } from "iconsax-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { ALTER_AUTH_STATE } from "../../store/authSlice";
import BillsComp from "../BillsComp";
import Insight from "../Insight";
import Profile from "../Profile";
import WalletComp from "../WalletComp";
import HomepageDash from "./HomepageDash";

const Tab = createBottomTabNavigator();

const Homepage = ({ route }) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  useEffect(() => {
    // Set AppData to AuthStore
    dispatch(ALTER_AUTH_STATE({ ...route.params.appData }));
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return focused ? (
                <Home variant="Bold" color={color} size={size} />
              ) : (
                <Home variant="Bold" color={color} size={size} />
              );
            } else if (route.name === "Bills") {
              return focused ? (
                <DocumentCloud variant="Bold" color={color} size={size} />
              ) : (
                <DocumentCloud variant="Bold" color={color} size={size} />
              );
            } else if (route.name === "Insight") {
              return focused ? (
                <Chart variant="Bold" color={color} size={size} />
              ) : (
                <Chart variant="Bold" color={color} size={size} />
              );
            } else if (route.name === "Profile") {
              return focused ? (
                <User variant="Bold" color={color} size={size} />
              ) : (
                <User variant="Bold" color={color} size={size} />
              );
            } else if (route.name === "Wallet") {
              return focused ? (
                <Wallet variant="Bold" color={color} size={size} />
              ) : (
                <Wallet variant="Bold" color={color} size={size} />
              );
            }
          },
          tabBarActiveTintColor: "#1A75FD",
          tabBarInactiveTintColor: "#231F2080",
          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingVertical: 10,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomepageDash}
          initialParams={route?.params}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "800",
              margin: 0,
              padding: 0,
            },
          }}
        />

        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              fontSize: 12,
              fontS: "roboto",
              fontWeight: "800",
              margin: 0,
              padding: 0,
            },
          }}
          name="Bills"
          component={BillsComp}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletComp}
          options={{
            tabBarLabelStyle: {
              fontSize: 12,
              fontS: "roboto",
              fontWeight: "800",
              margin: 0,
              padding: 0,
            },
          }}
        />
        <Tab.Screen
          name="Insight"
          component={Insight}
          options={{
            tabBarLabelStyle: {
              fontSize: 12,
              fontS: "roboto",
              fontWeight: "800",
              margin: 0,
              padding: 0,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabelStyle: {
              fontSize: 12,
              fontS: "roboto",
              fontWeight: "800",
              margin: 0,
              padding: 0,
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    height: "80%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  subMenu: {
    display: "flex",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "#F4F2F9",
  },
});
