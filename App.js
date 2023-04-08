import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import CreateAccount from "./src/screens/CreateAccount";
import Homepage from "./src/screens/HomePage/";

import { RootSiblingParent } from "react-native-root-siblings";

import { Provider } from "react-redux";
import { store } from "./src/store/configureAppStore";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <NavigationContainer style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="CreateAccount"
              options={{
                title: "Create Account",
                headerShown: false,
              }}
              component={CreateAccount}
            ></Stack.Screen>

            <Stack.Screen
              component={Homepage}
              name="Homepage"
              options={{ headerShown: false, unmountOnBlur: true }}
            ></Stack.Screen>
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
