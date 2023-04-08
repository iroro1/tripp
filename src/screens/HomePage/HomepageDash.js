import Constants from "expo-constants";
import {
  AddCircle,
  ArrowLeft,
  Back,
  Check,
  CloudLightning,
  Home,
  Receipt,
  TickCircle,
  UserTick,
  Video,
} from "iconsax-react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../../components/AppButton";
import CustomModal from "../../components/CustomModal";
import AppTextInput from "../../components/TextInput";
import ScreenWrapper from "../../Layout/ScreenWrapper";
import { store } from "../../store/configureAppStore";
import Card from "./Card";
import CardPay from "./CardPay";
import Header from "./Header";
import IconCustom from "./IconCustom";
import IconCustomWrapper from "./IconCustomWrapper";
import { BlurView } from "expo-blur";
import CardMain from "./CardMain";

const HomepageDash = ({ route }) => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState("personal");
  const [detail, setDetails] = useState({});
  const [paymentPlan, setPaymentPlan] = useState("one");
  const [screen, setScreen] = useState("search");
  const [dd, setDD] = useState(data.length === 0);
  const { userData } = store.getState().auth;

  const scheduleBillFn = (screen) => {
    setScreen(screen);
  };
  const newAccountFn = () => {};
  console.log(Constants.statusBarHeight);
  return (
    <View style={styles.container}>
      {dd && (
        <CustomModal
          style={{
            backgroundColor:
              screen === "payBillTransact" ? "#ffffff60" : "#fff",
            paddingHorizontal: screen !== "search" && "4%",
          }}
          isOpenFn={() => setDD(false)}
        >
          {screen === "search" && (
            <>
              <Header title={"Your Bills"} />
              <ScrollView
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#fff",
                  paddingTop: 33,
                  paddingHorizontal: "4%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {account === "personal" && (
                    <AppButton
                      title={"Personal"}
                      width={84}
                      height={27}
                      padding={0}
                      borderRadius={6}
                      onPress={() => {}}
                    />
                  )}

                  <TouchableOpacity onPress={newAccountFn}>
                    <AddCircle variant="Bold" />
                  </TouchableOpacity>
                </View>
                <AppTextInput
                  iconR={"text-search"}
                  placeholder={"Placeholder Label"}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "70%",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/empty.png")}
                  />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text>You have no bills</Text>
                    <AppButton
                      width={157}
                      height={31}
                      padding={0}
                      borderRadius={52}
                      onPress={() => scheduleBillFn("CreateBill")}
                      title={"Schedule your bills"}
                    />
                  </View>
                </View>
              </ScrollView>
            </>
          )}
          {screen === "CreateBill" && (
            <View style={[styles.container]}>
              <TouchableOpacity onPress={() => setScreen("search")}>
                <ArrowLeft color="#000" />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 26,
                  marginBottom: 17,
                  color: "#111317",
                  fontWeight: "700",
                  fontSize: 27,
                }}
              >
                Create Bill
              </Text>

              <Card
                marginTop={17}
                Icon={
                  <IconCustom
                    bgColor={"#1A75FD"}
                    imgSrc={require("../../assets/images/tv.png")}
                  />
                }
                title="Customise Your Bill"
                subtitle={"Make plans for the rainy day "}
                onPress={() => setScreen("newBill")}
              />
              <View style={{ marginTop: 28 }}>
                <Card
                  Icon={
                    <IconCustom
                      bgColor={"#FF9500"}
                      imgSrc={require("../../assets/images/tv.png")}
                    />
                  }
                  title="Television"
                  subtitle={"Pay your TV bill here"}
                />
                <Card
                  Icon={
                    <IconCustom
                      bgColor={"#34C759"}
                      imgSrc={require("../../assets/images/tv.png")}
                    />
                  }
                  title="Electricity Bill"
                  subtitle={"View how much you need to pay"}
                />
              </View>
            </View>
          )}
          {screen === "newBill" && (
            <>
              <ScrollView
                style={[
                  styles.container,
                  { backgroundColor: "#00000006", paddingHorizontal: 0 },
                ]}
              >
                <View
                  style={{
                    paddingHorizontal: "4%",
                  }}
                >
                  <TouchableOpacity onPress={() => setScreen("CreateBill")}>
                    <ArrowLeft color="#000" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#111317",
                      fontWeight: "700",
                      fontSize: 16,
                      marginTop: 26,
                    }}
                  >
                    Create a custom bill
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 22,
                    backgroundColor: "#fff",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1,
                    paddingHorizontal: "4%",
                    paddingTop: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "#0F172A",
                      fontWeight: "700",
                      fontSize: 27,
                      marginBottom: 29,
                    }}
                  >
                    Enter bill details
                  </Text>

                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "OpenSans_600SemiBold",
                        marginBottom: -4,
                      }}
                    >
                      Bill name
                    </Text>
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="Enter bill name "
                      name={"billName"}
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
                      Amount Due
                    </Text>
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="Amount Due "
                      name={"billName"}
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
                      Select Category
                    </Text>
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="Utitlity,grocery, e.t.c"
                      name={"billName"}
                    />
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  width: "92%",
                }}
              >
                <AppButton
                  title={"Next"}
                  onPress={() => setScreen("schedulePayment")}
                />
              </View>
            </>
          )}
          {screen === "schedulePayment" && (
            <>
              <ScrollView
                style={[
                  styles.container,
                  { backgroundColor: "#00000006", paddingHorizontal: 0 },
                ]}
              >
                <View
                  style={{
                    paddingHorizontal: "4%",
                  }}
                >
                  <TouchableOpacity onPress={() => setScreen("CreateBill")}>
                    <ArrowLeft color="#000" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#111317",
                      fontWeight: "700",
                      fontSize: 16,
                      marginTop: 26,
                    }}
                  >
                    Schedule Payment
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 22,
                    backgroundColor: "#fff",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1,
                    paddingHorizontal: "4%",
                    paddingTop: 30,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      backgroundColor: "rgba(118, 118, 128, 0.12)",
                      height: 36,
                      borderRadius: 9,
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 2,
                    }}
                  >
                    <Pressable
                      style={{
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          paymentPlan === "one" ? "#fff" : "transparent",
                        height: 28,
                        borderRadius: 7,
                      }}
                      onPress={() => setPaymentPlan("one")}
                    >
                      <Text>One-off</Text>
                    </Pressable>
                    <Pressable
                      style={{
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          paymentPlan !== "one" ? "#fff" : "transparent",
                        height: 28,
                        borderRadius: 7,
                      }}
                      onPress={() => setPaymentPlan("two")}
                    >
                      <Text>Recurring</Text>
                    </Pressable>
                  </View>

                  <View style={{ marginTop: 31 }}>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "OpenSans_600SemiBold",
                        marginBottom: -4,
                      }}
                    >
                      Due Date
                    </Text>
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="dd/mm/yy"
                      name={"dueDate"}
                    />
                  </View>
                  {paymentPlan !== "one" && (
                    <View style={{ marginTop: 31 }}>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 14,
                          fontFamily: "OpenSans_600SemiBold",
                          marginBottom: -4,
                        }}
                      >
                        Frequency of deduction
                      </Text>
                      <AppTextInput
                        onChangeText={(e) => {
                          setData({ ...data, fullName: e });
                          disabledFn();
                        }}
                        placeholder="Select"
                        name={"dueDate"}
                      />
                    </View>
                  )}
                </View>
              </ScrollView>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  width: "92%",
                }}
              >
                <AppButton
                  title={"Next"}
                  onPress={() => setScreen("paymentOnce")}
                />
              </View>
            </>
          )}
          {screen === "paymentOnce" && (
            <>
              <ScrollView
                style={[
                  styles.container,
                  { backgroundColor: "#00000006", paddingHorizontal: 0 },
                ]}
              >
                <View
                  style={{
                    paddingHorizontal: "4%",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setScreen("schedulePayment")}
                  >
                    <ArrowLeft color="#000" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#111317",
                      fontWeight: "700",
                      fontSize: 16,
                      marginTop: 26,
                    }}
                  >
                    Payment method
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 22,
                    backgroundColor: "#fff",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1,
                    paddingHorizontal: "4%",
                    paddingTop: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "#0F172A",
                      fontWeight: "700",
                      fontSize: 27,
                      width: 297,
                      marginBottom: 42,
                    }}
                  >
                    Select Payment Destination
                  </Text>

                  <CardPay
                    Icon={
                      <IconCustom
                        bgColor={"#34C759"}
                        imgSrc={require("../../assets/images/tv.png")}
                      />
                    }
                    title="Bank account"
                    subtitle={"Withdraw funds directly to your bank"}
                    onPress={() => setScreen("addBank")}
                  />
                  <View style={{ marginTop: 16 }}>
                    <CardPay
                      Icon={
                        <IconCustom
                          bgColor={"#34C759"}
                          imgSrc={require("../../assets/images/tv.png")}
                        />
                      }
                      title="Tripplex wallet"
                      subtitle={
                        "Receive funds instantly in your Tripplex Wallet"
                      }
                      onPress={() => setScreen("addBank")}
                    />
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  width: "92%",
                }}
              >
                <AppButton
                  title={"Continue"}
                  onPress={() => setScreen("addBank")}
                />
              </View>
            </>
          )}

          {screen === "addBank" && (
            <>
              <ScrollView
                style={[
                  styles.container,
                  { backgroundColor: "#00000006", paddingHorizontal: 0 },
                ]}
              >
                <View
                  style={{
                    paddingHorizontal: "4%",
                  }}
                >
                  <TouchableOpacity onPress={() => setScreen("paymentOnce")}>
                    <ArrowLeft color="#000" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#111317",
                      fontWeight: "700",
                      fontSize: 16,
                      marginTop: 26,
                    }}
                  >
                    Create a custom bill
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 22,
                    backgroundColor: "#fff",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1,
                    paddingHorizontal: "4%",
                    paddingTop: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "#0F172A",
                      fontWeight: "700",
                      fontSize: 27,
                      width: 297,
                      marginBottom: 42,
                    }}
                  >
                    Add Bank Details
                  </Text>

                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "OpenSans_600SemiBold",
                        marginBottom: -4,
                      }}
                    >
                      Select Bank <Text style={{ color: "red" }}>*</Text>
                    </Text>
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="Select Bank name "
                      name={"bankName"}
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
                      Account Number
                    </Text>
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="10 digit account number here"
                      name={"bankName"}
                    />
                    <AppTextInput
                      onChangeText={(e) => {
                        setData({ ...data, fullName: e });
                        disabledFn();
                      }}
                      placeholder="10 digit account number here"
                      name={"bankName"}
                      disabled
                    />
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  width: "92%",
                }}
              >
                <AppButton
                  title={"Continue"}
                  onPress={() => setScreen("paymentReview")}
                />
              </View>
            </>
          )}
          {screen === "paymentReview" && (
            <>
              <ScrollView
                style={[
                  styles.container,
                  { backgroundColor: "#00000006", paddingHorizontal: 0 },
                ]}
              >
                <View
                  style={{
                    paddingHorizontal: "4%",
                  }}
                >
                  <TouchableOpacity onPress={() => setScreen("addBank")}>
                    <ArrowLeft color="#000" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#111317",
                      fontWeight: "700",
                      fontSize: 16,
                      marginTop: 26,
                    }}
                  >
                    Personal Bill
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 22,
                    minHeight: "100%",
                    width: "100%",
                    flex: 1,
                    paddingHorizontal: "4%",
                    paddingTop: 30,
                  }}
                >
                  <Card
                    Icon={
                      <IconCustomWrapper
                        bgColor={"#1A75FD"}
                        Icon={<Receipt color={"#fff"} />}
                      />
                    }
                    title="Jaye School fees"
                    subtitle={" "}
                    showArr={false}
                  />
                  <View
                    style={{
                      minHeight: "70%",
                      backgroundColor: "#fff",
                      width: "100%",
                      elevation: 6,
                      marginTop: 22,
                      paddingHorizontal: 22,
                      paddingTop: 32,
                    }}
                  >
                    <View
                      style={{
                        borderColor: "#E2E8F0",
                        borderWidth: 1,
                        padding: 13,
                        borderRadius: 10,
                        marginBottom: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: "#0F172A",
                          fontWeight: "400",
                          fontSize: 11,
                        }}
                      >
                        Bill Amount :
                      </Text>
                      <Text
                        style={{
                          paddingBottom: 11,
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 1,
                          fontWeight: "700",
                          fontSize: 20,
                        }}
                      >
                        N60,000.00
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Bill Type
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          Personal Bill
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderColor: "#E2E8F0",
                        borderWidth: 1,
                        padding: 13,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 2,
                          paddingBottom: 19,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Due Date
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          20.02.2023
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 2,
                          paddingBottom: 19,
                          marginTop: 25,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Status
                        </Text>
                        <View
                          style={{
                            backgroundColor: "#FDF6B2",
                            paddingVertical: 2,
                            paddingHorizontal: 10,
                            borderRadius: 6,
                          }}
                        >
                          <Text
                            style={{
                              color: "#723B13",
                              fontWeight: "600",
                              fontSize: 14,
                            }}
                          >
                            Unpaid
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 2,
                          paddingBottom: 19,
                          marginTop: 25,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Date Created
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          05.02.2023
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          paddingBottom: 19,
                          marginTop: 25,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Time
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          06:00PM
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderColor: "#E2E8F0",
                        borderWidth: 1,
                        padding: 13,
                        borderRadius: 10,
                        marginTop: 15,
                      }}
                    >
                      <Text>Payment account</Text>
                      <CardPay
                        marginTop={6}
                        height={62}
                        Icon={
                          <IconCustom
                            imgSize={30}
                            imgSrc={require("../../assets/images/gtb.png")}
                          />
                        }
                        showArrow={false}
                        title="0928735625 - GTB"
                        subtitle={"John Snow"}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  width: "92%",
                }}
              >
                <AppButton
                  title={"Create Bill"}
                  onPress={() => setScreen("payBillTransact")}
                />
              </View>
            </>
          )}
          {screen === "payBillTransact" && (
            <>
              <ScrollView style={[styles.container, { paddingHorizontal: 0 }]}>
                <View
                  style={{
                    paddingHorizontal: "4%",
                  }}
                >
                  <TouchableOpacity onPress={() => setScreen("addBank")}>
                    <ArrowLeft color="#000" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#111317",
                      fontWeight: "700",
                      fontSize: 16,
                      marginTop: 26,
                    }}
                  >
                    Personal Bill
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 22,
                    minHeight: "100%",
                    width: "100%",
                    flex: 1,
                    paddingHorizontal: "4%",
                    paddingTop: 30,
                  }}
                >
                  <Card
                    Icon={
                      <IconCustomWrapper
                        bgColor={"#1A75FD"}
                        Icon={<Receipt color={"#fff"} />}
                      />
                    }
                    title="Jaye School fees"
                    subtitle={" "}
                    showArr={false}
                  />
                  <View
                    style={{
                      minHeight: "70%",
                      backgroundColor: "#fff",
                      width: "100%",
                      elevation: 6,
                      marginTop: 22,
                      paddingHorizontal: 22,
                      paddingTop: 32,
                    }}
                  >
                    <View
                      style={{
                        borderColor: "#E2E8F0",
                        borderWidth: 1,
                        padding: 13,
                        borderRadius: 10,
                        marginBottom: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: "#0F172A",
                          fontWeight: "400",
                          fontSize: 11,
                        }}
                      >
                        Bill Amount :
                      </Text>
                      <Text
                        style={{
                          paddingBottom: 11,
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 1,
                          fontWeight: "700",
                          fontSize: 20,
                        }}
                      >
                        N60,000.00
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Bill Type
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          Personal Bill
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderColor: "#E2E8F0",
                        borderWidth: 1,
                        padding: 13,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 2,
                          paddingBottom: 19,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Due Date
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          20.02.2023
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 2,
                          paddingBottom: 19,
                          marginTop: 25,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Status
                        </Text>
                        <View
                          style={{
                            backgroundColor: "#FDF6B2",
                            paddingVertical: 2,
                            paddingHorizontal: 10,
                            borderRadius: 6,
                          }}
                        >
                          <Text
                            style={{
                              color: "#723B13",
                              fontWeight: "600",
                              fontSize: 14,
                            }}
                          >
                            Unpaid
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          borderBottomWidth: 2,
                          paddingBottom: 19,
                          marginTop: 25,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Date Created
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          05.02.2023
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottomColor: "#E2E8F0",
                          paddingBottom: 19,
                          marginTop: 25,
                        }}
                      >
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "400",
                            fontSize: 14,
                          }}
                        >
                          Time
                        </Text>
                        <Text
                          style={{
                            color: "#1E293B",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          06:00PM
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderColor: "#E2E8F0",
                        borderWidth: 1,
                        padding: 13,
                        borderRadius: 10,
                        marginTop: 15,
                      }}
                    >
                      <Text>Payment account</Text>
                      <CardPay
                        marginTop={6}
                        height={62}
                        Icon={
                          <IconCustom
                            imgSize={30}
                            imgSrc={require("../../assets/images/gtb.png")}
                          />
                        }
                        showArrow={false}
                        title="0928735625 - GTB"
                        subtitle={"John Snow"}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  width: "88%",
                }}
              >
                <AppButton
                  title={"Create Bill"}
                  onPress={() => setScreen("payBillTransact")}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  flex: 1,
                  backgroundColor: "#ffffff90",
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 99,
                }}
              >
                <BlurView intensity={100}>
                  <DropShadow
                    style={{
                      shadowColor: "#00000050",
                      shadowOffset: {
                        width: 10,
                        height: 4,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 5,
                      height: 343,
                      width: "92%",
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderColor: "#ccc",
                      borderRadius: 12,
                      padding: 16,
                      paddingTop: 20,
                      position: "relative",
                    }}
                  >
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <TickCircle />

                        <TouchableOpacity
                          onPress={() => setScreen("paymentReview")}
                        >
                          <Text>X</Text>
                        </TouchableOpacity>
                      </View>
                      <Text
                        style={{
                          marginTop: 16,
                          fontWeight: "700",
                          fontSize: 18,
                          width: 311,
                        }}
                      >
                        You have successfully created your bill
                      </Text>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 14,
                          width: 311,
                          color: "#475467",
                          marginTop: 8,
                        }}
                      >
                        Your bills and expenses will never be caught unpaid.
                      </Text>

                      <View
                        style={{
                          borderColor: "#eee",
                          borderWidth: 1,
                          borderRadius: 10,
                          marginTop: 24,
                          padding: 13,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              color: "#0F172A",
                              fontSize: 14,
                              fontWeight: "600",
                            }}
                          >
                            Rent
                          </Text>
                          <Text
                            style={{
                              color: "#0F172A",
                              fontSize: 14,
                              fontWeight: "400",
                            }}
                          >
                            N60,000.00
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: 0,
                            marginTop: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "#94A3B8",
                              fontSize: 14,
                              fontWeight: "400",
                            }}
                          >
                            Due :
                          </Text>
                          <Text
                            style={{
                              color: "#94A3B8",
                              fontSize: 14,
                              fontWeight: "400",
                            }}
                          >
                            20.02.2023
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          bottom: 30,
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginHorizontal: "auto",
                          marginTop: 44,
                        }}
                      >
                        <AppButton
                          title={"Done"}
                          onPress={() => {
                            setScreen("search");
                            setDD(false);
                            setData([
                              {
                                id: 1,
                                title: "Electricity",
                                cost: "N60,000.00",
                                type: "Monthly",
                                "Due date": "1 Nov 2022, 06:00PM",
                                Icon: <CloudLightning />,
                                bgColor: "#1A75FD",
                              },
                              {
                                id: 2,
                                title: "Rent",
                                cost: "N1,500,000.00",
                                type: "Monthly",
                                "Due date": "1 Nov 2022, 06:00PM",
                                Icon: <Home />,
                                bgColor: "#00A372",
                              },
                              {
                                id: 3,
                                title: "Cable TV",
                                cost: "N1,500,000.00",
                                type: "Monthly",
                                "Due date": "1 Nov 2022, 06:00PM",
                                Icon: <Video />,
                                bgColor: "#FE5219",
                              },
                            ]);
                          }}
                        />
                      </View>
                    </View>
                  </DropShadow>
                </BlurView>
              </View>
            </>
          )}
        </CustomModal>
      )}

      {!dd && (
        <>
          <Header
            userName={userData?.data?.given_name}
            imgUrl={userData?.data["custom:profile_pic_url"]}
          />

          <FlatList
            style={{
              flex: 1,
              width: "100%",
              paddingHorizontal: "4%",
            }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardMain
                marginTop={18}
                Icon={
                  <IconCustom
                    bgColor={item.bgColor}
                    imgSrc={require("../../assets/images/tv.png")}
                  />
                }
                title={item.title}
                subtitle={item["Due date"]}
                cost={item.cost}
                type={item.type}
                onPress={() => setDetails({ ...item })}
              />
            )}
          />
        </>
      )}

      {detail?.title && (
        <CustomModal>
          <>
            <ScrollView style={[styles.container, { paddingHorizontal: 0 }]}>
              <View
                style={{
                  paddingHorizontal: "4%",
                }}
              >
                <TouchableOpacity onPress={() => setDetails({})}>
                  <ArrowLeft color="#000" />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#111317",
                    fontWeight: "700",
                    fontSize: 16,
                    marginTop: 26,
                  }}
                >
                  Personal Bill
                </Text>
              </View>
              <View
                style={{
                  marginTop: 22,
                  minHeight: "100%",
                  width: "100%",
                  flex: 1,
                  paddingHorizontal: "4%",
                  paddingTop: 30,
                }}
              >
                <Card
                  Icon={
                    <IconCustomWrapper
                      bgColor={"#1A75FD"}
                      Icon={<Receipt color={"#fff"} />}
                    />
                  }
                  title={detail.title}
                  subtitle={" "}
                  showArr={false}
                />
                <View
                  style={{
                    minHeight: "70%",
                    backgroundColor: "#fff",
                    width: "100%",
                    elevation: 6,
                    marginTop: 22,
                    paddingHorizontal: 22,
                    paddingTop: 32,
                  }}
                >
                  <View
                    style={{
                      borderColor: "#E2E8F0",
                      borderWidth: 1,
                      padding: 13,
                      borderRadius: 10,
                      marginBottom: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#0F172A",
                        fontWeight: "400",
                        fontSize: 11,
                      }}
                    >
                      Bill Amount :
                    </Text>
                    <Text
                      style={{
                        paddingBottom: 11,
                        borderBottomColor: "#E2E8F0",
                        borderBottomWidth: 1,
                        fontWeight: "700",
                        fontSize: 20,
                      }}
                    >
                      {detail.cost}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "400",
                          fontSize: 14,
                        }}
                      >
                        Bill Type
                      </Text>
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        Personal Bill
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: "#E2E8F0",
                      borderWidth: 1,
                      padding: 13,
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "#E2E8F0",
                        borderBottomWidth: 2,
                        paddingBottom: 19,
                      }}
                    >
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "400",
                          fontSize: 14,
                        }}
                      >
                        Due Date
                      </Text>
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        {detail["Due date"].split(",")[0]}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "#E2E8F0",
                        borderBottomWidth: 2,
                        paddingBottom: 19,
                        marginTop: 25,
                      }}
                    >
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "400",
                          fontSize: 14,
                        }}
                      >
                        Status
                      </Text>
                      <View
                        style={{
                          backgroundColor: "#FDF6B2",
                          paddingVertical: 2,
                          paddingHorizontal: 10,
                          borderRadius: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "#723B13",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          Unpaid
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "#E2E8F0",
                        borderBottomWidth: 2,
                        paddingBottom: 19,
                        marginTop: 25,
                      }}
                    >
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "400",
                          fontSize: 14,
                        }}
                      >
                        Date Created
                      </Text>
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        05.02.2023
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottomColor: "#E2E8F0",
                        paddingBottom: 19,
                        marginTop: 25,
                      }}
                    >
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "400",
                          fontSize: 14,
                        }}
                      >
                        Time
                      </Text>
                      <Text
                        style={{
                          color: "#1E293B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        {detail["Due date"].split(",")[1]}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: "#E2E8F0",
                      borderWidth: 1,
                      padding: 13,
                      borderRadius: 10,
                      marginTop: 15,
                    }}
                  >
                    <Text>Payment account</Text>
                    <CardPay
                      marginTop={6}
                      height={62}
                      Icon={
                        <IconCustom
                          imgSize={30}
                          imgSrc={require("../../assets/images/gtb.png")}
                        />
                      }
                      showArrow={false}
                      title="0928735625 - GTB"
                      subtitle={"John Snow"}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </>
        </CustomModal>
      )}
    </View>
    // <ScreenWrapper>
    // </ScreenWrapper>
  );
};

export default HomepageDash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#00000006",
  },
});
