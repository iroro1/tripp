import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import CreateAccount from "./src/screens/CreateAccount";
import AccSetup from "./src/screens/CreateAccount/AccSetup";
import WelcomeNote from "./src/screens/CreateAccount/WelcomeNote";
import Homepage from "./src/screens/HomePage/";
import Login from "./src/screens/Login";
import ForgotPassword from "./src/screens/Login/ForgotPassword";
import NewPassword from "./src/screens/Login/NewPassword";
import Otp from "./src/screens/Login/Otp";
import WelcomeScreen from "./src/screens/WelcomeScreen";

import { RootSiblingParent } from "react-native-root-siblings";
import Customer from "./src/screens/Services/Screens/Customer";
import CreateNewCustomer from "./src/screens/Services/Screens/Customer/CreateNewCustomer";
import CustomerDetails from "./src/screens/Services/Screens/Customer/CustomerDetails";
import EditCustomer from "./src/screens/Services/Screens/Customer/EditCustomer";
import Payment from "./src/screens/Services/Screens/Payment";
import POS from "./src/screens/Services/Screens/POS";
import POSOverview from "./src/screens/Services/Screens/POSOverview";
import PosDetail from "./src/screens/Services/Screens/POSOverview/PosDetail";
import Products from "./src/screens/Services/Screens/Products";
import PurchaseInvoice from "./src/screens/Services/Screens/PurchaseInvoice";
import ReceivedGoods from "./src/screens/Services/Screens/ReceivedGoods";
import SalesInvoice from "./src/screens/Services/Screens/SalesInvoice";
import ServicesPage from "./src/screens/Services/Screens/ServicesPage";
import Supplier from "./src/screens/Services/Screens/Supplier";
import CreateNewSupplier from "./src/screens/Services/Screens/Supplier/CreateNewSupplier";
import EditSupplier from "./src/screens/Services/Screens/Supplier/EditSupplier";
import SupplierDetails from "./src/screens/Services/Screens/Supplier/SupplierDetails";

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
              name="Welcome"
              options={{
                title: "",
                headerShown: false,
                gestureEnabled: false,
                headerLeft: () => null,
              }}
              component={WelcomeScreen}
            ></Stack.Screen>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{
                title: "",
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={{
                title: "",
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                title: "",
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="CreateAccount"
              options={{
                title: "Create Account",
              }}
              component={CreateAccount}
            ></Stack.Screen>
            <Stack.Screen
              name="WelcomeNote"
              options={{ headerShown: false }}
              component={WelcomeNote}
            ></Stack.Screen>
            <Stack.Screen
              name="AccSetup"
              options={{ headerShown: false }}
              component={AccSetup}
            ></Stack.Screen>
            <Stack.Screen
              component={Homepage}
              name="Homepage"
              options={{ headerShown: false, unmountOnBlur: true }}
            ></Stack.Screen>
            <Stack.Screen
              name="Services"
              options={{ title: "", headerShown: false }}
              component={ServicesPage}
            ></Stack.Screen>
            <Stack.Screen
              name="Supplier"
              options={{ title: "Supplier", headerShown: false }}
              component={Supplier}
            ></Stack.Screen>
            <Stack.Screen
              name="CreateNewSupplier"
              options={{ title: "New Supplier", headerShown: false }}
              component={CreateNewSupplier}
            ></Stack.Screen>
            <Stack.Screen
              name="EditSupplier"
              options={{ title: "Edit Supplier", headerShown: false }}
              component={EditSupplier}
            ></Stack.Screen>
            <Stack.Screen
              name="SupplierDetails"
              options={{ title: "Supplier Details", headerShown: false }}
              component={SupplierDetails}
            ></Stack.Screen>
            <Stack.Screen
              name="PurchaseInvoice"
              options={{ title: "Purchase Invoice" }}
              component={PurchaseInvoice}
            ></Stack.Screen>
            <Stack.Screen
              name="SalesInvoice"
              options={{ title: "" }}
              component={SalesInvoice}
            ></Stack.Screen>
            <Stack.Screen
              name="Customer"
              options={{ title: "Customer", headerShown: false }}
              component={Customer}
            ></Stack.Screen>
            <Stack.Screen
              name="CreateNewCustomer"
              options={{ title: "New Customer", headerShown: false }}
              component={CreateNewCustomer}
            ></Stack.Screen>
            <Stack.Screen
              name="EditCustomer"
              options={{ title: "Edit Customer", headerShown: false }}
              component={EditCustomer}
            ></Stack.Screen>
            <Stack.Screen
              name="CustomerDetails"
              options={{ title: "Customer Details", headerShown: false }}
              component={CustomerDetails}
            ></Stack.Screen>
            <Stack.Screen
              name="Pos"
              options={{
                title: "",
                headerShown: false,
              }}
              component={POS}
            ></Stack.Screen>
            <Stack.Screen
              name="PosSalesOverview"
              options={{ title: "Pos Sales History", headerShown: false }}
              component={POSOverview}
            ></Stack.Screen>
            <Stack.Screen
              name="PosSalesDetail"
              options={{ title: "Pos Sales History", headerShown: false }}
              component={PosDetail}
            ></Stack.Screen>
            <Stack.Screen
              name="InventoryProducts"
              options={{ title: "Products" }}
              component={Products}
            ></Stack.Screen>
            <Stack.Screen
              name="ServicesPage"
              options={{ title: "Inventory Services" }}
              component={ServicesPage}
            ></Stack.Screen>
            <Stack.Screen
              name="ReceievedGoods"
              options={{ title: "Receieved Goods" }}
              component={ReceivedGoods}
            ></Stack.Screen>
            <Stack.Screen
              name="Payment"
              options={{ title: "Payment", headerShown: false }}
              component={Payment}
            ></Stack.Screen>
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
